import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import HeroDecorations from './HeroDecorations';

export default function Hero() {
  return (
    <div id="hero" className="hero min-h-[90vh] rounded-lg mb-8 scroll-mt-20 relative overflow-hidden">
      {/* 主要内容容器 - 使用客户端组件处理动画 */}
      <HeroContent />

      {/* 装饰性动画元素 */}
      <HeroDecorations />

      {/* 滚动指示器 */}
      <ScrollIndicator />
    </div>
  );
} 