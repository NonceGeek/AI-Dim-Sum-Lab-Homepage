'use client';

import { useState, useEffect } from 'react';
import { type Dictionary } from '../i18n/types';

interface ScrollIndicatorProps {
  threshold?: number; // 滚动阈值，超过此值后隐藏指示器
  className?: string; // 自定义样式类
  text?: string; // 自定义文字
  dict?: Dictionary; // 翻译字典
}

export default function ScrollIndicator({ 
  threshold = 100, 
  className = '', 
  text,
  dict
}: ScrollIndicatorProps) {
  const [showIndicator, setShowIndicator] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > threshold) {
        setShowIndicator(false);
      } else {
        setShowIndicator(true);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [threshold]);

  if (!showIndicator) return null;

  const displayText = text || dict?.hero.scrollIndicator || 'Scroll Down';

  return (
    <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 ${className}`}>
      <div className="flex flex-col items-center space-y-2 animate-pulse">
        <div className="text-primary/80 text-sm font-medium">{displayText}</div>
        <div className="w-6 h-6 flex items-center justify-center">
          <svg 
            className="w-5 h-5 animate-bounce text-primary" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>
    </div>
  );
} 