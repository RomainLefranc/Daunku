"use client";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect, useRef, PropsWithChildren } from "react";

type FadeInProps = {
  delay: number;
  direction: "right" | "left" | "up" | "down";
  className?: string;
};

const FadeIn = ({ children, delay, direction, className }: PropsWithChildren<FadeInProps>) => {
  const ref = useRef(null);

  const isInView = useInView(ref, { once: true });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start("visible");
    }
  }, [isInView, controls]);

  return (
    <motion.div
      className={className}
      ref={ref}
      variants={{
        hidden: {
          opacity: 0,
          x: direction === "right" ? -100 : direction === "left" ? 100 : 0,
          y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
        },
        visible: {
          opacity: 1,
          x: 0,
          y: 0,
        },
      }}
      initial="hidden"
      animate={controls}
      transition={{
        duration: 1.25,
        type: "tween",
        delay,
        ease: [0.25, 0.25, 0.25, 0.75],
      }}>
      {children}
    </motion.div>
  );
};

export default FadeIn;
