'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

interface ScrollRevealProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fadeInUp' | 'fadeInLeft' | 'fadeInRight' | 'fadeInScale' | 'slideInUp' | 'slideInLeft' | 'slideInRight';
  delay?: number;
  duration?: number;
  threshold?: number;
  once?: boolean;
}

const animations = {
  fadeInUp: {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0 }
  },
  fadeInLeft: {
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInRight: {
    hidden: { opacity: 0, x: 30 },
    visible: { opacity: 1, x: 0 }
  },
  fadeInScale: {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1 }
  },
  slideInUp: {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 }
  },
  slideInLeft: {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0 }
  },
  slideInRight: {
    hidden: { opacity: 0, x: 50 },
    visible: { opacity: 1, x: 0 }
  }
};

export default function ScrollReveal({
  children,
  className = '',
  animation = 'fadeInUp',
  delay = 0,
  duration = 0.6,
  threshold = 0.1,
  once = true
}: ScrollRevealProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    amount: threshold,
    once,
    margin: '0px 0px -100px 0px'
  });

  return (
    <motion.div
      ref={ref}
      className={className}
      variants={animations[animation]}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94], // easeOutQuart
        type: 'spring',
        stiffness: 100,
        damping: 20
      }}
    >
      {children}
    </motion.div>
  );
}

// 便捷组件
export function FadeInUp({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInUp" {...props}>{children}</ScrollReveal>;
}

export function FadeInLeft({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInLeft" {...props}>{children}</ScrollReveal>;
}

export function FadeInRight({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInRight" {...props}>{children}</ScrollReveal>;
}

export function FadeInScale({ children, ...props }: Omit<ScrollRevealProps, 'animation'>) {
  return <ScrollReveal animation="fadeInScale" {...props}>{children}</ScrollReveal>;
}

// 列表动画组件
interface StaggeredListProps {
  children: React.ReactNode;
  className?: string;
  staggerDelay?: number;
  animation?: ScrollRevealProps['animation'];
}

export function StaggeredList({ 
  children, 
  className = '', 
  staggerDelay = 0.1
}: Omit<StaggeredListProps, 'animation'>) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: 0.1
      }
    }
  };

  return (
    <motion.div
      className={className}
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ amount: 0.1, once: true }}
    >
      {children}
    </motion.div>
  );
}

export function StaggeredItem({ children, animation = 'fadeInUp' }: { children: React.ReactNode; animation?: ScrollRevealProps['animation'] }) {
  const itemVariants = animations[animation];
  
  return (
    <motion.div variants={itemVariants}>
      {children}
    </motion.div>
  );
} 