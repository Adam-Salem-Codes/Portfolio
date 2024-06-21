"use client";
import Image from "next/image";
import FadeIn from "@/components/FadeIn";
import { motion } from "framer-motion";
import SlideIn from "@/components/SlideIn";
import Link from "next/link";
import AppleButton from "@/components/Apple-Button";
import PopScroll from "@/components/Pop-Scroll";
import { cn } from "@/lib/utils";
import IconCloud from "@/components/magicui/icon-cloud";
import { AnimatedBeam } from "@/components/magicui/animated-beam";
import React, { forwardRef, useRef } from "react";
const slugs = [
  "typescript",
  "javascript",
  "java",
  "markdown",
  "cplusplus",
  "gnu",
  "python",
  "nodemon",
  "reactdotjs",
  "createreactapp",
  "archlinux",
  "unrealengine",
  "codeium",
  "unity",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "raylib",
  "nextdotjs",
  "vercel",
  "shadcnui",
  "tailwindcss",
  "git",
  "github",
  "visualstudiocode",
  "arduino",
];
const Circle = forwardRef<
  HTMLDivElement,
  { className?: string; children?: React.ReactNode }
>(({ className, children }, ref) => {
  return (
    <div
      ref={ref}
      className={cn(
        "z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 border-border bg-white p-3 shadow-[0_0_20px_-12px_rgba(0,0,0,0.8)]",
        className
      )}
    >
      {children}
    </div>
  );
});
Circle.displayName = "Circle";
export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const div1Ref = useRef<HTMLDivElement>(null);
  const div2Ref = useRef<HTMLDivElement>(null);
  const div3Ref = useRef<HTMLDivElement>(null);
  const div4Ref = useRef<HTMLDivElement>(null);
  const div5Ref = useRef<HTMLDivElement>(null);
  const div6Ref = useRef<HTMLDivElement>(null);
  const div7Ref = useRef<HTMLDivElement>(null);
  return (
    <div className="h-fit w-full py-12">
      <div className="h-[100vh] w-full flex justify-center items-center flex-col">
        <FadeIn className="flex-col flex items-center">
          <h1 className="text-8xl max-sm:text-3xl max-md:text-6xl max-lg:text-7xl">
            <i className="font-bold	">Hi</i>, I&apos;m{" "}
            <i className="font-semibold text-blue-500">Adam Salem</i>{" "}
            <span className="animate-wave inline-block">👋</span>
          </h1>
          <AppleButton text="Skills" className="" href="#work"></AppleButton>
        </FadeIn>
      </div>
      <hr />
      <div className="min-h-screen w-full">
        <PopScroll className="h-full">
          <div
            className="min-h-screen flex justify-center items-center"
            id="work"
          >
            <motion.div className="w-[55%] h-full flex-col flex items-center">
              <p className="text-center indent-4 w-[65%] text-2xl ">
                <span className="text-5xl">Over the years </span>
                {` I have mastered many different programming languages and tools.
                I am always looking for new challenges and opportunities to learn. The globe next to this
                shows only some of the programming languages and tools I have mastered using.`}
              </p>
              <AppleButton text="Web Development" href="#webdev" />
            </motion.div>
            <motion.div
              viewport={{ once: true }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="h-full flex justify-center items-center"
            >
              <IconCloud iconSlugs={slugs} />
            </motion.div>
          </div>
          <hr />
        </PopScroll>
        <div
          className="min-h-screen flex items-center justify-center flex-col"
          id="webdev"
        >
          <h1 className="text-5xl font-bold pb-12">Web Development</h1>
          <p className="pb-12 text-2xl w-[50%] -indent-4">These are the tools I use for frontend web development. I primary work on frontend websites with Next.js and TailwindCSS.</p>
          <div
            className="relative flex h-full w-full max-w-[32rem] group items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
            ref={containerRef}
          >
            <div className="flex h-full w-full flex-row items-stretch justify-between gap-10">
              <div className="flex flex-col justify-center gap-2">
                <Circle ref={div1Ref} className="">
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Next.js</title>
                    <path d="M18.665 21.978C16.758 23.255 14.465 24 12 24 5.377 24 0 18.623 0 12S5.377 0 12 0s12 5.377 12 12c0 3.583-1.574 6.801-4.067 9.001L9.219 7.2H7.2v9.596h1.615V9.251l9.85 12.727Zm-3.332-8.533 1.6 2.061V7.2h-1.6v6.245Z" />
                  </svg>
                </Circle>
                <Circle
                  ref={div2Ref}
                  className="fill-blue-500 grayscale group-hover:grayscale-0 duration-500"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Tailwind CSS</title>
                    <path d="M12.001,4.8c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 C13.666,10.618,15.027,12,18.001,12c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C16.337,6.182,14.976,4.8,12.001,4.8z M6.001,12c-3.2,0-5.2,1.6-6,4.8c1.2-1.6,2.6-2.2,4.2-1.8c0.913,0.228,1.565,0.89,2.288,1.624 c1.177,1.194,2.538,2.576,5.512,2.576c3.2,0,5.2-1.6,6-4.8c-1.2,1.6-2.6,2.2-4.2,1.8c-0.913-0.228-1.565-0.89-2.288-1.624 C10.337,13.382,8.976,12,6.001,12z" />
                  </svg>
                </Circle>
                <Circle
                  ref={div3Ref}
                  className="fill-blue-500 grayscale group-hover:grayscale-0 duration-500"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Visual Studio Code</title>
                    <path d="M23.15 2.587L18.21.21a1.494 1.494 0 0 0-1.705.29l-9.46 8.63-4.12-3.128a.999.999 0 0 0-1.276.057L.327 7.261A1 1 0 0 0 .326 8.74L3.899 12 .326 15.26a1 1 0 0 0 .001 1.479L1.65 17.94a.999.999 0 0 0 1.276.057l4.12-3.128 9.46 8.63a1.492 1.492 0 0 0 1.704.29l4.942-2.377A1.5 1.5 0 0 0 24 20.06V3.939a1.5 1.5 0 0 0-.85-1.352zm-5.146 14.861L10.826 12l7.178-5.448v10.896z" />
                  </svg>
                </Circle>
                <Circle ref={div4Ref}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Vercel</title>
                    <path d="M24 22.525H0l12-21.05 12 21.05z" />
                  </svg>
                </Circle>
                <Circle ref={div5Ref}>
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>shadcn/ui</title>
                    <path d="M22.219 11.784 11.784 22.219c-.407.407-.407 1.068 0 1.476.407.407 1.068.407 1.476 0L23.695 13.26c.407-.408.407-1.069 0-1.476-.408-.407-1.069-.407-1.476 0ZM20.132.305.305 20.132c-.407.407-.407 1.068 0 1.476.408.407 1.069.407 1.476 0L21.608 1.781c.407-.407.407-1.068 0-1.476-.408-.407-1.069-.407-1.476 0Z" />
                  </svg>
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div6Ref} className="h-16 w-16"></Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div7Ref}></Circle>
              </div>
            </div>

            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div1Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div2Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div3Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div4Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div5Ref}
              toRef={div6Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div7Ref}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
