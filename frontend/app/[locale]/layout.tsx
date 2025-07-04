import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_SC, Noto_Sans_HK } from "next/font/google";
import "../globals.css";
import { locales, type Locale } from "../i18n/config";

// 配置 Inter 字体 (英文字体)
const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// 配置 JetBrains Mono 字体 (等宽字体)
const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800"],
});

// 配置 Noto Sans SC 字体 (简体中文)
const notoSansSC = Noto_Sans_SC({
  subsets: ["latin"],
  variable: "--font-noto-sans-sc",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

// 配置 Noto Sans HK 字体 (繁体中文，特别适合粤语)
const notoSansHK = Noto_Sans_HK({
  subsets: ["latin"],
  variable: "--font-noto-sans-hk",
  display: "swap",
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export async function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: Locale }> }): Promise<Metadata> {
  const { locale } = await params;
  
  const titles = {
    en: "DIMSUM AI Labs",
    zh: "DIMSUM AI 实验室",
    yue: "DIMSUM AI 實驗室"
  };
  
  const descriptions = {
    en: "Cultivating an AI-Compatible Cantonese Corpus: Bridging Global Cantonese AI Ecosystems",
    zh: "培育兼容AI的粤语语料库：连接全球粤语AI生态系统",
    yue: "培育兼容AI嘅粵語語料庫：連接全球粵語AI生態系統"
  };

  return {
    title: titles[locale],
    description: descriptions[locale],
    keywords: ["粤语", "AI", "人工智能", "Cantonese", "自然语言处理", "NLP"],
    authors: [{ name: "DIMSUM AI Labs" }],
    viewport: "width=device-width, initial-scale=1",
    robots: "index, follow",
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  return (
    <html lang={locale} data-theme="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} ${notoSansHK.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
} 