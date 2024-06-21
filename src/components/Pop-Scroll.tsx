import { motion, useScroll } from "framer-motion";
import { cn } from "@/lib/utils";
import * as React from "react";

export default function PopScroll(
  { children, className }: { children: React.ReactNode, className?: string },
) {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      whileInView={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", bounce: 0.4, duration: 0.8 }}
      viewport={{ once: true }}
      className={cn("", className)}
    >
      {children}
    </motion.div>
  );
}
