import Footer from "@/components/Footer";
import { SiteHeader } from "@/components/site-header";

interface MarketingLayoutProps {
    children: React.ReactNode;
}

export default async function MarketingLayout({
    children,
}: MarketingLayoutProps) {
    return (
        <>
            <SiteHeader />
            <main className="mx-auto bg-[#020916] flex-1  ">{children}</main>
            <Footer />
        </>
    );
}
