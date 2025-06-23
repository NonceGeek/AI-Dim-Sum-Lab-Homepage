import { Application, Router } from "oak";
import { oakCors } from "cors";

const GITHUB_API_URL = "https://api.github.com/graphql";

interface GitHubToken {
  token: string;
}

// 从环境变量获取 GitHub token
function getGitHubToken(): string | null {
  return Deno.env.get("GITHUB_TOKEN") || null;
}

// Kanban 项目的 GraphQL 查询
const KANBAN_QUERY = `query {
  organization(login: "NonceGeek") {
    projectV2(number: 11) {
      title
      fields(first: 20) {
        nodes {
          ... on ProjectV2SingleSelectField {
            id
            name
            options {
              id
              name
            }
          }
        }
      }
      items(first: 100) {
        nodes {
          content {
            ... on Issue {
              title
              url
              repository { name }
              number
              assignees(first: 5) {
                nodes {
                  login
                  avatarUrl
                }
              }
            }
          }
          fieldValues(first: 10) {
            nodes {
              ... on ProjectV2ItemFieldSingleSelectValue {
                field {
                  ... on ProjectV2SingleSelectField {
                    name
                  }
                }
                optionId
              }
            }
          }
        }
      }
    }
  }
}`;

async function handleKanbanRequest(): Promise<Response> {
  try {
    const githubToken = getGitHubToken();
    if (!githubToken) {
      return new Response(
        JSON.stringify({ error: "GitHub token not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // 发送 Kanban 查询到 GitHub API
    const response = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${githubToken}`,
        "User-Agent": "AI-DimSum-Lab-Homepage/1.0",
      },
      body: JSON.stringify({
        query: KANBAN_QUERY,
      }),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling Kanban request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function handleGitHubRequest(req: Request): Promise<Response> {
  try {
    const body = await req.json();

    // 验证请求体
    if (!body.query) {
      return new Response(
        JSON.stringify({ error: "Missing query parameter" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    const githubToken = getGitHubToken();
    if (!githubToken) {
      return new Response(
        JSON.stringify({ error: "GitHub token not configured" }),
        {
          status: 500,
          headers: { "Content-Type": "application/json" },
        },
      );
    }

    // 转发请求到 GitHub API
    const response = await fetch(GITHUB_API_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${githubToken}`,
        "User-Agent": "AI-DimSum-Lab-Homepage/1.0",
      },
      body: JSON.stringify(body),
    });

    const data = await response.json();

    return new Response(JSON.stringify(data), {
      status: response.status,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Error handling GitHub request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

async function handler(req: Request): Promise<Response> {
  // 处理 CORS 预检请求
  if (req.method === "OPTIONS") {
    return new Response(null);
  }

  // 只允许 POST 请求
  if (req.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "Content-Type": "application/json" },
    });
  }

  return handleGitHubRequest(req);
}

const router = new Router();

router
  .get("/health", (ctx) => {
    ctx.response.body = { status: "ok", timestamp: new Date().toISOString() };
  })
  .get("/api/kanban", async (ctx) => {
    const response = await handleKanbanRequest();
    ctx.response.status = response.status;
    ctx.response.type = "json";
    ctx.response.body = await response.json();
  })
  .post("/api/github", async (ctx) => {
    const req = ctx.request;
    const body = await req.body({ type: "json" }).value;
    ctx.request.body = async () => body; // 兼容原逻辑
    const response = await handler(
      new Request(req.url.href, {
        method: "POST",
        headers: req.headers,
        body: JSON.stringify(body),
      }),
    );
    ctx.response.status = response.status;
    ctx.response.headers = response.headers;
    ctx.response.body = await response.json();
  });

const app = new Application();
app.use(oakCors());
app.use(router.routes());
app.use(router.allowedMethods());

const port = parseInt(Deno.env.get("PORT") || "8000");
console.log(`🚀 Server running on http://localhost:${port}`);
await app.listen({ port });
