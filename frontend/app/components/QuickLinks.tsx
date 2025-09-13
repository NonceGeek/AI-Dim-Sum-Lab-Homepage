import { Database, ShoppingCart, Code, ExternalLink } from 'lucide-react';
import { StaggeredList, StaggeredItem } from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { type Dictionary } from '../i18n/types';

interface QuickLinksProps {
  dict: Dictionary;
}

export default function QuickLinks({ dict }: QuickLinksProps) {
  const links = [
    {
      title: dict.quickLinks.items.data.title,
      description: dict.quickLinks.items.data.description,
      icon: Database,
      color: "primary",
      href: "https://search.aidimsum.com/library",
      button: dict.quickLinks.items.data.button
    },
    {
      title: dict.quickLinks.items.store.title,
      description: dict.quickLinks.items.store.description,
      icon: ShoppingCart,
      color: "secondary",
      href: "https://search.aidimsum.com/appStore",
      button: dict.quickLinks.items.store.button
    },
    {
      title: dict.quickLinks.items.apis.title,
      description: dict.quickLinks.items.apis.description,
      icon: Code,
      color: "accent",
      href: "https://search.aidimsum.com/docs",
      button: dict.quickLinks.items.apis.button
    }
  ];

  return (
    <div id="quick-links" className="relative min-h-screen flex flex-col justify-center mb-8 scroll-mt-20 px-4 sm:px-6 md:px-8">
      {/* 背景装饰 - 移动端优化 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 渐变背景 - 移动端调整大小 */}
        <div className="absolute top-1/4 left-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-br from-primary/8 to-accent/6 rounded-full blur-2xl sm:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 sm:w-72 md:w-96 h-48 sm:h-72 md:h-96 bg-gradient-to-br from-secondary/6 to-info/8 rounded-full blur-2xl sm:blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* 网格背景 - 移动端调整密度 */}
        <div className="absolute inset-0 opacity-3 sm:opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(var(--color-primary), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--color-primary), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '30px 30px sm:45px 45px md:60px 60px'
          }}></div>
        </div>
        
        {/* 浮动装饰元素 - 移动端调整位置和大小 */}
        <div className="absolute top-1/6 right-1/6 w-2 sm:w-3 md:w-4 h-2 sm:h-3 md:h-4 bg-primary/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/6 left-1/6 w-1.5 sm:w-2 md:w-3 h-1.5 sm:h-2 md:h-3 bg-accent/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-1 sm:w-1.5 md:w-2 h-1 sm:h-1.5 md:h-2 bg-secondary/50 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* 标题部分 - 移动端间距和字体调整 */}
      <div className="text-center mb-12 sm:mb-14 md:mb-16">
        <AnimatedText 
          text={dict.quickLinks.title}
          as="h2"
          className="text-2xl lg:text-4xl font-extrabold gradient-text-flow mb-3 sm:mb-4 tech-heading"
          delay={0.2}
        />
        <p className="text-base lg:text-lg font-bold text-base-content/80 max-w-3xl mx-auto tech-text leading-relaxed px-4">
          {dict.quickLinks.subtitle}
        </p>
      </div>
      
      {/* 链接卡片 - 移动端网格布局优化 */}
      <StaggeredList staggerDelay={0.2}>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 max-w-7xl mx-auto">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <StaggeredItem key={index} animation="fadeInScale">
                <div className="group relative h-full">
                  {/* 卡片容器 - 移动端间距调整 */}
                  <div className={`relative h-full overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-${link.color}/10 to-${link.color}/5 border border-${link.color}/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:border-${link.color}/40`}>
                    
                    {/* 悬停时的光效背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${link.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}></div>
                    
                    {/* 外发光效果 */}
                    <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br from-${link.color}/15 via-${link.color}/8 to-${link.color}/3 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 scale-110`}></div>
                    
                    <div className="relative z-10 p-6 sm:p-7 md:p-8 h-full flex flex-col">
                      {/* 图标区域 - 移动端尺寸调整 */}
                      <div className="text-center mb-4 sm:mb-5 md:mb-6">
                        <div className={`inline-flex items-center justify-center w-16 h-16 sm:w-18 sm:h-18 md:w-20 md:h-20 mx-auto mb-3 sm:mb-4 rounded-xl sm:rounded-2xl bg-gradient-to-br from-${link.color}/20 to-${link.color}/10 border border-${link.color}/30 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-${link.color}/30`}>
                          <IconComponent className={`text-2xl sm:text-2xl md:text-3xl w-8 h-8 sm:w-9 sm:h-9 md:w-10 md:h-10 text-${link.color} group-hover:animate-pulse group-hover:drop-shadow-[0_0_8px_rgba(var(--color-${link.color}),0.6)]`} />
                        </div>
                        
                        <h3 className="text-lg lg:text-xl font-bold tech-heading text-base-content transition-colors duration-300">
                          {link.title}
                        </h3>
                      </div>
                      
                      {/* 描述 - 移动端字体调整 */}
                      <div className="flex-1 mb-4 sm:mb-5 md:mb-6">
                        <p className="text-sm sm:text-base text-base-content/80 leading-relaxed tech-text text-center">
                          {link.description}
                        </p>
                      </div>
                      
                      {/* 操作按钮 - 移动端尺寸调整 */}
                      <div className="mt-auto text-center">
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn relative inline-flex items-center gap-2 px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 rounded-lg sm:rounded-xl bg-${link.color} text-white text-sm sm:text-base font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${link.color}/30 overflow-hidden`}
                        >
                          <span>{link.button}</span>
                          <ExternalLink className="w-3.5 h-3.5 sm:w-4 sm:h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          
                          {/* 按钮光效 */}
                          <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover/btn:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-1000`}></div>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </StaggeredItem>
            );
          })}
        </div>
      </StaggeredList>
    </div>
  );
} 