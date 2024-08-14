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
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";
import { PhoneInput } from "@/components/extension/phone-input";

const formSchema = z.object({
    mobile: z.string().min(10, {
        message: "Mobile number must be at least 10 characters.",
    }),
    password: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    rememberMe: z.boolean(),
});

export function LoginForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            mobile: "",
            password: "",
            rememberMe: false,
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "You submitted the following values:",
            description: (
                <pre className="mt-2 w-[340px] rounded-md bg-slate-950 p-4">
                    <code className="text-white">{JSON.stringify(data, null, 2)}</code>
                </pre>
            ),
        });
    }



    return (
        <div className="container relative  pt-28 block mx-auto">
            <div className="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
            <div className=" mx-auto relative  max-w-sm  lg:px-2  lg:max-w-md ">
                <h2 className="text-3xl scroll-m-10 text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Welcome Back 👏
                </h2>
                <p className="text-neutral-400 text-sm mt-1">
                    Login with your account
                </p>

                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid">
                                <FormField
                                    control={form.control}
                                    name="mobile"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className="sr-only">Mobile</FormLabel>
                                            <FormControl className="my-0">
                                                <PhoneInput  {...field} onChange={(e) => { console.log(e); field.onChange(e) }} />
                                            </FormControl>
                                            <div className="h-4">
                                                {" "}
                                                <FormMessage className=" text-xs" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="password"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="sr-only">Password</FormLabel>
                                            <FormControl>
                                                <Input type="password"
                                                    className="rounded-md placeholder:text-xs"
                                                    placeholder="Password" {...field} />
                                            </FormControl>
                                            <div className="h-4">
                                                {" "}
                                                <FormMessage className=" text-xs" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                            </div>
                            <FormField
                                control={form.control}
                                name="rememberMe"
                                render={({ field }) => (
                                    <FormItem>
                                        <div className="flex items-center justify-between">
                                            <div className="flex items-center">
                                                <Checkbox
                                                    checked={field.value}
                                                    onCheckedChange={(e) => field.onChange(e)}
                                                    id="rememberMe"
                                                />
                                                <FormLabel htmlFor="rememberMe" className="ml-2 text-muted-foreground">
                                                    Remember Me
                                                </FormLabel>
                                            </div>
                                            <a
                                                href="/forgot-password"
                                                className="text-sm text-primary hover:underline"
                                            >
                                                Forgot Password?
                                            </a>
                                        </div>
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full rounded-md ">Login</Button>
                            <div className="text-center text-sm text-muted-foreground">
                                {`Don't have an account?`}{" "}
                                <a href="/signup" className=" text-primary hover:underline">
                                    Sign Up here
                                </a>
                            </div>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
