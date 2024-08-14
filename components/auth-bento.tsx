"use client";
import React from "react";

const AuthBento = () => {
    return (
        <div className="hidden lg:grid grid-rows-12 lg:grid-cols-4 lg:grid-rows-6 bg-dark py-8 pr-8 gap-4 min-h-screen max-h-screen">
            <div className="relative border col-span-1 overflow-hidden row-span-2 rounded-3xl">
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
            </div>
            <div className=" col-span-2 row-span-2   rounded-3xl overflow-clip">
                <img
                    src="/bento-mobile3.png"
                    className=" h-[102%] w-[102%]"
                />
            </div>
            <div className="relative bg-custom-gradient col-span-1 row-span-4 rounded-3xl overflow-clip">
                <img
                    src="/bento-mobile2.png"
                    className="w-full object-cover h-[103%]"
                />
            </div>
            <div className="relative row-span-4 overflow-clip col-span-2 border rounded-3xl bg-bento-gradient">
                <img
                    src="/bento-mobile1.png"
                    className="w-full object-cover h-[102%]"
                />
            </div>
            <div className="relative bg-gradient-to-t overflow-hidden col-span-1 row-span-2 flex justify-center items-center  rounded-3xl">
                <video
                    preload={"none"}
                    className=" h-full light:invert  object-cover w-full"
                    autoPlay
                    muted
                    loop
                    controls={false}
                >
                    <source src="/videos/neon.mp4" type="video/mp4" />
                </video>
            </div>

            <div className="relative col-span-1 row-span-2   border rounded-3xl bg-[url('/frame.png')] bg-cover bg-no-repeat"></div>
            <div className="relative items-center justify-center col-span-1 row-span-2 border overflow-hidden rounded-3xl">
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
            </div>
        </div>
    );
};

export default AuthBento;
