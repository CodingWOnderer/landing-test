"use client";
import React from "react";
import BlogCards from "./blog-cards";
import { motion } from "framer-motion";

const blogData = [
  {
    banner:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: 21,
    likes: 830,
    date: new Date().toISOString(),
    title: "App Builder",
    description:
      "Explore the benefits of Code Snippets AI for large software development teams, from boosting productivity to enhancing collaboration and code security.",
    category: "Technology",
    owner: "Vipin Bhati",
    href: "#",
    profile:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    banner:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: 21,
    likes: 830,
    date: new Date().toISOString(),
    title: "App Builder",
    description:
      "Explore the benefits of Code Snippets AI for large software development teams, from boosting productivity to enhancing collaboration and code security.",
    category: "Technology",
    owner: "Vipin Bhati",
    href: "#",
    profile:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
  {
    banner:
      "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    comments: 21,
    likes: 830,
    date: new Date().toISOString(),
    title: "App Builder",
    description:
      "Explore the benefits of Code Snippets AI for large software development teams, from boosting productivity to enhancing collaboration and code security.",
    category: "Technology",
    owner: "Vipin Bhati",
    href: "#",
    profile:
      "https://images.pexels.com/photos/1559486/pexels-photo-1559486.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },
];

const MotionBlogCards = motion(BlogCards);

const LatestInsightSection: React.FC = () => {
  return (
    <motion.div className="py-24 border px-4">
      <div className="flex flex-col space-y-4 max-w-7xl mx-auto">
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
          className="font-medium text-2xl text-primary"
        >
          Latest Insights
        </motion.h2>
        <div className="grid lg:grid-cols-3 gap-3 md:grid-cols-2">
          {blogData.map((blog, index) => (
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
