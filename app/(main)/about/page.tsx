/* eslint-disable @next/next/no-img-element */
"use client";

import { FadeUpStagger } from "@/components/common/FadeUpText";
import LatestInsightSection from "@/components/latest-insight-section";
import { Button } from "@/components/ui/button";
import { Skeleton } from "@/components/ui/skeleton";
import GitHubIcon from "@/lib/icons/GitHubIcon";
import LinkedInIcon from "@/lib/icons/LinkedInIcon";
import TwitterIcon from "@/lib/icons/TwitterIcon";
import { blogData, dummyDataAbout, team } from "@/lib/mocks";
import React from "react";
import { useState } from "react";

interface TeamMemberProps {
  id: string;
  avatar: string;
  name: string;
  title: string;
  desc: string;
  twitter: string;
  github: string;
  linkedin: string;
}

const TeamMember: React.FC<{ member: TeamMemberProps }> = React.memo(
  ({ member }) => (
    <li key={member.id}>
      <div className="w-full h-60 sm:h-52 md:h-56">
        <img
          src={member.avatar}
          className="w-full h-full object-cover object-center shadow-md rounded-xl"
          alt={`${member.name}'s avatar`}
        />
      </div>
      <div className="mt-4">
        <h4 className="text-lg text-[#f4f4f4] font-semibold">{member.name}</h4>
        <p className="text-primary">{member.title}</p>
        <p className=" text-muted-foreground mt-2">{member.desc}</p>
        <div className="mt-3 flex gap-4 text-[#f4f4f4] ">
          <a href={member.twitter} aria-label={`${member.name}'s Twitter`}>
            <TwitterIcon />
          </a>
          <a href={member.github} aria-label={`${member.name}'s GitHub`}>
            <GitHubIcon />
          </a>
          <a href={member.linkedin} aria-label={`${member.name}'s LinkedIn`}>
            <LinkedInIcon />
          </a>
        </div>
      </div>
    </li>
  )
);

TeamMember.displayName = "TeamMember";

export default function Example() {

  const [visibleAppCards, setVisibleAppBuilderCards] = useState(3);

  if (!dummyDataAbout || dummyDataAbout.length === 0) {
    return null; // Don't render anything if blogs are undefined or empty
  }

  const toggleCardVisibilityAppBuilder = () => {
    if (visibleAppCards >= dummyDataAbout.length) {
      setVisibleAppBuilderCards(3); // Reset to show only the first 3 cards
    } else {
      setVisibleAppBuilderCards((prevState) =>
        Math.min(prevState + 3, dummyDataAbout.length)
      ); // Show 3 more cards
    }
  };

  return (
    <div className="dark bg-background">
      <main>
        <div className="relative isolate">
          <svg
            className="absolute inset-x-0 top-0 -z-10 h-[64rem] w-full stroke-gray-200 [mask-image:radial-gradient(32rem_32rem_at_center,white,transparent)]"
            aria-hidden="true"
          >
            <defs>
              <pattern
                id="1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84"
                width={200}
                height={200}
                x="50%"
                y={-1}
                patternUnits="userSpaceOnUse"
              >
                <path d="M.5 200V.5H200" fill="none" />
              </pattern>
            </defs>
            <svg x="50%" y={-1} className="overflow-visible fill-gray-50">
              <path
                d="M-200 0h201v201h-201Z M600 0h201v201h-201Z M-400 600h201v201h-201Z M200 800h201v201h-201Z"
                strokeWidth={0}
              />
            </svg>
            <rect
              width="100%"
              height="100%"
              strokeWidth={0}
              fill="url(#1f932ae7-37de-4c0a-a8b0-a6e3b4d44b84)"
            />
          </svg>
          <div
            className="absolute left-1/2 right-0 top-0 -z-10 -ml-24 transform-gpu overflow-hidden blur-3xl lg:ml-24 xl:ml-48"
            aria-hidden="true"
          >
            <div
              className="aspect-[801/1036] w-[50.0625rem] bg-gradient-to-tr from-[#198cca] to-[#170bc2] opacity-30"
              style={{
                clipPath:
                  "polygon(63.1% 29.5%, 100% 17.1%, 76.6% 3%, 48.4% 0%, 44.6% 4.7%, 54.5% 25.3%, 59.8% 49%, 55.2% 57.8%, 44.4% 57.2%, 27.8% 47.9%, 35.1% 81.5%, 0% 97.7%, 39.2% 100%, 35.2% 81.4%, 97.2% 52.8%, 63.1% 29.5%)",
              }}
            />
          </div>
          <div className="overflow-hidden">
            <div className="mx-auto max-w-7xl px-6 pb-32 pt-36 sm:pt-60 lg:px-8 lg:pt-32">
              <div className="mx-auto max-w-2xl gap-x-14 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                <FadeUpStagger className="relative w-full max-w-xl lg:shrink-0 xl:max-w-2xl">
                  <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
                    We’re changing the way people connect.
                  </h1>
                  <p className="mt-6 text-lg leading-8 text-muted-foreground sm:max-w-md lg:max-w-none">
                    CapCons is{" "}
                    <span className="text-primary">social network</span> for
                    anyone who loves sharing their stories and experiences and
                    wants control over who they share it with.
                  </p>
                  <div className="mt-10 flex items-center gap-x-6">
                    <div className="text-sm font-semibold h-6 leading-6 text-transparent"></div>
                  </div>
                </FadeUpStagger>
                <FadeUpStagger className="mt-14 flex justify-end gap-8 sm:-mt-44 sm:justify-start sm:pl-20 lg:mt-0 lg:pl-0">
                  <div className="ml-auto w-44 flex-none space-y-8 pt-32 sm:ml-0 sm:pt-80 lg:order-last lg:pt-36 xl:order-none xl:pt-80">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="mr-auto w-44 flex-none space-y-8 sm:mr-0 sm:pt-52 lg:pt-36">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1485217988980-11786ced9454?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-x=.4&w=396&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                  <div className="w-44 flex-none space-y-8 pt-32 sm:pt-0">
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272504528-790c24957dda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=left&w=400&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                    <div className="relative">
                      <img
                        src="https://images.unsplash.com/photo-1670272505284-8faba1c31f7d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&h=528&q=80"
                        alt=""
                        className="aspect-[2/3] w-full rounded-xl bg-gray-900/5 object-cover shadow-lg"
                      />
                      <div className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-inset ring-gray-900/10" />
                    </div>
                  </div>
                </FadeUpStagger>
              </div>
            </div>
          </div>
        </div>
      </main>

      <section className="bg-[#8C8C8C]/30 relative text-2xl sm:text-4xl lg:text-6xl font-extrabold flex items-center overflow-hidden aspect-video mx-auto max-w-screen-xl rounded-xl justify-center">
        Video
        <Skeleton className="absolute inset-0" />
      </section>

      <section className="bg-background dark">
        <div className="container  px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
          <h2 className="text-2xl bg-clip-text text-transparent bg-gradient-to-r from-[#2A7FF5] via-[#19C0B6] to-[#B76FF7] text-center mx-auto font-semibold tracking-tight xl:text-3xl ">
            We expect to be paid for the value we create for our customers.
          </h2>
        </div>
      </section>

      <section className="py-14">
        <div className="max-w-screen-xl mx-auto px-4 md:px-8">
          <div className="max-w-3xl">
            <h3 className="text-[#f4f4f4] text-3xl font-semibold sm:text-4xl">
              Meet our team of Engineers, designers, and product managers.
            </h3>
            <p className="text-gray-400 max-w-xl mt-3">
              {`Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy.`}
            </p>
          </div>
          <div className="mt-12">
            <ul className="grid gap-8 sm:grid-cols-2 md:grid-cols-3">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  member={{ ...member, id: index.toString() }}
                />
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section>
        <div className="flex flex-col justify-center items-center">
          <p className="sm:text-2xl text-balance text-[#f4f4f4]  text-center font-bold">
            Be a part of something that creates meaning for you and our team,{" "}
            <br /> if you believe and driven towards our vision & mission.
          </p>
          <Button
            variant="ghost"
            className="gradient-text px-12 mt-8 py-6 rounded gradient-button"
          >
            Join Our Team
          </Button>
        </div>
      </section>

      <LatestInsightSection
        heading="Blogs and Events"
        subHeading="Everything You Need To Launch And Grow"
        blogCards={blogData}
      />

      <div className="px-4 lg:px-8 py-10">
        <div className="relative container">
          <div className="relative overflow-hidden w-full h-[30rem] md:h-[calc(100vh-106px)]  bg-muted dark rounded-2xl ">
            <div className="h-[30rem] md:h-[calc(100vh-106px)]  flex flex-col bg-[url('/images/friends.webp')] bg-cover bg-center bg-no-repeat "></div>
          </div>
        </div>
      </div>

      <div className="container  px-4 py-16 mx-auto lg:flex lg:items-center lg:justify-between">
        <h2 className=" italic bg-clip-text text-transparent bg-gradient-to-r from-[#2A7FF5] via-[#19C0B6] to-[#B76FF7] text-center mx-auto font-semibold tracking-tight xl:text-3xl ">
          <p className="text-3xl">
            Beyond features, a culture to support creators
          </p>
        </h2>
      </div>
    </div>
  );
}
