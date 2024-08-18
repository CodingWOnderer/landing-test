"use client";
import React from "react";
import BlogCards from "./blog-cards";
import { motion } from "framer-motion";

const MotionBlogCards = motion(BlogCards);

interface LatestInsightSectionProps {
  heading?: string;
  subHeading?: string;
  preTag?: string;
  blogCards?: {
    banner: string;
    comments: number;
    likes: number;
    date: string;
    title: string;
    description: string;
    category: string;
    owner: string;
    href: string;
    profile: string;
  }[];
}

const LatestInsightSection: React.FC<LatestInsightSectionProps> = ({
  heading,
  subHeading,
  blogCards,
  preTag,
}) => {
  return (
    <motion.div className="py-24  px-4">
      <div className="flex flex-col space-y-4 max-w-7xl mx-auto">
        <div>
          {preTag && (
            <span className="text-sm text-muted-foreground ">{preTag}</span>
          )}
          <motion.h2
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,

                ease: "easeOut",
                once: true,
              },
            }}
            className="font-medium text-2xl   text-primary"
          >
            {heading}
          </motion.h2>
        </div>
        {subHeading && (
          <motion.p
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
              transition: {
                duration: 0.5,
                delay: 0.3,
                ease: "easeOut",
                once: true,
              },
            }}
            className="scroll-m-0 text-muted-foreground font-normal leading-7 [&:not(:first-child)]:mt-6 font-sans"
          >
            {subHeading}
          </motion.p>
        )}
        <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
          {blogCards &&
            blogCards.map((blog, index) => (
              <MotionBlogCards
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                  transition: {
                    duration: 0.5,
                    delay: 0.2 * index,
                    ease: "easeOut",
                    once: true,
                  },
                }}
                viewport={{ once: true }}
                key={index}
                banner={blog.banner}
                comments={blog.comments}
                likes={blog.likes}
                date={blog.date}
                title={blog.title}
                description={blog.description}
                category={blog.category}
                owner={blog.owner}
                href={blog.href}
                profile={blog.profile}
              />
            ))}
        </div>
      </div>
    </motion.div>
  );
};

export default LatestInsightSection;

// grid lg:grid-cols-3 md:grid-cols-2
