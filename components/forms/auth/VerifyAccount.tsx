"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormDescription,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from "@/components/ui/form";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { toast } from "@/components/ui/use-toast";
import Link from "next/link";

const FormSchema = z.object({
    pin: z.string().min(6, {
        message: "Your one-time password must be 6 characters.",
    }),
});

function VerifyAccountForm() {
    const form = useForm<z.infer<typeof FormSchema>>({
        resolver: zodResolver(FormSchema),
        defaultValues: {
            pin: "",
        },
    });

    function onSubmit(data: z.infer<typeof FormSchema>) {
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
        <div className="container pt-28 block mx-auto">
            <div className=" mx-auto  max-w-2xl  lg:max-w-sm ">
                <h2 className="text-3xl scroll-m-10 text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    OTP Verification 🔑
                </h2>
                <p className=" text-muted-foreground text-sm mt-1">
                    Enter your 6 digit code sent to********82
                </p>
                <Link href={"/forgetpass"} className=" text-primary underline text-sm mt-2">Edit your number</Link>
                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="pin"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className=" text-card-foreground sr-only">
                                            One-Time Password
                                        </FormLabel>
                                        <FormControl>
                                            <InputOTP maxLength={6} {...field}>
                                                <InputOTPGroup className=" w-full h-12 ">
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={0}
                                                    />
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={1}
                                                    />
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={2}
                                                    />
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={3}
                                                    />
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={4}
                                                    />
                                                    <InputOTPSlot
                                                        className="flex-1 h-full"
                                                        index={5}
                                                    />
                                                </InputOTPGroup>
                                            </InputOTP>
                                        </FormControl>
                                        <FormDescription>
                                            Didn’t get a code?{" "}
                                            <Button className="pl-0" variant={"link"}>
                                                <Link href={"/signup"}>Resend</Link>
                                            </Button>
                                        </FormDescription>
                                        <div className="h-4">
                                            <FormMessage className=" text-xs" />
                                        </div>
                                    </FormItem>
                                )}
                            />

                            <Button
                                type="submit"
                                className="w-full  rounded-md "
                            >
                                Verify
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default VerifyAccountForm;
