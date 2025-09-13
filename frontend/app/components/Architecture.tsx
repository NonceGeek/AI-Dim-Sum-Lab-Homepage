import { Bot, Database, Cpu, Network, ArrowLeft } from 'lucide-react';
import { FadeInUp, StaggeredList, StaggeredItem } from './ScrollReveal';
import AnimatedText from './AnimatedText';
import { type Dictionary } from '../i18n/types';

interface ArchitectureProps {
  dict: Dictionary;
}

export default function Architecture({ dict }: ArchitectureProps) {
  const layers = [
    {
      name: dict.architecture.layers.application.name,
      subtitle: dict.architecture.layers.application.subtitle,
      items: dict.architecture.layers.application.items,
      color: "primary",
      icon: Bot,
      description: dict.architecture.layers.application.description,
      level: "L4"
    },
    {
      name: dict.architecture.layers.api.name,
      subtitle: dict.architecture.layers.api.subtitle,
      items: dict.architecture.layers.api.items,
      color: "secondary",
      icon: Network,
      description: dict.architecture.layers.api.description,
      level: "L3"
    },
    {
      name: dict.architecture.layers.core.name,
      subtitle: dict.architecture.layers.core.subtitle,
      items: dict.architecture.layers.core.items,
      color: "accent",
      icon: Cpu,
      description: dict.architecture.layers.core.description,
      level: "L2"
    },
    {
      name: dict.architecture.layers.data.name,
      subtitle: dict.architecture.layers.data.subtitle,
      items: dict.architecture.layers.data.items,
      color: "info",
      icon: Database,
      description: dict.architecture.layers.data.description,
      level: "L1"
    }
  ];

  // 颜色类名映射函数
  const getColorClasses = (color: string) => {
    const colorMap = {
      primary: {
        text: 'text-primary',
        textMuted: 'text-primary/80',
        bg: 'bg-primary',
        bgLight: 'bg-primary/5',
        bgMedium: 'bg-primary/10',
        border: 'border-primary',
        shadow: 'shadow-primary'
      },
      secondary: {
        text: 'text-secondary',
        textMuted: 'text-secondary/80',
        bg: 'bg-secondary',
        bgLight: 'bg-secondary/5',
        bgMedium: 'bg-secondary/10',
        border: 'border-secondary',
        shadow: 'shadow-secondary'
      },
      accent: {
        text: 'text-accent',
        textMuted: 'text-accent/80',
        bg: 'bg-accent',
        bgLight: 'bg-accent/5',
        bgMedium: 'bg-accent/10',
        border: 'border-accent',
        shadow: 'shadow-accent'
      },
      info: {
        text: 'text-info',
        textMuted: 'text-info/80',
        bg: 'bg-info',
        bgLight: 'bg-info/5',
        bgMedium: 'bg-info/10',
        border: 'border-info',
        shadow: 'shadow-info'
      }
    };
    return colorMap[color as keyof typeof colorMap] || colorMap.primary;
  };

  return (
    <div id="architecture" className="relative mb-8 scroll-mt-20 min-h-screen flex flex-col justify-center px-4 sm:px-6 md:px-8">
      {/* 背景装饰 - 移动端优化 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 几何装饰背景 - 移动端减少数量 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 left-1/6 w-16 sm:w-24 md:w-32 h-16 sm:h-24 md:h-32 border border-primary/10 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-12 sm:w-20 md:w-24 h-12 sm:h-20 md:h-24 border border-secondary/10 -rotate-45 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-10 sm:w-16 md:w-20 h-10 sm:h-16 md:h-20 border border-accent/10 rotate-12 animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/3 right-1/6 w-14 sm:w-20 md:w-28 h-14 sm:h-20 md:h-28 border border-info/10 -rotate-30 animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}></div>
        </div>
        
        {/* 点阵背景 - 移动端调整密度 */}
        <div className="absolute inset-0 opacity-5 sm:opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--color-primary), 0.3) 1px, transparent 0)`,
            backgroundSize: '20px 20px sm:30px 30px md:40px 40px'
          }}></div>
        </div>
        
        {/* 渐变光带 - 移动端调整位置 */}
        <div className="absolute top-1/4 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-0.5 sm:h-1 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <FadeInUp>
        <div className="text-center mb-8 sm:mb-10 md:mb-12">
          <AnimatedText 
            text={dict.architecture.title}
            as="h2"
            className="text-2xl lg:text-4xl font-extrabold gradient-text-flow mb-3 sm:mb-4 tech-heading"
            delay={0.2}
          />
          <p className="text-base lg:text-lg font-bold text-base-content/80 max-w-3xl mx-auto tech-text leading-relaxed px-4">
            {dict.architecture.subtitle}
          </p>
        </div>
      </FadeInUp>
      
      {/* 架构图 - 移动端优化布局 */}
      <div className="relative max-w-[100rem] flex justify-center">
        {/* 层级容器 */}
        <StaggeredList staggerDelay={0.2} className="w-full">
          <div className="space-y-4 sm:space-y-6 relative z-10 w-full">
            {/* 连接线 - 移动端隐藏或简化 */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary via-accent to-info opacity-30 -translate-x-1/2 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
            
            {layers.map((layer, index) => {
              const IconComponent = layer.icon;
              const colorClasses = getColorClasses(layer.color);
              return (
                <StaggeredItem key={index} animation="fadeInScale">
                  <div className="group relative">
                    {/* 层级卡片 - 移动端间距调整 */}
                    <div className={`relative overflow-hidden rounded-xl sm:rounded-2xl bg-gradient-to-br from-base-100 to-base-200 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${colorClasses.border}/30`}>
                      
                      {/* 悬停时的光效背景 - 闪烁效果 */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses.bgLight} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}></div>
                      
                      {/* 悬停时的闪烁光效 */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses.bgMedium} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                      
                      {/* 外发光效果 */}
                      <div className={`absolute inset-0 rounded-xl sm:rounded-2xl bg-gradient-to-br ${colorClasses.bgMedium} ${colorClasses.bgLight} ${colorClasses.bg} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10 scale-110`}></div>
                      
                      <div className="relative z-10 p-4 sm:p-5 md:p-6">
                        {/* 层级头部 - 移动端布局调整 */}
                        <div className="flex items-center gap-3 sm:gap-4 mb-3 sm:mb-4">
                          <div className={`flex-shrink-0 p-2 sm:p-3 rounded-lg sm:rounded-xl bg-gradient-to-br ${colorClasses.bgMedium} ${colorClasses.bgLight} border ${colorClasses.border} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg ${colorClasses.shadow}`}>
                            <IconComponent className={`text-lg sm:text-xl w-5 h-5 sm:w-6 sm:h-6 ${colorClasses.text} group-hover:animate-bounce group-hover:drop-shadow-lg`} />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center gap-2 sm:gap-3 mb-1">
                              <h3 className="text-lg sm:text-xl font-bold tech-heading text-base-content group-hover:text-base-content/80 transition-colors duration-300 truncate">
                                {layer.name}
                              </h3>
                              <div className={`badge badge-${layer.color} badge-xs sm:badge-sm font-bold flex-shrink-0`}>
                                {layer.level}
                              </div>
                            </div>
                            <p className={`text-xs sm:text-sm font-medium ${colorClasses.textMuted} truncate`}>{layer.subtitle}</p>
                          </div>
                        </div>
                        
                        {/* 层级组件 - 移动端网格布局 */}
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:flex lg:flex-wrap gap-2 sm:gap-3">
                          {layer.items.map((item: string, itemIndex: number) => {
                            // 根据颜色设置对应的背景和边框类名
                            const getItemClasses = (color: string) => {
                              const itemColorMap = {
                                primary: {
                                  bg: 'bg-gradient-to-br from-primary/10 to-primary/5',
                                  border: 'border-primary/20',
                                  hoverBorder: 'hover:border-primary/40',
                                  shadow: 'hover:shadow-primary/20'
                                },
                                secondary: {
                                  bg: 'bg-gradient-to-br from-secondary/10 to-secondary/5',
                                  border: 'border-secondary/20',
                                  hoverBorder: 'hover:border-secondary/40',
                                  shadow: 'hover:shadow-secondary/20'
                                },
                                accent: {
                                  bg: 'bg-gradient-to-br from-accent/10 to-accent/5',
                                  border: 'border-accent/20',
                                  hoverBorder: 'hover:border-accent/40',
                                  shadow: 'hover:shadow-accent/20'
                                },
                                info: {
                                  bg: 'bg-gradient-to-br from-info/10 to-info/5',
                                  border: 'border-info/20',
                                  hoverBorder: 'hover:border-info/40',
                                  shadow: 'hover:shadow-info/20'
                                }
                              };
                              return itemColorMap[color as keyof typeof itemColorMap] || itemColorMap.primary;
                            };
                            
                            const itemClasses = getItemClasses(layer.color);
                            
                            return (
                              <div 
                                key={itemIndex} 
                                className={`group/item relative p-2 sm:p-3 rounded-lg ${itemClasses.bg} ${itemClasses.border} ${itemClasses.hoverBorder} transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${itemClasses.shadow} lg:flex-1 min-w-0 z-10`}
                              >
                              <div className={`text-xs sm:text-sm font-medium ${colorClasses.text} group-hover/item:drop-shadow-md transition-all duration-300 truncate`}>
                                {item}
                              </div>
                              
                              {/* 悬停时的装饰点 */}
                              <div className={`absolute top-1 sm:top-2 right-1 sm:right-2 w-1 sm:w-1.5 h-1 sm:h-1.5 ${colorClasses.bg} rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300 z-20 shadow-sm`}></div>
                              
                              {/* 悬停时的装饰线条 */}
                              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorClasses.bg} ${colorClasses.bgLight} rounded-full w-0 group-hover/item:w-full transition-all duration-500 z-10 opacity-50`}></div>
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    </div>
                    
                    {/* 连接箭头 (除了最后一个) - 移动端调整 */}
                    {index < layers.length - 1 && (
                      <div className="flex justify-center mt-3 sm:mt-4">
                        <div className="relative">
                          <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-base-100 to-base-200 rounded-full flex items-center justify-center border-2 ${colorClasses.border}/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <ArrowLeft className={`${colorClasses.text} text-sm sm:text-lg w-4 h-4 sm:w-5 sm:h-5 rotate-90 group-hover:animate-pulse`} />
                          </div>
                          
                          {/* 箭头光晕 */}
                          <div className={`absolute inset-0 w-8 h-8 sm:w-10 sm:h-10 ${colorClasses.bgMedium} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
                        </div>
                      </div>
                    )}
                  </div>
                </StaggeredItem>
              );
            })}
          </div>
        </StaggeredList>
      </div>
    </div>
  );
} 