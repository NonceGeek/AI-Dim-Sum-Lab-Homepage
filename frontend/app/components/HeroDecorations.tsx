'use client';

import { motion } from 'framer-motion';

// 浮动粒子组件
const FloatingParticle = ({ delay = 0, duration = 3, x = 0, y = 0 }) => (
  <motion.div
    className="absolute w-2 h-2 bg-primary/30 rounded-full"
    animate={{
      x: [x, x + 20, x],
      y: [y, y - 30, y],
      opacity: [0.3, 0.8, 0.3],
    }}
    transition={{
      duration,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// 几何图形组件
const GeometricShape = ({ shape = "triangle", delay = 0, size = 20 }) => {
  const shapes: Record<string, React.ReactElement> = {
    triangle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 20H2L12 2Z" fill="currentColor" />
      </svg>
    ),
    hexagon: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 8.5V15.5L12 22L2 15.5V8.5L12 2Z" fill="currentColor" />
      </svg>
    ),
    circle: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="10" fill="currentColor" />
      </svg>
    ),
    square: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <rect x="2" y="2" width="20" height="20" fill="currentColor" />
      </svg>
    ),
    diamond: (
      <svg width={size} height={size} viewBox="0 0 24 24" fill="none">
        <path d="M12 2L22 12L12 22L2 12L12 2Z" fill="currentColor" />
      </svg>
    )
  };

  return (
    <motion.div
      className="absolute text-secondary/40"
      animate={{
        rotate: [0, 360],
        scale: [1, 1.2, 1],
        opacity: [0.4, 0.8, 0.4],
      }}
      transition={{
        duration: 4,
        delay,
        repeat: Infinity,
        ease: "linear"
      }}
    >
      {shapes[shape]}
    </motion.div>
  );
};

// 连接线组件
const ConnectionLine = ({ delay = 0 }) => (
  <motion.div
    className="absolute w-16 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent"
    animate={{
      scaleX: [0, 1, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 2,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

// 数据流组件
const DataStream = ({ delay = 0 }) => (
  <motion.div
    className="absolute flex space-x-1"
    animate={{
      x: [0, 20, 0],
      opacity: [0, 1, 0],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  >
    {[...Array(3)].map((_, i) => (
      <motion.div
        key={i}
        className="w-1 h-1 bg-accent/60 rounded-full"
        animate={{
          scale: [0, 1, 0],
        }}
        transition={{
          duration: 0.8,
          delay: delay + i * 0.2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
    ))}
  </motion.div>
);

// 3D 卡片组件
const FloatingCard = ({ delay = 0, title = "AI", subtitle = "Tech" }) => (
  <motion.div
    className="absolute bg-base-200/20 backdrop-blur-sm border border-primary/20 rounded-lg p-3 shadow-lg"
    animate={{
      y: [0, -10, 0],
      rotateY: [0, 5, 0],
      rotateX: [0, 2, 0],
    }}
    transition={{
      duration: 3,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
    style={{ transformStyle: "preserve-3d" }}
  >
    <div className="text-xs font-mono text-primary/80">{title}</div>
    <div className="text-xs text-secondary/60">{subtitle}</div>
  </motion.div>
);

// 脉冲点组件
const PulseDot = ({ delay = 0, size = 4 }) => (
  <motion.div
    className="absolute bg-accent/50 rounded-full"
    style={{ width: size, height: size }}
    animate={{
      scale: [0, 1.5, 0],
      opacity: [0, 0.8, 0],
    }}
    transition={{
      duration: 1.5,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

export default function HeroDecorations() {
  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {/* 右侧装饰区域 - 进一步往中间靠拢 */}
      <div className="absolute right-0 top-0 w-2/3 h-full">
        
        {/* 浮动粒子 - 增加数量 */}
        <FloatingParticle delay={0} x={20} y={100} />
        <FloatingParticle delay={0.3} x={40} y={150} />
        <FloatingParticle delay={0.6} x={60} y={80} />
        <FloatingParticle delay={0.9} x={30} y={200} />
        <FloatingParticle delay={1.2} x={50} y={120} />
        <FloatingParticle delay={1.5} x={70} y={180} />
        <FloatingParticle delay={1.8} x={25} y={90} />
        <FloatingParticle delay={2.1} x={45} y={160} />
        <FloatingParticle delay={2.4} x={65} y={110} />
        <FloatingParticle delay={2.7} x={35} y={140} />
        
        {/* 几何图形 - 增加更多形状 */}
        <div className="absolute top-16 right-1/3">
          <GeometricShape shape="triangle" delay={0} size={16} />
        </div>
        <div className="absolute top-32 right-1/5">
          <GeometricShape shape="hexagon" delay={0.5} size={20} />
        </div>
        <div className="absolute top-48 right-1/4">
          <GeometricShape shape="circle" delay={1} size={12} />
        </div>
        <div className="absolute top-64 right-1/6">
          <GeometricShape shape="square" delay={1.5} size={14} />
        </div>
        <div className="absolute top-80 right-1/3">
          <GeometricShape shape="diamond" delay={2} size={18} />
        </div>
        <div className="absolute top-96 right-1/5">
          <GeometricShape shape="triangle" delay={2.5} size={15} />
        </div>
        <div className="absolute top-1/3 right-1/6">
          <GeometricShape shape="hexagon" delay={0.8} size={22} />
        </div>
        <div className="absolute top-2/3 right-1/4">
          <GeometricShape shape="circle" delay={1.3} size={16} />
        </div>
        
        {/* 连接线 - 增加更多连接 */}
        <div className="absolute top-24 right-1/4">
          <ConnectionLine delay={0.3} />
        </div>
        <div className="absolute top-40 right-1/6">
          <ConnectionLine delay={0.8} />
        </div>
        <div className="absolute top-56 right-1/3">
          <ConnectionLine delay={1.3} />
        </div>
        <div className="absolute top-72 right-1/5">
          <ConnectionLine delay={1.8} />
        </div>
        <div className="absolute top-88 right-1/4">
          <ConnectionLine delay={2.3} />
        </div>
        
        {/* 数据流 - 增加更多数据流 */}
        <div className="absolute top-72 right-1/4">
          <DataStream delay={0.2} />
        </div>
        <div className="absolute top-88 right-1/6">
          <DataStream delay={0.7} />
        </div>
        <div className="absolute top-1/4 right-1/5">
          <DataStream delay={1.2} />
        </div>
        <div className="absolute top-3/4 right-1/6">
          <DataStream delay={1.7} />
        </div>
        <div className="absolute top-1/2 right-1/4">
          <DataStream delay={2.2} />
        </div>
        
        {/* 3D 浮动卡片 - 减少数量，保持随机散开 */}
        <div className="absolute top-1/4 right-1/3">
          <FloatingCard delay={0} title="ML" subtitle="Model" />
        </div>
        <div className="absolute top-1/3 right-2/5">
          <FloatingCard delay={0.8} title="NLP" subtitle="Language" />
        </div>
        <div className="absolute top-2/5 right-1/4">
          <FloatingCard delay={1.6} title="AI" subtitle="Research" />
        </div>
        <div className="absolute top-3/5 right-1/3">
          <FloatingCard delay={2.4} title="DL" subtitle="Neural" />
        </div>
        <div className="absolute top-2/3 right-2/5">
          <FloatingCard delay={0.4} title="LLM" subtitle="Large" />
        </div>
        
        {/* 脉冲圆圈 - 增加更多圆圈 */}
        <motion.div
          className="absolute top-1/4 right-1/6 w-32 h-32 border border-primary/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/5 w-24 h-24 border border-secondary/20 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.05, 0.2],
          }}
          transition={{
            duration: 2.5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div
          className="absolute top-3/4 right-1/6 w-28 h-28 border border-accent/20 rounded-full"
          animate={{
            scale: [1, 1.15, 1],
            opacity: [0.25, 0.08, 0.25],
          }}
          transition={{
            duration: 1.8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* 旋转光环 - 增加更多光环 */}
        <motion.div
          className="absolute bottom-1/3 right-1/6 w-24 h-24 border-2 border-secondary/30 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 right-1/5 w-20 h-20 border-2 border-primary/30 rounded-full"
          animate={{
            rotate: -360,
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-1/4 right-1/5 w-16 h-16 border-2 border-accent/30 rounded-full"
          animate={{
            rotate: 360,
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        
        {/* 脉冲点 - 新增元素 */}
        <div className="absolute top-20 right-1/4">
          <PulseDot delay={0} size={6} />
        </div>
        <div className="absolute top-40 right-1/6">
          <PulseDot delay={0.5} size={4} />
        </div>
        <div className="absolute top-60 right-1/5">
          <PulseDot delay={1} size={5} />
        </div>
        <div className="absolute top-80 right-1/4">
          <PulseDot delay={1.5} size={3} />
        </div>
        <div className="absolute top-1/3 right-1/6">
          <PulseDot delay={2} size={7} />
        </div>
        <div className="absolute top-2/3 right-1/5">
          <PulseDot delay={2.5} size={4} />
        </div>
        <div className="absolute top-3/4 right-1/4">
          <PulseDot delay={0.3} size={5} />
        </div>
        <div className="absolute top-1/4 right-1/5">
          <PulseDot delay={0.8} size={6} />
        </div>
      </div>
    </div>
  );
} 