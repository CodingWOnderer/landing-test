"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import {
    Tooltip,
    TooltipContent,
    TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button, buttonVariants } from "@/components/ui/button";
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
import Link from "next/link";
import { Separator } from "@/components/ui/separator";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { cn } from "@/lib/utils";
import { Checkbox } from "@/components/ui/checkbox";
import { PhoneInput } from "@/components/extension/phone-input";
import { useState } from "react";

const formSchema = z.object({
    firstName: z.string().min(1, { message: "First name is required." }),
    lastName: z.string().min(1, { message: "Last name is required." }),
    emailOrMobile: z
        .string()
        .min(1, { message: "Email or mobile is required." })
        .email("Invalid email address."),
    password: z
        .string()
        .min(8, { message: "Password must be at least 8 characters." }),
    acceptProposal: z.boolean().default(false).optional(),
});

function SignUpForm() {
    const [phoneValue, setPhoneValue] = useState("");

    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            firstName: "",
            lastName: "",
            emailOrMobile: "",
            password: "",
            acceptProposal: false,
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

    const isPhone = (value: string) =>
        typeof value === "string" && /^[\+\d][\d\s]*$/.test(value);

    return (
        <div className="container h-full flex flex-col justify-center items-center pb-8 pt-14 mx-auto">
            <div className=" mx-auto max-w-2xl lg:px-2  lg:max-w-md ">
                <h2 className="text-3xl text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Create account
                </h2>
                <p className=" text-muted-foreground text-sm">
                    Not a member?{" "}
                    <Link
                        href=""
                        className="hover:underline text-sm text-accent cursor-pointer"
                    >
                        Start a 14 day free trial
                    </Link>
                </p>

                <div className="mt-4">
                    <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-4 grid"
                        >
                            <div className="grid">
                                <FormField
                                    control={form.control}
                                    name="firstName"
                                    render={({ field }) => (
                                        <FormItem className="space-y-1">
                                            <FormLabel className="space-y-0 sr-only mb-0">
                                                First Name
                                            </FormLabel>
                                            <FormControl className="my-0">

                                                <Input
                                                    className="rounded-md placeholder:text-xs "
                                                    placeholder="First Name"
                                                    {...field}
                                                />

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
                                    name="lastName"
                                    render={({ field }) => (
                                        <FormItem className=" space-y-0">
                                            <FormLabel className="sr-only">Last Name</FormLabel>
                                            <FormControl>
                                                <Input
                                                    className="rounded-md placeholder:text-xs "
                                                    placeholder="Last Name"
                                                    {...field}
                                                />
                                            </FormControl>
                                            <div className="h-4 pt-0.5 ">
                                                {" "}
                                                <FormMessage className=" text-xs" />
                                            </div>
                                        </FormItem>
                                    )}
                                />
                                <FormField
                                    control={form.control}
                                    name="emailOrMobile"
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormLabel className="sr-only">Email or Mobile</FormLabel>
                                            <FormControl>
                                                {isPhone(field.value) ? (
                                                    <PhoneInput
                                                        {...field}
                                                        value={field.value}
                                                        onChange={(e) => field.onChange(e)}
                                                        defaultCountry="IN"
                                                    />
                                                ) : (
                                                    <Input
                                                        className="rounded-md placeholder:text-xs "
                                                        placeholder="Email or Mobile"
                                                        {...field}
                                                    />
                                                )}

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
                                        <FormItem className=" space-y-0">
                                            <FormLabel className="sr-only">Password</FormLabel>
                                            <FormControl>
                                                <Input
                                                    type="password"
                                                    className="rounded-md placeholder:text-xs"
                                                    placeholder="Password"
                                                    {...field}
                                                />
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
                                name="acceptProposal"
                                render={({ field }) => (
                                    <FormItem className="flex flex-row items-start space-x-2 space-y-0">
                                        <FormControl>
                                            <Checkbox
                                                checked={field.value}
                                                onCheckedChange={field.onChange}
                                            />
                                        </FormControl>
                                        <p className="text-xs leading-4 max-w-md mx-auto font-normal  text-muted-foreground">
                                            By submitting this form, you agree to receive recurring
                                            automated promotional and personalized marketing text
                                            messages (e.g. cart reminders) from us at the cell number
                                            used when signing up. Consent is not a condition of any
                                            purchase. Reply <span className="text-primary">HELP</span>{" "}
                                            for help and <span className="text-primary">STOP</span> to
                                            cancel. Msg frequency varies. Msg and data rates may
                                            apply. View{" "}
                                            <Link
                                                href="/terms"
                                                className="underline underline-offset-4 hover:text-primary"
                                            >
                                                Terms
                                            </Link>{" "}
                                            &{" "}
                                            <Link
                                                href="/privacy"
                                                className="underline underline-offset-4 hover:text-primary"
                                            >
                                                Privacy
                                            </Link>{" "}
                                            {/* and{" "}
                                <Link
                                    href="/privacy"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Cookies Policy
                                </Link> */}
                                        </p>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <Button
                                className="w-full rounded-md "
                                type="submit"
                            >
                                Create account
                            </Button>
                            <p className="text-muted-foreground text-sm max-w-sm mx-auto mt-5 text-center">
                                Already have an Account?{" "}
                                <Link
                                    href="/login"
                                    className="underline underline-offset-4 hover:text-primary"
                                >
                                    Sign In
                                </Link>
                            </p>
                        </form>
                    </Form>
                </div>

                <Separator asChild className="my-4 bg-transparent">
                    <div className="py-3 flex items-center text-xs text-muted-foreground uppercase before:flex-[1_1_0%] before:border-t   before:me-6 after:flex-[1_1_0%] after:border-t   after:ms-6 before:border-gray-700 after:border-gray-700">
                        Or
                    </div>
                </Separator>

                <div className="flex items-center space-x-3 justify-center">
                    <Tooltip>
                        <TooltipTrigger
                            className={cn(
                                buttonVariants({ size: "icon" }),
                                "cursor-pointer bg-transparent flex justify-center items-center hover:bg-transparent rounded-full"
                            )}
                        >
                            <FcGoogle size={44} />
                        </TooltipTrigger>
                        <TooltipContent className="bg-black text-gray-50 border-none text-xs p-1 px-2">
                            <p>Connect with Google </p>
                        </TooltipContent>
                    </Tooltip>
                    <Tooltip>
                        <TooltipTrigger
                            className={cn(
                                buttonVariants({ size: "icon" }),
                                "border rounded-full cursor-pointer flex justify-center items-center hover:text-black hover:bg-white bg-white text-black   "
                            )}
                        >
                            <FaApple size="24" />
                        </TooltipTrigger>
                        <TooltipContent className="bg-black text-gray-50 border-none text-xs p-1 px-2">
                            <p>connect with Apple</p>
                        </TooltipContent>
                    </Tooltip>
                </div>

                {/* <div className="flex mt-6 justify-center">
                    <Link
                        href={"/"}
                        className="  text-gray-700 text-sm cursor-pointer hover:underline underline-offset-2"
                    >
                        Terms and Conditions
                    </Link>
                </div> */}
            </div>
        </div>
    );
}

export default SignUpForm;
