import { User } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { MagicCard } from "./MagicCard";

const Features = () => (
    <div className="w-full dark py-20 lg:py-40">
        <div className="container  mx-auto">
            <div className="flex flex-col gap-10">
                <div className="flex gap-4 flex-col items-start">
                    <div>
                        <Badge variant={"secondary"}>Platform</Badge>
                    </div>
                    <div className="flex gap-2 flex-col">
                        <h2 className="text-3xl text-foreground md:text-5xl tracking-tighter max-w-xl font-regular text-left">
                            Something new!
                        </h2>
                        <p className="text-lg max-w-xl lg:max-w-lg leading-relaxed tracking-tight text-muted-foreground  text-left">
                            Managing a small business today is already tough.
                        </p>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    <MagicCard gradientColor="#2d68ff" gradientOpacity={0.2} className=" border rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto ">
                        <div className="flex justify-between flex-col h-full">
                            <User className="w-8 h-8 stroke-1" />
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making it easier and faster
                                    than ever.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                    <MagicCard gradientColor="red" gradientOpacity={0.2} className="border rounded-md  aspect-square">
                        <div className="h-full  p-6 flex justify-between flex-col">
                            <User className="w-8 h-8 stroke-1" />
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making it easier and faster
                                    than ever.
                                </p>
                            </div>
                        </div>
                    </MagicCard>

                    <MagicCard gradientColor="green" gradientOpacity={0.2} className="border rounded-md aspect-square ">
                        <div className="p-6 flex justify-between flex-col">
                            <User className="w-8 h-8 stroke-1" />
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making it easier and faster
                                    than ever.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                    <MagicCard gradientColor="purple" gradientOpacity={0.2} className="border rounded-md h-full lg:col-span-2 p-6 aspect-square lg:aspect-auto ">
                        <div className="flex justify-between flex-col">
                            <User className="w-8 h-8 stroke-1" />
                            <div className="flex flex-col">
                                <h3 className="text-xl tracking-tight">Pay supplier invoices</h3>
                                <p className="text-muted-foreground max-w-xs text-base">
                                    Our goal is to streamline SMB trade, making it easier and faster
                                    than ever.
                                </p>
                            </div>
                        </div>
                    </MagicCard>
                </div>
            </div>
        </div>
    </div>
);

export default Features;
