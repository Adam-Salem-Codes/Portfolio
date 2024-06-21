"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export default function FadeIn({
  children,
  className,
  duration,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
}) {
  return <motion.div className={cn("", className)} initial={{filter: "blur(5px)", opacity: 0}} animate={{filter: "blur(0px)", opacity: 1}} transition={{duration: duration ?? 0.5}}>{children}</motion.div>;
}
