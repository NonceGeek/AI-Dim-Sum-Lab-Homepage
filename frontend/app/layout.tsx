import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Noto_Sans_SC, Noto_Sans_HK } from "next/font/google";
import "./globals.css";

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

export const metadata: Metadata = {
  title: "DIMSUM AI Labs",
  description: "Cultivating an AI-Compatible Cantonese Corpus: Bridging Global Cantonese AI Ecosystems",
  keywords: ["粤语", "AI", "人工智能", "Cantonese", "自然语言处理", "NLP"],
  authors: [{ name: "DIMSUM AI Labs" }],
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  icons: {
    icon: '/logo.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" data-theme="dark">
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${notoSansSC.variable} ${notoSansHK.variable} antialiased bg-black`}
      >
        {children}
      </body>
    </html>
  );
}
