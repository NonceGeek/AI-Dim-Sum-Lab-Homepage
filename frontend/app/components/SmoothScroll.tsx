'use client';

import { ReactNode } from 'react';

interface SmoothScrollProps {
  children: ReactNode;
  targetId: string;
  className?: string;
  style?: React.CSSProperties;
}

export default function SmoothScroll({ children, targetId, className, style }: SmoothScrollProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      // 动态获取 header 高度
      const header = document.querySelector('header.navbar') as HTMLElement;
      const headerHeight = header ? header.offsetHeight : 80;
      
      // 获取目标元素的位置
      const elementPosition = targetElement.offsetTop - headerHeight;
      
      // 使用平滑滚动
      window.scrollTo({
        top: Math.max(0, elementPosition), // 确保不会滚动到负值
        behavior: 'smooth'
      });
      
      // 可选：更新 URL hash（不触发默认滚动）
      if (window.history && window.history.pushState) {
        window.history.pushState(null, '', `#${targetId}`);
      }
    }
  };

  return (
    <a 
      href={`#${targetId}`}
      onClick={handleClick}
      className={className}
      style={style}
    >
      {children}
    </a>
  );
} 