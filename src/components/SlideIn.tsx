import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

/**
 * Renders a text with a slide-in animation effect.
 *
 * @param {string} className - Optional additional class for styling.
 * @param {string} text - The text to be displayed.
 * @param {number} duration - Duration of the slide-in animation.
 * @return {JSX.Element} The text element with slide-in animation effect.
 * @example <SlideIn text="Hello, World!" className="text-blue-500" duration={0.5} />
 */

export default function SlideIn({
  className,
  children,
  duration,
  direction = "left",
  offset = 50,
}: {
  className?: string;
  children: React.ReactNode;
  duration?: number;
  direction?: string | "left" | "right" | "top" | "bottom";
  offset?: number;
}) {
  return (
    <div className="flex">
      <motion.h1
        className={cn("", className)}
        initial={{
          x:
            direction === "left" ? -offset : direction === "right" ? offset : 0,
          y:
            direction === "top" ? -offset : direction === "bottom" ? offset : 0,
          opacity: 0,
        }}
        animate={{ x: 0, y: 0, opacity: 1 }}
        transition={{ duration: duration ?? 0.2 }}
      >
        {children}
      </motion.h1>
    </div>
  );
}
