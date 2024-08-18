import { Button } from "./ui/button";

export function NewsLetter() {
    return (
        <section className="mt-16 container">
            {" "}
            <div className="relative isolate overflow-hidden px-6 py-24 sm:rounded-3xl sm:px-24 xl:py-32">
                <h2 className="mx-auto text-foreground text-center text-3xl font-bold tracking-tight sm:text-4xl">
                    The all-in-one community platform for customer-led growth
                </h2>
                <p className="mx-auto mt-2 text-center text-lg leading-8 text-gray-300">
                    Streamline your customer experience and create powerful brand-led
                    communities in minutes
                </p>
                <div className=" mt-10 w-full flex justify-center">
                    <Button size={"lg"}>Get Started</Button>
                </div>
            </div>
        </section>
    );
}
