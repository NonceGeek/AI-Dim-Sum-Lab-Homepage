'use client';

import { Rocket } from 'lucide-react';
import { FadeInUp } from './ScrollReveal';
import { type Dictionary } from '../i18n/types';

interface HeroContentProps {
  dict: Dictionary;
}

export default function HeroContent({ dict }: HeroContentProps) {
  return (
    <div className="hero-content text-left w-full max-w-none p-8 lg:p-12 relative z-10">
      <div className="w-full">
        {/* 左下角内容区域 */}
        <div className="max-w-4xl">
          {/* 第一行：DIMSUM AI 渐变文字 */}
          <FadeInUp delay={0.1}>
            <h1 className="text-6xl lg:text-8xl font-black tech-heading mb-2 leading-tight">
              <span className="hero-gradient-text">
                {dict.hero.title}
              </span>
            </h1>
          </FadeInUp>

          {/* 第二行：副标题 */}
          <FadeInUp delay={0.3}>
            <h2 className="text-5xl lg:text-7xl font-bold text-base-content mb-6 leading-tight">
              {dict.hero.subtitle}
            </h2>
          </FadeInUp>
          
          {/* 第三行：描述 */}
          <FadeInUp delay={0.5}>
            <p className="text-xl lg:text-2xl text-base-content/80 mb-8 leading-relaxed tech-text max-w-2xl">
              {dict.hero.description}
            </p>
          </FadeInUp>

          {/* 按钮组 */}
          <FadeInUp delay={0.7}>
            <div className="flex gap-4 flex-wrap">
              <a href="#why-we-are-here" className="btn btn-primary btn-lg group relative overflow-hidden btn-shimmer">
                <Rocket className="w-5 h-5 mr-2 group-hover:rotate-12 transition-transform duration-300" />
                {dict.hero.getStarted}
              </a>
            </div>
          </FadeInUp>
        </div>
      </div>
    </div>
  );
} 