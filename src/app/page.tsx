"use client";
import "./styles.css";

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
import { FaBook, FaGithub, FaUser } from "react-icons/fa";
import { CiGlobe } from "react-icons/ci";
import { IoLogoVercel } from "react-icons/io5";
import { FaGlobe, FaRobot } from "react-icons/fa";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "markdown",
  "cplusplus",
  "gnu",
  "python",
  "nodemon",
  "electron",
  "reactdotjs",
  "createreactapp",
  "latex",
  "gnubash",
  "archlinux",
  "unrealengine",
  "windows10",
  "npm",
  "windowsterminal",
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
  const div8Ref = useRef<HTMLDivElement>(null);
  const div9Ref = useRef<HTMLDivElement>(null);

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
            className="min-h-screen flex justify-center items-center max-sm:flex-col"
            id="work"
          >
            <motion.div className="w-[55%] h-full flex-col flex items-center">
              <p className="text-center indent-4 w-[65%] max-md:w-full max-md:pt-12 text-2xl ">
                <span className="text-5xl max-sm:text-2xl">
                  Over the years{" "}
                </span>
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
          <hr id="webdev" className="block"/>
        </PopScroll>
        <div
          className="min-h-screen flex items-center justify-center flex-col"
        >
          <h1 className="text-5xl font-bold pb-12 max-md:text-4xl">
            Web Development
          </h1>
          <p className="pb-12 text-2xl w-[50%] max-md:w-[85%] -indent-4">
            These are the tools I use for frontend web development. I primary
            work on frontend websites with Next.js and TailwindCSS. I am also
            capable of working on frontend with either Express.js or Next.js. I
            use Vercel for deployment. I also use{" "}
            <a
              href="https://ui.aceternity.com"
              className="underline underline-offset-2 hover:underline-offset-4 duration-500"
            >
              Aceternity UI
            </a>
            ,{" "}
            <a
              href="https://ui.shadcn.com"
              className="underline underline-offset-2 hover:underline-offset-4 duration-500"
            >
              shadcn/ui
            </a>
            , and{" "}
            <a
              href="https://magicui.design"
              className="underline underline-offset-2 hover:underline-offset-4 duration-500"
            >
              {" "}
              Magic UI
            </a>{" "}
            for components.
          </p>
          <div
            className="relative flex h-full w-full hover:scale-105 duration-500 hover:shadow-2xl max-w-[42rem] group items-center justify-center overflow-hidden rounded-lg border bg-background p-10 md:shadow-xl"
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
                <Circle
                  ref={div4Ref}
                  className="grayscale group-hover:grayscale-0 fill-[#f58025] duration-200"
                >
                  <svg
                    role="img"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <title>Stack Overflow</title>
                    <path d="M15.725 0l-1.72 1.277 6.39 8.588 1.716-1.277L15.725 0zm-3.94 3.418l-1.369 1.644 8.225 6.85 1.369-1.644-8.225-6.85zm-3.15 4.465l-.905 1.94 9.702 4.517.904-1.94-9.701-4.517zm-1.85 4.86l-.44 2.093 10.473 2.201.44-2.092-10.473-2.203zM1.89 15.47V24h19.19v-8.53h-2.133v6.397H4.021v-6.396H1.89zm4.265 2.133v2.13h10.66v-2.13H6.154Z" />
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
                <Circle ref={div6Ref} className="h-16 w-16">
                  <p className="dark:fill-black text-3xl grayscale group-hover:grayscale-0 duration-200">
                    👨‍💻
                  </p>
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div7Ref} className="h-16 w-16">
                  <FaGithub className="dark:fill-black" size={36} />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div8Ref} className="h-16 w-16">
                  <IoLogoVercel className="dark:fill-black" size={36} />
                </Circle>
              </div>
              <div className="flex flex-col justify-center">
                <Circle ref={div9Ref} className="h-16 w-16">
                  <CiGlobe className="dark:fill-black" size={36} />
                </Circle>
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
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div6Ref}
              toRef={div8Ref}
            />
            <AnimatedBeam
              containerRef={containerRef}
              fromRef={div8Ref}
              toRef={div9Ref}
            />
          </div>
          <AppleButton text="My History" href="#history" />

        </div>
        <div
          className="min-h-screen flex items-center justify-center flex-col"
           id="history"
        >
          <VerticalTimeline visible={true}>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="Spring 2021"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaBook size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                George Mason University Courses
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Game Design with Unreal Engine and Java Programming
              </h4>
              <p>
                Game Design with Unreal Engine was my first introduction to the
                world of programming and game development. I actually had to
                request to be in the course because I wasn&apos;t old enough.
                Learning to program in Java definitely made me a better
                programmer because Java&apos;s syntax is versatile. This means I
                was able to pick up C, C++, and Javascript pretty fast.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2021-2022"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Virginia State Championship.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                State Championship for Vex Robotics.
              </h4>
              <p>
                2021 was my first year in robotics and we managed to make it to
                the state championship. At this point in the year I was able to
                pick up C++ to program the robot&apos;s autonomous movements.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2021-2022"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                My first PID Controller.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Proportional Integral Derivative Controller.
              </h4>
              <p>
                About a year after first learning how to program robots in C++ 
                our team was able to get a gyroscope sensor. Gyroscopes are extremely useful
                in robotics because they can accurately track the robots rotation relative to the
                starting rotation. PID controllers are a popular way to use the gyroscopic data to control
                the motors in such a way to get almost perfect turns. This experience introduced me to the concepts
                of Calculus and advanced mathematics. I had to utilize and understand Calculus and Trigonometry in order
                to be able to develop my own PID controller.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2022"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaBook size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                C++ UI Library.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Robotics
              </h4>
              <p>
                The vex V5 system comes with a vex brain which has a touch screen on it.
                The default vex library didn&apos;t come with default functionality for buttons
                to select which autonomous program to run. So I spent a lot of my free time developing
                a simple UI library that displays a button on the touch screen. This experience taught me about
                Object Oriented Programming and refined my understanding of C++. It also taught me some cool 
                math relating to point box collision which is useful in Game Development.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2022"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaBook size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Harvard&apos;s CS50
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Programming with C.
              </h4>
              <p>
                In this course I learned how to program algorithms in C. Overall
                the course made me a well rounded programmer and changed my
                thought process.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2022"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaGlobe size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                BuilderGroop S2 | Hop Hackathon
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                
              </h4>
              <p>
                This was my very first Hackathon and first time using React.js.
                I had a partner for the Hackathon but I did most of the work. This
                was my first time using React.js and I thought it would be like raw HTML
                so needless to say it wasn&apos;t a very good site.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2021-2023"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaGlobe size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                adamsalem.tech
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                My first react.js project.
              </h4>
              <p>
                Create-React-App, TailwindCSS, Express.js,{" "}
                <a href="https://hop.io" className="underline">
                  Hop
                </a>
                , Node Mailer, Font Awesome.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2023-2024"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Virginia State Championship 2024.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Doswell, Virginia
              </h4>
              <p>
                I was the Team Captain for our team in 2024. We were able to
                make it to the semifinals, which meant a qualification to the
                World Championship.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2023-2024"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Qualified to World Championship.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Dallas, Texas
              </h4>
              <p>Team Captain, Programmer, Builder.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2023-2024"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Understanding Odometry.
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Odometry is a technique used in robotics to accurately track the robots position relative to the starting point.
              </h4>
              <p>
                A popular library in the vex robotics community is called LemLib. LemLib is a library
                that seamlessly implements lateral PID, angular PID, and Odometry together to create perfect autonomous motions.
                I tasked myself with trying to fully understand Odometry. This entailed a lot of research.
                I compiled the information I found into a Word document that explains the math behind Odometry step-by-step.
                This was a great learning experience and it expanded on my knowledge of advanced trigonometry and control systems in programming.
              </p>
              
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2023-2024"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaRobot size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Present
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Woodbridge, Virginia
              </h4>
              <p>
                One of the most successful teams from my local High School
                invited me to start a private robotics team with them. They had
                heard about my capabilities as a programmer, designer, and
                builder and wanted to take me on coming out of middle school. We
                partnered with a non-profit organization to form 2072A
                consisting of 4 high school students. I am currently a freshman
                in High School.
              </p>
            </VerticalTimelineElement>
            <VerticalTimelineElement
              className="vertical-timeline-element--work"
              contentStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              contentArrowStyle={{
                display: "none",
              }}
              date="2023-2024"
              iconStyle={{ background: "rgb(59, 130, 246)", color: "#fff" }}
              icon={<FaGlobe size={36} className="fill-white" />}
              visible={true}
            >
              <h3 className="vertical-timeline-element-title text-2xl">
                Present - Projects
              </h3>
              <h4 className="vertical-timeline-element-subtitle indent-2">
                Woodbridge, Virginia
              </h4>
              <p>
                Currently I am working on my first large-scale web application.
                Vex Robotics teams need analytics on organizations, other teams,
                events, and their own team. Luckily robotevents.com has an API.
                So my current project is a web app to request data from the API,
                process it, and display it.
              </p>
            </VerticalTimelineElement>
          </VerticalTimeline>
        </div>
      </div>
    </div>
  );
}
