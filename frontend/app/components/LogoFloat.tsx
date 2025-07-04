"use client"
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';

interface LogoFloatProps {
  src: string;
  alt?: string;
  width?: number;
  height?: number;
  className?: string;
}

export default function LogoFloat({ src, alt = '', width = 140, height = 140, className = '' }: LogoFloatProps) {
  // 使用更丰富的渐变色配置，包含多个颜色停止点
  const lightGradient = `
    linear-gradient(
      135deg, 
      var(--color-primary) 0%, 
      var(--color-secondary) 25%, 
      var(--color-accent) 50%, 
      var(--color-primary) 75%, 
      var(--color-secondary) 100%
    )
  `;
  
  const darkGradient = `
    linear-gradient(
      135deg, 
      var(--color-primary) 0%, 
      var(--color-accent) 25%, 
      var(--color-secondary) 50%, 
      var(--color-primary) 75%, 
      var(--color-accent) 100%
    )
  `;

  const [isDark, setIsDark] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)');
      setIsDark(mq.matches);
      const handler = (e: MediaQueryListEvent) => setIsDark(e.matches);
      mq.addEventListener('change', handler);
      return () => mq.removeEventListener('change', handler);
    }
  }, []);

  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* 主光晕层 - 使用background-position动画实现渐变流动 */}
      <motion.div
        className="absolute inset-0 rounded-full blur-3xl z-0"
        style={{
          background: isDark ? darkGradient : lightGradient,
          backgroundSize: '400% 400%',
          backgroundPosition: '0% 50%',
          opacity: 0.4,
        }}
        animate={{
          backgroundPosition: [
            '0% 50%',
            '100% 50%',
            '0% 50%'
          ],
        }}
        transition={{
          backgroundPosition: { 
            duration: 8, 
            repeat: Infinity, 
            repeatType: 'loop', 
            ease: 'linear' 
          },
        }}
      />
      
      {/* 第二层光晕 - 反向流动，增加层次感 */}
      <motion.div
        className="absolute inset-0 rounded-full blur-2xl z-0"
        style={{
          background: isDark ? darkGradient : lightGradient,
          backgroundSize: '300% 300%',
          backgroundPosition: '100% 50%',
          opacity: 0.25,
        }}
        animate={{
          backgroundPosition: [
            '100% 50%',
            '0% 50%',
            '100% 50%'
          ],
        }}
        transition={{
          backgroundPosition: { 
            duration: 6, 
            repeat: Infinity, 
            repeatType: 'loop', 
            ease: 'linear' 
          },
        }}
      />
      
      {/* Logo图片 */}
      <Image 
        src={src} 
        alt={alt} 
        width={width} 
        height={height} 
        className="relative z-10 drop-shadow-2xl" 
        priority 
      />
    </div>
  );
} 