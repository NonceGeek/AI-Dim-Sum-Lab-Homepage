import { Database, ShoppingCart, Code, ExternalLink } from 'lucide-react';
import { StaggeredList, StaggeredItem } from './ScrollReveal';
import AnimatedText from './AnimatedText';

export default function QuickLinks() {
  const links = [
    {
      title: "Cantonese Data",
      description: "Access our comprehensive Cantonese corpus with advanced data processing capabilities",
      icon: Database,
      color: "primary",
      href: "https://search.aidimsum.com/library"
    },
    {
      title: "App Store",
      description: "Explore a diverse ecosystem of Cantonese applications built on our corpus",
      icon: ShoppingCart,
      color: "secondary",
      href: "https://search.aidimsum.com/appStore"
    },
    {
      title: "APIs",
      description: "Integrate Cantonese AI capabilities into your applications with our comprehensive API suite",
      icon: Code,
      color: "accent",
      href: "https://search.aidimsum.com/docs"
    }
  ];

  return (
    <div id="quick-links" className="relative min-h-screen flex flex-col justify-center mb-8 scroll-mt-20">
      {/* 背景装饰 */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* 渐变背景 */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-to-br from-primary/8 to-accent/6 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-gradient-to-br from-secondary/6 to-info/8 rounded-full blur-3xl animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* 网格背景 */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0" style={{
            backgroundImage: `
              linear-gradient(rgba(var(--color-primary), 0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(var(--color-primary), 0.1) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px'
          }}></div>
        </div>
        
        {/* 浮动装饰元素 */}
        <div className="absolute top-1/6 right-1/6 w-4 h-4 bg-primary/30 rounded-full animate-bounce"></div>
        <div className="absolute bottom-1/6 left-1/6 w-3 h-3 bg-accent/40 rounded-full animate-bounce" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-2/3 left-1/4 w-2 h-2 bg-secondary/50 rounded-full animate-bounce" style={{animationDelay: '2s'}}></div>
      </div>

      {/* 标题部分 */}
      <div className="text-center mb-16">
        <AnimatedText 
          text="Quick Access"
          as="h2"
          className="text-5xl md:text-6xl lg:text-7xl font-extrabold gradient-text-flow mb-4 tech-heading"
          delay={0.2}
        />
        <p className="text-xl text-base-content/80 max-w-3xl mx-auto tech-text leading-relaxed">
          Direct access to our core Cantonese AI resources and services
        </p>
      </div>
      
      {/* 链接卡片 */}
      <StaggeredList staggerDelay={0.2}>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto px-4">
          {links.map((link, index) => {
            const IconComponent = link.icon;
            return (
              <StaggeredItem key={index} animation="fadeInScale">
                <div className="group relative h-full">
                  {/* 卡片容器 */}
                  <div className={`relative h-full overflow-hidden rounded-2xl bg-gradient-to-br from-${link.color}/10 to-${link.color}/5 border border-${link.color}/20 shadow-xl hover:shadow-2xl transition-all duration-500 hover:scale-[1.02] group-hover:border-${link.color}/40`}>
                    
                    {/* 悬停时的光效背景 */}
                    <div className={`absolute inset-0 bg-gradient-to-r from-transparent via-${link.color}/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000`}></div>
                    
                    {/* 外发光效果 */}
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-br from-${link.color}/15 via-${link.color}/8 to-${link.color}/3 opacity-0 group-hover:opacity-100 blur-xl transition-all duration-500 -z-10 scale-110`}></div>
                    
                    <div className="relative z-10 p-8 h-full flex flex-col">
                      {/* 图标区域 */}
                      <div className="text-center mb-6">
                        <div className={`inline-flex items-center justify-center w-20 h-20 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-${link.color}/20 to-${link.color}/10 border border-${link.color}/30 group-hover:scale-110 transition-all duration-500 group-hover:shadow-lg group-hover:shadow-${link.color}/30`}>
                          <IconComponent className={`text-3xl w-10 h-10 text-${link.color} group-hover:animate-pulse group-hover:drop-shadow-[0_0_8px_rgba(var(--color-${link.color}),0.6)]`} />
                        </div>
                        
                        <h3 className="text-2xl font-bold tech-heading text-base-content  transition-colors duration-300">
                          {link.title}
                        </h3>
                      </div>
                      
                      {/* 描述 */}
                      <div className="flex-1 mb-6">
                        <p className="text-base-content/80 leading-relaxed tech-text text-center">
                          {link.description}
                        </p>
                      </div>
                      

                      
                      {/* 操作按钮 */}
                      <div className="mt-auto text-center">
                        <a 
                          href={link.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`group/btn relative inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-${link.color} text-white font-medium transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-${link.color}/30 overflow-hidden`}
                        >
                          <span>Learn More</span>
                          <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform duration-300" />
                          
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