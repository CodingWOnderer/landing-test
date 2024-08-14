import { BlogCarousel } from "@/components/blog/blog-carousels";
import HotStuff from "@/components/blog/hot-stuff";
import PopularPostSection from "@/components/blog/popular-post";
import RecentStories from "@/components/blog/recent-stories";
import TopOfTheMonthSection from "@/components/blog/TopOfTheMonth";
import React from "react";

const BlogPage = () => {
    return (
        <div className=" min-h-screen py-16 px-4">
            <BlogCarousel />
            <div className=" pb-8  md:py-24">
                <RecentStories />
            </div>
            <PopularPostSection />
            <HotStuff />
            <TopOfTheMonthSection />
        </div>
    );
};

export default BlogPage;
