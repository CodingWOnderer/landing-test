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
import { PasswordInput } from "@/components/common/password-input";


const formSchema = z.object({
    newPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
    confirmPassword: z.string().min(6, {
        message: "Password must be at least 6 characters.",
    }),
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords don't match",
    path: ["confirmPassword"],
});

export function ResetPasswordForm() {
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            newPassword: "",
            confirmPassword: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        toast({
            title: "Password Reset Successful",
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
                <h2 className="text-3xl scroll-m-10 font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Reset Password 🔑
                </h2>
                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <div className="grid"> <FormField
                                control={form.control}
                                name="newPassword"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="sr-only">New Password</FormLabel>
                                        <FormControl className="my-0">
                                            <PasswordInput
                                                className="rounded-md placeholder:text-xs" placeholder="New Password" {...field} />
                                        </FormControl>
                                        <div className="h-4">
                                            <FormMessage className=" text-xs" />
                                        </div>
                                    </FormItem>
                                )}
                            />
                                <FormField
                                    control={form.control}
                                    name="confirmPassword"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className=" sr-only">Re-enter your new password</FormLabel>
                                            <FormControl className="my-0">
                                                <PasswordInput
                                                    className="rounded-md placeholder:text-xs" placeholder="Re-enter your new password" {...field} />
                                            </FormControl>
                                            <div className="h-4">
                                                <FormMessage className=" text-xs" />
                                            </div>
                                        </FormItem>
                                    )}
                                /></div>
                            <Button type="submit" className="w-full rounded-md ">Reset</Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}
