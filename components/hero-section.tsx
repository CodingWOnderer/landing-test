'use client'

import { ArrowRightIcon } from '@radix-ui/react-icons'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import TextShimmer from './ui/text-shimmer'
import { Button } from './ui/button'
import { BorderBeam } from './ui/border-beam'
import Particles from './ui/particles'
import Link from 'next/link'
import { Container, Section } from './craft';
import Balancer from "react-wrap-balancer"


export default function HeroSection() {
   const ref = useRef(null)
   const inView = useInView(ref, { once: true, margin: '-100px' })
   return (
      <> <section
         id="hero"
         className="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8"
      >
         <div className="backdrop-filter-[12px] animate-fade-in group inline-flex h-7 -translate-y-4 items-center justify-between gap-1 rounded-full border border-white/5 bg-white/10 px-3 text-xs text-white opacity-0 transition-all ease-in hover:cursor-pointer hover:bg-white/20 dark:text-black">
            <TextShimmer className="inline-flex items-center justify-center">
               <span>✨ Introducing Capcons</span>
               {' '}
               <ArrowRightIcon className="ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5" />
            </TextShimmer>
         </div>
         <h1 className="animate-fade-in -translate-y-4 text-balance bg-gradient-to-br dark from-white from-30% to-white/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] sm:text-6xl md:text-7xl lg:text-8xl ">
            Share your stories
            <br className="hidden md:block" />
            {' '}
            inside your Circle
         </h1>
         <p className="animate-fade-in mb-12 -translate-y-4 text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl">
            Create or explore circles - meet new people, learn new things, find support,
            <br className="hidden md:block" />
            {' '}
            get out of their comfort zones, and pursue their passions, together.
         </p>
         <Button className="animate-fade-in -translate-y-4 gap-1 rounded-lg  opacity-0 ease-in-out [--animation-delay:600ms] text-black">
            <span>Sign for free </span>
            <ArrowRightIcon className="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1" />
         </Button>
         <div
            ref={ref}
            className="animate-fade-up relative mt-32 opacity-0 [--animation-delay:400ms] after:absolute after:inset-0 after:z-50 after:[background:linear-gradient(to_top,hsl(var(--background))_30%,transparent)]"
         >
            <div
               className={` rounded-[20px] md:rounded-[24px] lg:rounded-[40px] border border-white/10 bg-white bg-opacity-[0.01] before:absolute before:bottom-1/2 before:left-0 before:top-0 before:size-full before:opacity-0 before:[background-image:linear-gradient(to_bottom,var(--color-one),var(--color-one),transparent_40%)] before:[filter:blur(180px)] ${inView ? 'before:animate-image-glow' : ''
                  }`}
            >
               <BorderBeam
                  size={200}
                  duration={12}
                  delay={11}
                  colorFrom="var(--color-one)"
                  colorTo="var(--color-two)"
               />

               <div className='relative m-1'>
                  <img
                     src="/laptop.png"
                     alt="Hero Image"
                     className="relative size-full rounded-[inherit]   mt-0.5  block"
                  />
                  <div className='absolute inset-y-[5%] inset-x-[2%] rounded-sm translate-x-[1px]'>

                     <video controls preload="none" loop autoPlay muted  >
                        <source src="https://videos.pexels.com/video-files/7687932/7687932-uhd_2560_1440_30fps.mp4" type="video/mp4" ></source>

                     </video>
                  </div>
               </div>
            </div>
         </div>
      </section>
         <Particles
            className="absolute inset-0 -z-10"
            quantity={50}
            ease={70}
            size={0.05}
            staticity={40}
            color="#ffffff"
         /></>
   )
}
