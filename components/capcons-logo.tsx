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
                "text-lg flex space-x-1 font-bold tracking-tight justify-center text-[#f4f4f4] items-center",
                className
            )}
            href={"/"}
        >
            <Image src={"logo.svg"} alt={"Capcons"} className=" text-red-900" height={24} width={24} />
            <span>Capcons</span>
        </Link>
    );
}
