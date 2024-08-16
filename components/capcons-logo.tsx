import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import React from "react";

interface CapconsProps {
    className?: React.ComponentProps<"a">["className"];
}

export function CapconsLogo({ className }: CapconsProps) {
    return (
        <Link
            className={cn(
                "text-lg flex space-x-1 font-bold tracking-tight  justify-center h-16 w-32 relative   text-[#f4f4f4] items-center",
                className
            )}
            href={"/"}
        >
            <Image src={"/logo-dark.png"} alt={"Capcons"} className=" h-full w-full  object-cover  dark:hidden" height={70} width={200} />
            <Image src={"/logo-light.png"} alt={"Capcons"} className=" h-full w-full   object-cover hidden dark:block" height={70} width={200} />
        </Link>
    );
}
