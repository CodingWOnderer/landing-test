"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";

const formSchema = z.object({
    contact: z.string().min(5, {
        message: "Please enter a valid email or phone number.",
    }),
});

function ForgotPasswordForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            contact: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "OTP Sent",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }

    return (
        <div className="container pt-28 block mx-auto">
            <div className=" mx-auto  max-w-2xl  lg:px-2  lg:max-w-md ">
                <h2 className="text-3xl scroll-m-10 text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Forgot Password
                </h2>
                <p className="text-sm mt-1 text-primary cursor-pointer">Trouble with logging in?</p>
                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="contact"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" sr-only">Email or phone number</FormLabel>
                                        <FormControl className="my-0">
                                            <Input placeholder="Email or phone number" className="rounded-md  placeholder:text-xs border "  {...field} />
                                        </FormControl>
                                        <div className="h-4">
                                            <FormMessage className=" text-xs" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full rounded-md ">Send OTP</Button>
                        </form>
                    </Form>
                </div>
                <Separator asChild className="my-4 bg-transparent">
                    <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t   before:me-6 after:flex-[1_1_0%] after:border-t   after:ms-6 before:border-gray-700 after:border-gray-700">
                        Or
                    </div>
                </Separator>
                <Link href={"/login"} className="text-primary/90 hover:text-primary/80 text-sm underline">Login with different account</Link>
            </div>
        </div>
    );
}

export default ForgotPasswordForm