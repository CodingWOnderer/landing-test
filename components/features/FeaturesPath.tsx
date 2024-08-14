import React, { FC } from "react";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import Image from "next/image";
import { FaPeopleGroup } from "react-icons/fa6";

interface FeaturwPathI {
    image: string;
    title: String;
    description: string;
    reverse: boolean;
}

const FeaturesPath: FC<FeaturwPathI> = ({
    image,
    title,
    description,
    reverse,
}) => {
    return (
        <div className="w-full">
            <div className=" max-w-7xl gap-x-4 grid lg:grid-cols-2 w-full">
                <div>
                    <Image
                        src={image}
                        alt="loading"
                        className=" object-cover w-full h-full"
                        height={500}
                        width={490}
                    />
                </div>
                <div className={`flex ${reverse && "lg:order-first"} lg:justify-center  items-center`}>
                    <Card className="bg-transparent  lg:max-w-lg  text-[#f4f4f4] border-none">
                        <CardHeader className=" pb-2">
                            <CardTitle className=" text-xl">
                                <div className="w-fit p-1.5 mb-2 border-sky-600 border rounded-full text-sky-600">
                                    <FaPeopleGroup size={34} />
                                </div>
                                {title}
                            </CardTitle>
                            <CardDescription className="sr-only">
                                Card Description
                            </CardDescription>
                        </CardHeader>
                        <CardContent className="my-0">
                            <p className=" tracking-wider text-muted-foreground "> {description}</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    );
};

export default FeaturesPath;
