
import type { Metadata } from "next";
import AuthBento from "@/components/auth-bento";
import { CapconsLogo } from "@/components/capcons-logo";

export const metadata: Metadata = {
    title: "Capcons: Sign in to explore or create your social Circles",
    description:
        "Login to your Social Circles directly as a Creator or a member ? Create your own community for free",
};

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <div className="flex min-h-screen overflow-hidden relative bg-background text-foreground">
            <div className="w-full  relative lg:max-w-md">
                {children}
                <div className="absolute container top-4">
                    <div className="flex justify-start -ml-2">
                        <CapconsLogo className=" w-40" />
                    </div>
                </div>
            </div>
            <div className="hidden lg:block flex-1 relative">
                <AuthBento />
            </div>
        </div>
    );
}
