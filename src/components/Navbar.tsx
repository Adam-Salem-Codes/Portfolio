import { motion } from "framer-motion";
import Link from "next/link";
import React from "react";
export default function Navbar({ children, }: { children: React.ReactNode }) {
  return (
    <div className="fixed bg-transparent w-full h-[48px] flex justify-center items-center z-50">
      <div className="h-full w-fit px-6 rounded-3xl border mt-12 backdrop-blur-md flex items-center dark:text-white text-black">
        <div className="flex w-full items-center justify-center">
          <div className="flex w-full items-center">
            <nav className="flex justify-center space-x-12">{children}</nav>
          </div>
        </div>
      </div>
    </div>
  );
}
// Written by Adam Salem.