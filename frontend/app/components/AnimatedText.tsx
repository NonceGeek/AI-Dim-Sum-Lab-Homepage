"use client"
import { motion } from 'framer-motion';
import { ReactNode } from 'react';

interface AnimatedTextProps {
  text: string;
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p' | 'span' | 'div';
  className?: string;
  delay?: number;
  staggerDelay?: number;
  duration?: number;
  children?: ReactNode;
}

export default function AnimatedText({ 
  text, 
  as: Component = 'h2', 
  className = "", 
  delay = 0.3,
  staggerDelay = 0.1,
  duration = 0.6,
  children
}: AnimatedTextProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: staggerDelay,
        delayChildren: delay
      }
    }
  };

  const letterVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.8
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        duration,
        ease: "easeOut" as const
      }
    }
  };

  const renderMotionComponent = () => {
    const commonProps = {
      className,
      variants: containerVariants,
      initial: "hidden" as const,
      whileInView: "visible" as const,
      viewport: { once: true }
    };

    const content = (
      <>
        {text.split('').map((letter, index) => (
          <motion.span
            key={index}
            variants={letterVariants}
            className="inline-block"
          >
            {letter === ' ' ? '\u00A0' : letter}
          </motion.span>
        ))}
        {children}
      </>
    );

    switch (Component) {
      case 'h1':
        return <motion.h1 {...commonProps}>{content}</motion.h1>;
      case 'h2':
        return <motion.h2 {...commonProps}>{content}</motion.h2>;
      case 'h3':
        return <motion.h3 {...commonProps}>{content}</motion.h3>;
      case 'h4':
        return <motion.h4 {...commonProps}>{content}</motion.h4>;
      case 'h5':
        return <motion.h5 {...commonProps}>{content}</motion.h5>;
      case 'h6':
        return <motion.h6 {...commonProps}>{content}</motion.h6>;
      case 'p':
        return <motion.p {...commonProps}>{content}</motion.p>;
      case 'span':
        return <motion.span {...commonProps}>{content}</motion.span>;
      case 'div':
        return <motion.div {...commonProps}>{content}</motion.div>;
      default:
        return <motion.h2 {...commonProps}>{content}</motion.h2>;
    }
  };

  return renderMotionComponent();
} 