import { BookOpen, ShoppingCart, Search, Cloud, Globe } from 'lucide-react';
import { FadeInUp, StaggeredList, StaggeredItem } from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { type Dictionary } from '../i18n/types';

interface FeaturesProps {
  dict: Dictionary;
}

export default function Features({ dict }: FeaturesProps) {
  const features = [
    {
      title: dict.features.items.corpus.title,
      description: dict.features.items.corpus.description,
      icon: BookOpen
    },
    {
      title: dict.features.items.ecosystem.title,
      description: dict.features.items.ecosystem.description,
      icon: ShoppingCart
    },
    {
      title: dict.features.items.search.title,
      description: dict.features.items.search.description,
      icon: Search
    },
    {
      title: dict.features.items.saas.title,
      description: dict.features.items.saas.description,
      icon: Cloud
    },
    {
      title: dict.features.items.community.title,
      description: dict.features.items.community.description,
      icon: Globe
    }
  ];

  return (
    <div id="features" className="mb-8 scroll-mt-20 relative px-4 sm:px-6 lg:px-8">
      {/* 背景装饰 - 移动端优化的多层光源效果 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 主要光源 - 移动端调整位置和大小 */}
        <div className="absolute top-1/4 left-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-primary/8 to-accent/6 rounded-full blur-2xl sm:blur-3xl animate-pulse edge-glow"></div>
        
        {/* 次要光源 - 移动端调整位置和大小 */}
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 sm:w-96 sm:h-96 bg-gradient-to-br from-secondary/6 to-info/8 rounded-full blur-2xl sm:blur-3xl animate-pulse edge-glow" style={{animationDelay: '2s'}}></div>
        
        {/* 中央光源 - 移动端调整大小 */}
        <div className="absolute top-1/2 left-1/2 w-[300px] h-[300px] sm:w-[600px] sm:h-[600px] bg-gradient-radial from-primary/3 via-transparent to-transparent rounded-full blur-xl sm:blur-2xl central-pulse"></div>
        
        {/* 动态光线 - 移动端隐藏部分效果 */}
        <div className="absolute top-0 left-0 w-full h-full hidden sm:block">
          <div className="absolute top-1/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/20 to-transparent light-ray" style={{animationDelay: '1s'}}></div>
          <div className="absolute top-2/3 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/15 to-transparent light-ray" style={{animationDelay: '3s'}}></div>
        </div>
        
        {/* 浮动光点 - 移动端减少数量 */}
        <div className="absolute top-1/4 right-1/3 w-3 h-3 sm:w-4 sm:h-4 bg-primary/40 rounded-full blur-sm sparkle"></div>
        <div className="absolute bottom-1/3 left-1/4 w-2 h-2 sm:w-3 sm:h-3 bg-accent/30 rounded-full blur-sm sparkle" style={{animationDelay: '1.5s'}}></div>
        <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 sm:w-2 sm:h-2 bg-secondary/35 rounded-full blur-sm sparkle" style={{animationDelay: '3s'}}></div>
        
        {/* 额外的闪烁光点 - 移动端隐藏 */}
        <div className="absolute top-1/6 left-2/3 w-1 h-1 bg-primary/50 rounded-full sparkle hidden sm:block" style={{animationDelay: '0.5s'}}></div>
        <div className="absolute bottom-1/6 right-2/3 w-1 h-1 bg-accent/40 rounded-full sparkle hidden sm:block" style={{animationDelay: '2.5s'}}></div>
        
        {/* 网格背景效果 - 移动端调整密度 */}
        <div className="absolute inset-0 grid-flicker">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(var(--color-primary), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--color-primary), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px'
          }}></div>
        </div>
        
        {/* 边缘光晕 - 移动端调整大小 */}
        <div className="absolute -top-10 -left-10 sm:-top-20 sm:-left-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-br from-primary/10 to-transparent rounded-full blur-xl sm:blur-2xl edge-glow"></div>
        <div className="absolute -bottom-10 -right-10 sm:-bottom-20 sm:-right-20 w-20 h-20 sm:w-40 sm:h-40 bg-gradient-to-tl from-accent/10 to-transparent rounded-full blur-xl sm:blur-2xl edge-glow" style={{animationDelay: '1s'}}></div>
        
        {/* 光环扩散效果 - 移动端调整大小 */}
        <div className="absolute top-1/3 left-1/2 transform -translate-x-1/2 w-16 h-16 sm:w-32 sm:h-32 border border-primary/10 rounded-full halo-expansion"></div>
        <div className="absolute bottom-1/3 right-1/3 w-12 h-12 sm:w-24 sm:h-24 border border-accent/8 rounded-full halo-expansion" style={{animationDelay: '2s'}}></div>
        
        {/* 扫描线效果 - 移动端隐藏 */}
        <div className="absolute top-0 left-0 w-full h-full pointer-events-none hidden sm:block">
          <div className="absolute top-0 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent scan-line"></div>
          <div className="absolute bottom-1/4 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-accent/20 to-transparent light-sweep" style={{animationDelay: '4s'}}></div>
        </div>
      </div>

      <FadeInUp>
        <div className="text-left mb-12 sm:mb-16">
          <AnimatedText 
            text={dict.features.title}
            as="h2"
            className="text-2xl lg:text-4xl font-extrabold gradient-text-flow mb-4 sm:mb-6 tech-heading"
            delay={0.2}
          />
          <p className="text-base lg:text-xl font-bold text-base-content/80 max-w-4xl tech-text leading-relaxed">
            {dict.features.subtitle}
          </p>
        </div>
      </FadeInUp>
      
      <StaggeredList staggerDelay={0.2}>
        <div className="space-y-6 sm:space-y-8">
          {features.map((feature, index) => {
            const IconComponent = feature.icon;
            return (
              <StaggeredItem key={index} animation="fadeInScale">
                <div className="group relative overflow-hidden flex flex-col lg:flex-row items-start gap-4 sm:gap-6 lg:gap-10 p-6 sm:p-8 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/8 to-primary/4 backdrop-blur-sm border border-primary/15 hover:border-primary/25 transition-all duration-500 hover:scale-[1.01] sm:hover:scale-[1.02] hover:shadow-xl sm:hover:shadow-2xl hover:shadow-primary/20 hover:glow-expand">
                  
                  {/* 悬停时的光效背景 */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000"></div>
                  
                  {/* 外发光效果层 - 移动端减少强度 */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/20 via-primary/10 to-primary/5 opacity-0 group-hover:opacity-100 blur-lg sm:blur-xl transition-all duration-500 -z-10 scale-105 sm:scale-110"></div>
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl bg-gradient-to-br from-primary/15 via-primary/8 to-primary/3 opacity-0 group-hover:opacity-100 blur-xl sm:blur-2xl transition-all duration-700 -z-10 scale-110 sm:scale-125"></div>
                  
                  {/* 左侧：标题和图标 - 移动端优化布局 */}
                  <div className="flex-shrink-0 w-full lg:w-1/3 relative z-10">
                    <div className="flex items-center gap-3 sm:gap-5 text-primary">
                      <div className="flex-shrink-0 relative p-2 sm:p-3 rounded-xl sm:rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 group-hover:scale-110 transition-transform duration-300 group-hover:shadow-lg group-hover:shadow-primary/30">
                        <IconComponent className="text-xl w-6 h-6 sm:text-2xl sm:w-8 sm:h-8 group-hover:animate-pulse group-hover:drop-shadow-lg" />
                        
                        {/* 图标周围的脉冲环 - 移动端减少效果 */}
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border-2 border-primary/20 opacity-0 group-hover:opacity-100 group-hover:scale-125 sm:group-hover:scale-150 transition-all duration-500 group-hover:shadow-lg"></div>
                        <div className="absolute inset-0 rounded-xl sm:rounded-2xl border border-primary/20 opacity-0 group-hover:opacity-50 group-hover:scale-110 sm:group-hover:scale-125 transition-all duration-700 group-hover:shadow-md" style={{animationDelay: '0.2s'}}></div>
                      </div>
                      <div className="flex-1">
                        <h3 className="text-xl lg:text-2xl font-bold tech-heading leading-tight group-hover:text-opacity-90 transition-all duration-300 group-hover:drop-shadow-md">
                          {feature.title}
                        </h3>
                        <div className="h-0.5 bg-gradient-to-r from-primary/20 to-primary/10 mt-2 w-0 group-hover:w-full transition-all duration-500 group-hover:shadow-md"></div>
                      </div>
                    </div>
                  </div>
                  
                  {/* 右侧：描述 - 移动端优化文字大小 */}
                  <div className="flex-1 w-full lg:w-2/3 relative z-10">
                    <p className="text-base sm:text-lg md:text-xl text-base-content/90 leading-relaxed tech-text group-hover:text-base-content transition-colors duration-300">
                      {feature.description}
                    </p>
                    
                    {/* 装饰性的渐变线条 - 移动端调整 */}
                    <div className="mt-4 sm:mt-6 flex gap-1 sm:gap-2">
                      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full w-0 group-hover:w-12 sm:group-hover:w-16 transition-all duration-500 group-hover:shadow-md"></div>
                      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full w-0 group-hover:w-8 sm:group-hover:w-12 transition-all duration-700 group-hover:shadow-md" style={{transitionDelay: '0.1s'}}></div>
                      <div className="h-0.5 sm:h-1 bg-gradient-to-r from-primary/20 to-primary/10 rounded-full w-0 group-hover:w-6 sm:group-hover:w-8 transition-all duration-900 group-hover:shadow-md" style={{transitionDelay: '0.2s'}}></div>
                    </div>
                  </div>
                  
                  {/* 右下角装饰 - 移动端调整大小 */}
                  <div className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-12 h-12 sm:w-20 sm:h-20 bg-gradient-to-br from-primary/10 to-primary/5 rounded-full opacity-0 group-hover:opacity-30 blur-lg sm:blur-xl transition-all duration-500 group-hover:shadow-lg"></div>
                  
                  {/* 额外的外发光装饰 - 移动端减少强度 */}
                  <div className="absolute inset-0 rounded-2xl sm:rounded-3xl border border-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 group-hover:shadow-sm"></div>
                </div>
              </StaggeredItem>
            );
          })}
        </div>
      </StaggeredList>
    </div>
  );
} 