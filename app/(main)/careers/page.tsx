import { CapconsCareerSection } from "@/components/capcons-career-job";
import { JoinCapConsSection } from "@/components/capcons-description";
import { FeaturedJobSection } from "@/components/deatured-job-section";
import { GetConvertedUrl } from "@/utils/Images";
import React from "react";

const CareerPage = () => {
    return (
        <div className="dark">
            <section
                style={{ backgroundImage: `url(${GetConvertedUrl("Landing.webp")})` }}
                className={`relative pt-14 w-full bg-no-repeat bg-center bg-cover `}
            >
                <div className=" container">
                    <div className="max-w-xl space-y-5  text-center py-24 flex flex-col justify-center lg:h-[85vh]">
                        <h2 className="text-3xl animate-fade-in  text-start text-foreground font-bold  md:text-4xl">
                            Where{" "}
                            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#1693e0]">
                                Passion Meets
                            </span>{" "}
                            Profession: Find Your Fit!
                        </h2>
                        <p className="max-w-sm animate-fade-in [--animation-delay:200ms]  text-start text-muted-foreground">
                            Step into a world of new possibilities and unlock new horizons
                            with our company. Start your career journey today and experience
                            growth, success, and fulfillment in an environment that values
                            your contributions
                        </p>
                    </div>
                </div>
                <div className=" h-28 lg:h-52 bottom-0 left-0 right-0 absolute bg-gradient-to-t from-background  to-transparent "></div>
            </section>

            {/** Capcons description */}

            <JoinCapConsSection />

            {/** work in Capcons reason 1 */}

            <CapconsCareerSection />

            <FeaturedJobSection />
        </div>
    );
};

export default CareerPage;
