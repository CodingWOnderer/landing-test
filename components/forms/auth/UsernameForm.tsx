"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
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
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { PhoneInput } from "@/components/extension/phone-input";
import { useRouter } from "next/navigation";

// Define the form schema using zod
const formSchema = z.object({
    username: z
        .string()
        .min(3, { message: "Username must be at least 3 characters." }),
    firstName: z.string().min(1, { message: "First Name is required." }),
    countryCode: z.string().min(1, { message: "Country code is required." }),
    description: z
        .string()
        .max(50, { message: "Description must be at most 50 words." }),
});

export function CreateUsernameForm() {
    const router = useRouter();
    const form = useForm({
        resolver: zodResolver(formSchema),
        defaultValues: {
            username: "",
            firstName: "",
            countryCode: "",
            description: "",
        },
    });

    function onSubmit(data: z.infer<typeof formSchema>) {
        const isAvailable = formSchema.parse(data);

        if (isAvailable) {
            router.push("/");
        }
    }

    return (
        <div className="container  pt-28 block mx-auto">
            <div className=" mx-auto max-w-sm  lg:px-2  lg:max-w-md ">
                <h2 className="text-2xl  scroll-m-10 text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Create Username
                </h2>
                <p className="dark:text-neutral-400 text-neutral-800 text-sm">
                    Create your unique username
                </p>

                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name="username"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="sr-only">Username</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="rounded-md placeholder:text-xs"
                                                placeholder="Eg. 'Vivid life quality'"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="sr-only">First Name</FormLabel>
                                        <FormControl>
                                            <Input
                                                className="rounded-md placeholder:text-xs"
                                                placeholder="First Name"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />

                            <FormField
                                control={form.control}
                                name="countryCode"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="sr-only">Country Code</FormLabel>
                                        <FormControl>
                                            <PhoneInput
                                                {...field}
                                                onChange={(e) => {
                                                    field.onChange(e);
                                                }}
                                            />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="description"
                                render={({ field }) => (
                                    <FormItem className="space-y-1">
                                        <FormLabel className="sr-only">Description</FormLabel>
                                        <FormControl>
                                            <Textarea
                                                className="rounded-md max-h-60 placeholder:text-xs"
                                                placeholder="Describe yourself!"
                                                {...field}
                                            />
                                        </FormControl>
                                        <FormDescription>max. 50 words</FormDescription>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <Button type="submit" className="w-full rounded-md ">
                                Next
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default CreateUsernameForm;
