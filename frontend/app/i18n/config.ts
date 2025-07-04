export const defaultLocale = 'zh';
export const locales = ['en', 'zh', 'yue'] as const;
export type Locale = typeof locales[number];

export const localeNames: Record<Locale, string> = {
  en: 'English',
  zh: '中文',
  yue: '粵語'
};

// 语言检测配置
export const localeDetection = {
  cookieName: 'NEXT_LOCALE',
  defaultLocale,
  locales,
  localeDetection: true
}; 