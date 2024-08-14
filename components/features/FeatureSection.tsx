"use client";
import React from "react";
import FeaturesPath from "@/components/features/FeaturesPath";
import {
    AnimatePresence,
    motion,
    useScroll,
    useTransform,
} from "framer-motion";

const FeatureSection = () => {
    const ref = React.useRef(null);
    const ref2 = React.useRef(null);
    const ref3 = React.useRef(null);
    const ref4 = React.useRef(null);

    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start start", "end start"],
    });

    const { scrollYProgress: scrollYProgress2 } = useScroll({
        target: ref2,
        offset: ["start start", "end start"],
    });
    const { scrollYProgress: scrollYProgress3 } = useScroll({
        target: ref3,
        offset: ["start start", "end start"],
    });
    const { scrollYProgress: scrollYProgress4 } = useScroll({
        target: ref4,
        offset: ["start start", "end start"],
    });

    const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);
    const pathLength2 = useTransform(scrollYProgress2, [0, 0.2, 1], [0, 0, 1]);
    const pathLength3 = useTransform(scrollYProgress3, [0, 0.2, 1], [0, 0, 1]);
    const pathLength4 = useTransform(scrollYProgress4, [0, 0.2, 1], [0, 0, 1]);

    return (
        <AnimatePresence mode="wait">
            <div className="max-w-7xl px-4 mx-auto mt-44">
                <motion.h3 className="text-primary text-sm prose">FEATURES</motion.h3>
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    viewport={{ once: true }}
                    className=" text-2xl text-[#f4f4f4]"
                >
                    Discover What Sets Us Apart
                </motion.h2>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    viewport={{ once: true }}
                    className="text-muted-foreground"
                >
                    {`From advanced privacy controls to immersive live streaming, find out
                    what makes us the go-to platform for today's digital explorers.`}
                </motion.p>

                <div className="flex mt-4 relative flex-col space-y-16 lg:space-y-0 ">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        ref={ref}
                        className="relative  lg:min-h-[200vh]"
                    >
                        <div className="sticky top-20 ">
                            <FeaturesPath
                                image={"Frame1.svg"}
                                title={"Create your circle"}
                                description={
                                    `Connect with friends and followers in real-time through private messages, group chats, and voice or video calls, fostering deeper connections and meaningful conversations.`
                                }
                                reverse={false}
                            />
                            <div className="w-full hidden lg:block py-2 px-40 relative">
                                <motion.svg
                                    width="100%"
                                    height="103"
                                    className="mx-auto max-w-2xl"
                                    viewBox="0 0 679 103"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.04112 12.2822C2.17056 11.7385 0 9.22011 0 6.19549C0 2.77381 2.77783 0 6.20446 0C9.63108 0 12.4089 2.77381 12.4089 6.19549C12.4089 9.22011 10.2384 11.7385 7.36779 12.2822V39.0515C7.36779 48.675 15.1804 56.4764 24.8178 56.4764H654.182C665.105 56.4764 673.959 65.3179 673.959 76.2245V90.7178C676.829 91.2615 679 93.7799 679 96.8045C679 100.226 676.222 103 672.796 103C669.369 103 666.591 100.226 666.591 96.8045C666.591 93.7799 668.762 91.2615 671.632 90.7178V76.2245C671.632 66.601 663.82 58.7997 654.182 58.7997H24.8178C13.8954 58.7997 5.04112 49.9581 5.04112 39.0515V12.2822Z"
                                        fill="none"
                                        stroke={"#247FF5"}
                                        strokeWidth="2"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        style={{ pathLength: pathLength }}
                                        transition={{
                                            duration: 0,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        ref={ref2}
                        className="lg:min-h-[200vh] relative"
                    >
                        <div className="sticky top-20">
                            <FeaturesPath
                                image={"Frame2.svg"}
                                title={"Your Shades, Your Brand"}
                                description={
                                    "Connect with friends and followers in real-time through private messages, group chats, and voice or video calls, fostering deeper connections and meaningful conversations."
                                }
                                reverse={true}
                            />
                            <div className="w-full hidden lg:block py-2 px-40 relative">
                                <motion.svg
                                    width="100%"
                                    height="110"
                                    viewBox="0 0 729 110"
                                    className="mx-auto max-w-2xl"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M723.588 13.117C726.67 12.5363 729 9.84672 729 6.61654C729 2.96233 726.018 0 722.339 0C718.66 0 715.677 2.96233 715.677 6.61654C715.677 9.84672 718.008 12.5363 721.09 13.117V41.7055C721.09 51.983 712.702 60.3146 702.355 60.3146H26.6453C14.9186 60.3146 5.41229 69.757 5.41229 81.4048V96.883C2.33038 97.4637 0 100.153 0 103.383C0 107.038 2.98236 110 6.66132 110C10.3402 110 13.3226 107.038 13.3226 103.383C13.3226 100.153 10.9922 97.4637 7.91028 96.883V81.4048C7.91028 71.1273 16.2983 62.7958 26.6453 62.7958H702.355C714.081 62.7958 723.588 53.3533 723.588 41.7055V13.117Z"
                                        fill="none"
                                        stroke={"#247FF5"}
                                        strokeWidth="2"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        style={{ pathLength: pathLength2 }}
                                        transition={{
                                            duration: 0,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        ref={ref3}
                        className="lg:min-h-[200vh] relative"
                    >
                        <div className="sticky top-20">
                            <FeaturesPath
                                image={"Frame3.svg"}
                                title={"Gamification"}
                                description={
                                    "Stay up-to-date with the latest trends and conversations by exploring trending hashtags, joining relevant discussions, and discovering new content from across the platform."
                                }
                                reverse={false}
                            />
                            <div className="w-full hidden lg:block py-2 px-40 relative">
                                <motion.svg
                                    width="100%"
                                    height="103"
                                    viewBox="0 0 679 103"
                                    className="mx-auto max-w-2xl"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M5.04112 12.2822C2.17056 11.7385 0 9.22011 0 6.19549C0 2.77381 2.77783 0 6.20446 0C9.63108 0 12.4089 2.77381 12.4089 6.19549C12.4089 9.22011 10.2384 11.7385 7.36779 12.2822V39.0515C7.36779 48.675 15.1804 56.4764 24.8178 56.4764H654.182C665.105 56.4764 673.959 65.3179 673.959 76.2245V90.7178C676.829 91.2615 679 93.7799 679 96.8045C679 100.226 676.222 103 672.796 103C669.369 103 666.591 100.226 666.591 96.8045C666.591 93.7799 668.762 91.2615 671.632 90.7178V76.2245C671.632 66.601 663.82 58.7997 654.182 58.7997H24.8178C13.8954 58.7997 5.04112 49.9581 5.04112 39.0515V12.2822Z"
                                        fill="none"
                                        stroke={"#247FF5"}
                                        strokeWidth="2"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        style={{ pathLength: pathLength3 }}
                                        transition={{
                                            duration: 0,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.svg>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                        ref={ref4}
                        className="lg:min-h-[200vh] relative"
                    >
                        <div className="sticky top-20">
                            <FeaturesPath
                                image={"Frame4.svg"}
                                title={"Monetization"}
                                description={
                                    "Personalize your profile with customizable features such as profile pictures, cover photos, bio sections, and themed layouts, reflecting your unique personality and style."
                                }
                                reverse={true}
                            />
                            <div className="w-full hidden lg:block py-2 px-40 relative">
                                <motion.svg
                                    width="100%"
                                    height="110"
                                    viewBox="0 0 729 110"
                                    className="mx-auto max-w-2xl"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <motion.path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M723.588 13.117C726.67 12.5363 729 9.84672 729 6.61654C729 2.96233 726.018 0 722.339 0C718.66 0 715.677 2.96233 715.677 6.61654C715.677 9.84672 718.008 12.5363 721.09 13.117V41.7055C721.09 51.983 712.702 60.3146 702.355 60.3146H26.6453C14.9186 60.3146 5.41229 69.757 5.41229 81.4048V96.883C2.33038 97.4637 0 100.153 0 103.383C0 107.038 2.98236 110 6.66132 110C10.3402 110 13.3226 107.038 13.3226 103.383C13.3226 100.153 10.9922 97.4637 7.91028 96.883V81.4048C7.91028 71.1273 16.2983 62.7958 26.6453 62.7958H702.355C714.081 62.7958 723.588 53.3533 723.588 41.7055V13.117Z"
                                        fill="none"
                                        stroke={"#247FF5"}
                                        strokeWidth="2"
                                        initial={{
                                            pathLength: 0,
                                        }}
                                        style={{ pathLength: pathLength4 }}
                                        transition={{
                                            duration: 0,
                                            ease: "linear",
                                        }}
                                    />
                                </motion.svg>
                            </div>
                        </div>
                    </motion.div>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                        viewport={{ once: true }}
                    >
                        {" "}
                        <FeaturesPath
                            image={"Frame5.svg"}
                            title={"Launch Your Community And Grow"}
                            description={
                                "Build vibrant communities that inspire collaboration and drive collective success and transform your vision into a thriving network, unlocking endless opportunities for all."
                            }
                            reverse={false}
                        />
                    </motion.div>
                </div>
            </div>
        </AnimatePresence>
    );
};

export default FeatureSection;
