import { Bot, Database, Cpu, Network, ArrowRight } from 'lucide-react';
import { FadeInUp, StaggeredList, StaggeredItem } from './ScrollReveal';
import AnimatedText from './AnimatedText';

export default function Architecture() {
  const layers = [
    {
      name: "Application Layer",
      subtitle: "User-Facing Solutions",
      items: ["Cantonese AI Agents", "Cantonese Apps", "Cantonese Tools"],
      color: "primary",
      icon: Bot,
      description: "End-user applications and intelligent agents",
      level: "L4"
    },
    {
      name: "API Gateway",
      subtitle: "Integration Interfaces",
      items: ["REST APIs", "GraphQL APIs", "WebSocket APIs"],
      color: "secondary",
      icon: Network,
      description: "Standardized interfaces for developers",
      level: "L3"
    },
    {
      name: "Core Services",
      subtitle: "AI Infrastructure",
      items: ["AI Search Engines", "AI SaaS Framework", "App Extension", "LLMs"],
      color: "accent",
      icon: Cpu,
      description: "Core AI and service infrastructure",
      level: "L2"
    },
    {
      name: "Data Foundation",
      subtitle: "Knowledge Base",
      items: ["Multimodal Data Repository", "Hybrid Annotation System"],
      color: "info",
      icon: Database,
      description: "Data foundation and annotation infrastructure",
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
    <div id="architecture" className="relative mb-8 scroll-mt-20 min-h-screen flex flex-col justify-center">
      {/* 背景装饰 - 与Features不同的效果 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 几何装饰背景 */}
        <div className="absolute top-0 left-0 w-full h-full">
          <div className="absolute top-1/6 left-1/6 w-32 h-32 border border-primary/10 rotate-45 animate-spin" style={{animationDuration: '20s'}}></div>
          <div className="absolute top-1/3 right-1/4 w-24 h-24 border border-secondary/10 -rotate-45 animate-spin" style={{animationDuration: '25s', animationDirection: 'reverse'}}></div>
          <div className="absolute bottom-1/4 left-1/3 w-20 h-20 border border-accent/10 rotate-12 animate-spin" style={{animationDuration: '30s'}}></div>
          <div className="absolute bottom-1/3 right-1/6 w-28 h-28 border border-info/10 -rotate-30 animate-spin" style={{animationDuration: '22s', animationDirection: 'reverse'}}></div>
        </div>
        
        {/* 点阵背景 */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 1px 1px, rgba(var(--color-primary), 0.3) 1px, transparent 0)`,
            backgroundSize: '40px 40px'
          }}></div>
        </div>
        
        {/* 渐变光带 */}
        <div className="absolute top-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/20 to-transparent animate-pulse"></div>
        <div className="absolute bottom-1/4 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent/15 to-transparent animate-pulse" style={{animationDelay: '1s'}}></div>
      </div>

      <FadeInUp>
        <div className="text-center mb-12">
          <AnimatedText 
            text="System Architecture"
            as="h2"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text-flow mb-4 tech-heading"
            delay={0.2}
          />
          <p className="text-xl text-base-content/80 max-w-3xl mx-auto tech-text leading-relaxed">
            A comprehensive four-layer architecture designed for scalable Cantonese AI development
          </p>
        </div>
      </FadeInUp>
      
      {/* 架构图 - 列布局 */}
      <div className="relative max-w-[100rem] flex justify-center px-4">
        {/* 层级容器 */}
        <StaggeredList staggerDelay={0.2} className="w-full">
          <div className="space-y-6 relative z-10 w-full">
            {/* 连接线 - 跟随动画 */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary via-accent to-info opacity-30 -translate-x-1/2 z-0">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/20 to-transparent animate-pulse"></div>
            </div>
            
            {layers.map((layer, index) => {
              const IconComponent = layer.icon;
              const colorClasses = getColorClasses(layer.color);
              return (
                <StaggeredItem key={index} animation="fadeInScale">
                  <div className="group relative">
                    {/* 层级卡片 */}
                    <div className={`relative overflow-hidden rounded-2xl bg-gradient-to-br from-base-100 to-base-200 border border-base-300 shadow-lg hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] ${colorClasses.border}/30`}>
                      
                      {/* 悬停时的光效背景 - 闪烁效果 */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses.bgLight} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}></div>
                      
                      {/* 悬停时的闪烁光效 */}
                      <div className={`absolute inset-0 bg-gradient-to-r from-transparent ${colorClasses.bgMedium} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 animate-pulse`}></div>
                      
                      {/* 外发光效果 */}
                      <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${colorClasses.bgMedium} ${colorClasses.bgLight} ${colorClasses.bg} opacity-0 group-hover:opacity-30 blur-xl transition-all duration-500 -z-10 scale-110`}></div>
                      
                      <div className="relative z-10 p-6">
                        {/* 层级头部 */}
                        <div className="flex items-center gap-4 mb-4">
                          <div className={`flex-shrink-0 p-3 rounded-xl bg-gradient-to-br ${colorClasses.bgMedium} ${colorClasses.bgLight} border ${colorClasses.border} group-hover:scale-110 group-hover:rotate-12 transition-all duration-500 group-hover:shadow-lg ${colorClasses.shadow}`}>
                            <IconComponent className={`text-xl w-6 h-6 ${colorClasses.text} group-hover:animate-bounce group-hover:drop-shadow-lg`} />
                          </div>
                          <div className="flex-1">
                            <div className="flex items-center gap-3 mb-1">
                              <h3 className="text-xl font-bold tech-heading text-base-content group-hover:text-base-content/80 transition-colors duration-300">
                                {layer.name}
                              </h3>
                              <div className={`badge badge-${layer.color} badge-sm font-bold`}>
                                {layer.level}
                              </div>
                            </div>
                            <p className={`text-sm font-medium ${colorClasses.textMuted}`}>{layer.subtitle}</p>
                          </div>
                        </div>
                        
                        {/* 层级组件 - 占满宽度 */}
                        <div className="flex flex-wrap gap-3">
                          {layer.items.map((item, itemIndex) => {
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
                                className={`group/item relative p-3 rounded-lg ${itemClasses.bg} ${itemClasses.border} ${itemClasses.hoverBorder} transition-all duration-300 hover:scale-[1.02] hover:shadow-md ${itemClasses.shadow} flex-1 min-w-0 z-10`}
                              >
                              <div className={`text-sm font-medium ${colorClasses.text} group-hover/item:drop-shadow-md transition-all duration-300 truncate`}>
                                {item}
                              </div>
                              
                              {/* 悬停时的装饰点 */}
                              <div className={`absolute top-2 right-2 w-1.5 h-1.5 ${colorClasses.bg} rounded-full opacity-0 group-hover/item:opacity-100 group-hover/item:scale-150 transition-all duration-300 z-20 shadow-sm`}></div>
                              
                              {/* 悬停时的装饰线条 */}
                              <div className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r ${colorClasses.bg} ${colorClasses.bgLight} rounded-full w-0 group-hover/item:w-full transition-all duration-500 z-10 opacity-50`}></div>
                            </div>
                          );
                        })}
                        </div>
                      </div>
                    </div>
                    
                    {/* 连接箭头 (除了最后一个) */}
                    {index < layers.length - 1 && (
                      <div className="flex justify-center mt-4">
                        <div className="relative">
                          <div className={`w-10 h-10 bg-gradient-to-br from-base-100 to-base-200 rounded-full flex items-center justify-center border-2 ${colorClasses.border}/20 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                            <ArrowRight className={`${colorClasses.text} text-lg w-5 h-5 rotate-90 group-hover:animate-pulse`} />
                          </div>
                          
                          {/* 箭头光晕 */}
                          <div className={`absolute inset-0 w-10 h-10 ${colorClasses.bgMedium} rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
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