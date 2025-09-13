import HeroContent from './HeroContent';
import ScrollIndicator from './ScrollIndicator';
import HeroDecorations from './HeroDecorations';
import { type Dictionary } from '../i18n/types';

interface HeroProps {
  dict: Dictionary;
}

export default function Hero({ dict }: HeroProps) {
  return (
    <div id="hero" className="hero min-h-[90vh] rounded-lg mb-8 scroll-mt-5 relative overflow-hidden">
      {/* 主要内容容器 - 使用客户端组件处理动画 */}
      <HeroContent dict={dict} />

      {/* 装饰性动画元素 */}
      <HeroDecorations />

      {/* 滚动指示器 */}
      <ScrollIndicator dict={dict} />
    </div>
  );
} 