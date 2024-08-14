"use client";

import { motion, useAnimation, useInView } from "framer-motion";
import { useRef } from "react";
import { Button } from "./ui/button";
import Particles from "./ui/particles";
import { useParallax } from "@/hooks/useParallax";

export default function HeroSection() {
   const ref = useRef(null);
   const contRef = useRef(null);
   const inView = useInView(ref, { once: true, margin: "-100px" });
   const {
      primaryX,
      primaryY,
      secondaryX,
      secondaryY,
      onMouseMoveHandler,
      onMouseLeaveHandler,
   } = useParallax();
   const imgAnimation = useAnimation();

   const handleMouseMove = (e: React.MouseEvent) => {
      const { clientX, clientY } = e;
      const moveX = clientX - window.innerWidth / 2;
      const moveY = clientY - window.innerHeight / 2;
      const offsetFactor = 15;
      imgAnimation.start({
         x: moveX / offsetFactor,
         y: moveY / offsetFactor,
      });
   };

   return (
      <> <section
         id="hero"
         className="relative  mx-auto pt-32 max-w-7xl px-6 text-center md:px-8"
      >
         <div className=" grid min-h-[450px] z-10 animate-fade-in lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
            <div className=" mt-16 lg:mt-0 h-full flex flex-col justify-center lg:col-span-3">
               <div className="flex justify-between flex-col lg:items-start">
                  <div>
                     <h1 className="text-3xl  lg:text-start font-bold text-white sm:text-4xl xl:text-5xl xl:leading-tight scroll-m-20">
                        Share your stories inside
                        your Circles
                     </h1>
                     <p className="lg:text-start text-center mt-4 text-base font-normal leading-7 text-gray-400   xl:pr-0 lg:pr-16    ">
                        {/* <Balancer>
                     Capcons is where stories unfold, connections are made, and
                     memories are shared. Whether you're a storyteller, a
                     listener, or somewhere in between, there's a place for you
                     in our community.
                  </Balancer> */}

                        {` Capcons is where stories unfold, connections are made, and
                        memories are shared. Whether you're a storyteller, a
                        listener, or somewhere in between, there's a place for you
                        in our community.`}
                     </p>
                  </div>
                  <Button
                     size={"lg"}
                     className="mt-12 z-10 dark max-w-xs w-full lg:w-auto lg:max-w-none mx-auto lg:mx-0"
                  >
                     Get Started
                  </Button>
               </div>
            </div>
            <div className=" h-full   lg:col-span-4 mt-10 lg:mt-0">
               <div className="h-full w-full grid grid-cols-2 grid-rows-2">

                  <motion.div
                     onMouseMove={(e) => onMouseMoveHandler(e)}
                     onMouseLeave={onMouseLeaveHandler}
                     className=" relative flex justify-center items-center"
                  >
                     <motion.img
                        src={"/img1.svg"}
                        style={{
                           x: secondaryX,
                           y: secondaryY,
                        }}
                        layout="preserve-aspect"
                        alt="loading"
                     />
                  </motion.div>
                  <motion.div
                     onMouseMove={(e) => onMouseMoveHandler(e)}
                     onMouseLeave={onMouseLeaveHandler}
                     className=" relative flex justify-center items-center"
                  >
                     <motion.img
                        src={"/img2.svg"}
                        style={{
                           x: secondaryX,
                           y: secondaryY,
                        }}
                        layout="preserve-aspect"
                        alt="loading"
                     />
                  </motion.div>
                  <motion.div onMouseMove={(e) => onMouseMoveHandler(e)}
                     onMouseLeave={onMouseLeaveHandler} className=" relative flex justify-center items-center">
                     <motion.img
                        src={"/img3.svg"}
                        style={{
                           x: secondaryX,
                           y: secondaryY,
                        }}
                        layout="preserve-aspect"
                        alt="loading"
                     />
                  </motion.div>

                  <motion.div
                     onMouseMove={(e) => onMouseMoveHandler(e)}
                     onMouseLeave={onMouseLeaveHandler}
                     className=" relative flex justify-center items-center"
                  >
                     <motion.img
                        src={"/img4.svg"}
                        style={{
                           x: secondaryX,
                           y: secondaryY,
                        }}
                        className="rounded-full   cursor-pointer "
                        layout="preserve-aspect"
                        alt="loading"
                     />
                  </motion.div>
               </div>
            </div>
         </div>

         {/**Laptop */}

         {/* <div
      ref={ref}
      className="animate-fade-up mt-24 relative  opacity-0 [--animation-delay:400ms] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
   >
      <div
         className={` rounded-[20px] md:rounded-[24px] lg:rounded-[40px] border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${inView ? "before:animate-image-glow" : ""
            }`}
      >
         <BorderBeam
            size={200}
            duration={12}
            delay={11}
            colorFrom="var(--color-one)"
            colorTo="var(--color-two)"
         />

         <div className="relative m-1">
            <img
               src="/laptop.png"
               alt="Hero Image"
               className="relative size-full rounded-[inherit]   mt-0.5  block"
            />
            <div className="absolute inset-y-[5%] inset-x-[2%] rounded-sm translate-x-[1px]">
               <video controls preload="none" loop autoPlay muted>
                  <source
                     src="https://videos.pexels.com/video-files/7687932/7687932-uhd_2560_1440_30fps.mp4"
                     type="video/mp4"
                  ></source>
               </video>
            </div>
         </div>
      </div>
   </div> */}
      </section>
         <Particles
            className="absolute inset-0 "
            quantity={200}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         /></>
   );
}
// bg-[#020916]