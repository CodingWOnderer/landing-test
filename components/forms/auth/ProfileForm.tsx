"use client";
import { Button } from "@/components/ui/button";
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormMessage,
} from "@/components/ui/form";
import { zodResolver } from "@hookform/resolvers/zod";
import React from "react";
import { useDropzone, FileWithPath } from "react-dropzone";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ImageCropper } from "@/components/common/image-cropper";
// import { useProfileImageUpload } from "@/hooks/api/upload/useProfileImageUpload";
import { randomInt } from "crypto";
import { GenerateImagePath } from "@/utils/Images";
import { redirect } from "next/navigation";

export const ProfilePageSchema = z.object({
    image: z.union([
        z.custom<File>((value) => value instanceof File, {
            message: "Must be a file",
        }),
        z.string(),
    ]),
});

export type FileWithPreview = FileWithPath & {
    preview: string;
};

const UserProfileForm = () => {
    const [selectedFile, setSelectedFile] =
        React.useState<FileWithPreview | null>(null);
    const [isDialogOpen, setDialogOpen] = React.useState(false);
    // const { mutate, isPending, isSuccess, data: fdata } = useProfileImageUpload()

    const form = useForm<z.infer<typeof ProfilePageSchema>>({
        resolver: zodResolver(ProfilePageSchema),
        defaultValues: {
            image: undefined,
        },
    });



    function onSubmit(data: z.infer<typeof ProfilePageSchema>) {
        if (data.image instanceof File) {
            // mutate({ image: new File([data.image], GenerateImagePath(data.image.type)), userId: "j1g2v3j12" }, {
            //     onSuccess: (responseData) => {
            //         console.log(responseData);
            //         redirect("/")
            //     }
            // })
        }
    }

    const onDrop = React.useCallback(
        (acceptedFiles: File[]) => {
            if (acceptedFiles.length === 0) return;

            const fileWithPreview = Object.assign(acceptedFiles[0], {
                preview: URL.createObjectURL(acceptedFiles[0]),
            });

            form.setValue("image", acceptedFiles[0])
            setSelectedFile(fileWithPreview)
            setDialogOpen(true)
        },
        [form]
    );

    const { getRootProps, getInputProps, isDragActive, fileRejections } =
        useDropzone({
            onDrop,
            maxFiles: 1,
            maxSize: 1000000,
            accept: { "image/png": [], "image/jpg": [], "image/jpeg": [] },
        });
    return (
        <div className="container  pt-28 block mx-auto">
            <div className=" mx-auto max-w-sm  lg:px-2  lg:max-w-md ">
                <h2 className="text-2xl  scroll-m-10 text-foreground font-bold leading-tight tracking-tighter lg:leading-[1.1] ">
                    Upload Your Profile Picture
                </h2>


                <div className="mt-6">
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                            <FormField
                                control={form.control}
                                name={"image"}
                                render={() => (
                                    <FormItem className="mx-auto space-y-2 bg-none rounded-sm overflow-hidden ">
                                        <FormControl >
                                            <div className="flex justify-center items-center h-44 rounded">
                                                {selectedFile ? (
                                                    <ImageCropper
                                                        dialogOpen={isDialogOpen}
                                                        setDialogOpen={setDialogOpen}
                                                        selectedFile={selectedFile}
                                                        setSelectedFile={setSelectedFile}
                                                    />
                                                ) : (
                                                    <Avatar
                                                        {...getRootProps()}
                                                        className="size-36 cursor-pointer  ring-2 ring-primary"
                                                    >
                                                        <input {...getInputProps()} />
                                                        <AvatarImage
                                                            src=""
                                                            alt="@capcons"
                                                        />
                                                        <AvatarFallback className="text-5xl">+</AvatarFallback>
                                                    </Avatar>
                                                )}
                                            </div>
                                        </FormControl>
                                        <FormMessage>
                                            {fileRejections.length !== 0 && (
                                                <p>
                                                    Image must be less than 1MB and of type png, jpg, or
                                                    jpeg
                                                </p>
                                            )}
                                        </FormMessage>
                                    </FormItem>
                                )}
                            />
                            <Button
                                type="submit"
                                className="w-full   rounded-md "
                            >
                                Next
                            </Button>
                        </form>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default UserProfileForm;
