'use client';
import { Globe, ChevronDown } from 'lucide-react';
import { useRouter, usePathname } from 'next/navigation';
import { useState, useRef, useEffect } from 'react';
import { locales, localeNames, type Locale } from '../i18n/config';

interface LanguageSwitcherProps {
  currentLocale: Locale;
  className?: string;
}

export default function LanguageSwitcher({ currentLocale, className = '' }: LanguageSwitcherProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const pathname = usePathname();

  // 关闭下拉菜单当点击外部
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleLanguageChange = (locale: Locale) => {
    setIsOpen(false);
    
    // 构建新的URL路径
    const pathSegments = pathname.split('/');
    const currentPathLocale = pathSegments[1];
    
    // 如果当前路径包含语言代码，替换它
    if (locales.includes(currentPathLocale as Locale)) {
      pathSegments[1] = locale;
    } else {
      // 如果当前路径不包含语言代码，在开头添加
      pathSegments.splice(1, 0, locale);
    }
    
    const newPath = pathSegments.join('/');
    router.push(newPath);
  };

  return (
    <div className={`relative ${className}`} ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg bg-base-200/50 hover:bg-base-200/80 border border-base-300/30 hover:border-base-300/50 transition-all duration-300 backdrop-blur-sm group"
      >
        <Globe className="w-4 h-4 text-base-content/70 group-hover:text-primary transition-colors duration-300" />
        <span className="text-sm font-medium text-base-content group-hover:text-primary transition-colors duration-300">
          {localeNames[currentLocale]}
        </span>
        <ChevronDown className={`w-4 h-4 text-base-content/50 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* 下拉菜单 */}
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-48 bg-base-100/95 backdrop-blur-xl border border-base-300/30 rounded-xl shadow-2xl z-50 overflow-hidden">
          <div className="py-2">
            {locales.map((locale) => (
              <button
                key={locale}
                onClick={() => handleLanguageChange(locale)}
                className={`w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-primary/10 hover:text-primary transition-all duration-300 ${
                  locale === currentLocale ? 'bg-primary/5 text-primary' : 'text-base-content'
                }`}
              >
                <span className="text-sm font-medium">{localeNames[locale]}</span>
                {locale === currentLocale && (
                  <div className="ml-auto w-2 h-2 bg-primary rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
} 