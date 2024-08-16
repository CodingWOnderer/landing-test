"use client";
import { Bell } from "lucide-react";
import Image from "next/image";
import React from "react";

const AuthBento = () => {
    return (
        <div className="hidden p-8 xl:p-14 lg:grid grid-rows-12 xl:grid-cols-7 lg:grid-cols-6 lg:grid-rows-6 bg-dark  gap-3 min-h-screen max-h-screen">
            <div className="relative text-white col-span-2 overflow-hidden row-span-2 rounded-3xl">
                <video
                    preload={"none"}
                    className=" h-full light:invert  object-cover w-full"
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source src="/videos/tech.mp4" type="video/mp4" />
                </video>
                <h2 className="absolute top-4 left-1/2 right-1/2 whitespace-nowrap font-bold -translate-x-10">Create Circle</h2>
            </div>
            <div className=" col-span-2 xl:col-span-3 row-span-2   rounded-3xl overflow-clip">
                <img
                    src="/bento-mobile3-light.png"
                    className=" h-[102%] w-[102%] dark:hidden"
                />
                <img
                    src="/bento-mobile3-dark.png"
                    className=" h-[102%] w-[102%] hidden dark:block"
                />
            </div>
            <div className="relative bg-customgradient col-span-2 row-span-4 rounded-3xl overflow-clip">
                <img
                    src="/bento-mobile2.png"
                    className="w-full object-cover h-[103%]"
                />
            </div>
            <div className="relative row-span-4 overflow-clip col-span-2 xl:col-span-3 rounded-3xl bg-bentogradient">
                <img
                    src="/bento-mobile1.png"
                    className="w-full object-cover h-[102%]"
                />
            </div>
            <div className="relative bg-gradient-to-t overflow-hidden col-span-2 row-span-2 bg-black flex justify-center items-center rounded-3xl">
                <video
                    preload={"none"}
                    className=" light:invert w-[70%]"
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source src="/videos/neon.mp4" type="video/mp4" />
                </video>
                <div className=" absolute flex text-white items-center text-sm">
                    Subscribe <Bell size={16} className=" ml-1" />
                </div>
                <Image className="absolute right-0" src={"/bento-money.png"} alt="money" height={100} width={100} />
            </div>

            <div className="relative col-span-2 row-span-2 text-white  rounded-3xl bg-[url('/frame.png')] bg-cover border bg-no-repeat">
                <div className=" absolute inset-0 flex items-end pb-1 justify-center">{`CapCons XP's`}</div>
            </div>
            <div className="relative items-center text-white justify-center col-span-2 row-span-2 overflow-hidden rounded-3xl">
                {" "}
                <video
                    preload={"none"}
                    className=" h-full light:invert  object-cover w-full"
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source src="/videos/multicolor.mp4" type="video/mp4" />
                </video>
                <div className="absolute inset-0 flex justify-center items-center">Choose your<br /> brand color!</div>
            </div>
        </div>
    );
};

export default AuthBento;
