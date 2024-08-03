import React from 'react';

const AffiliateSection: React.FC = () => {
    return (
        <section className="pt-16 sm:pt-20 w-full max-w-4xl relative">
            <div className="flex flex-col md:flex-row items-center justify-between gap-12 sm:gap-6">
                <div className="md:w-1/2 relative">
                    <div className="rounded-lg bg-elementGray border-2 border-white aspect-[9/16] overflow-hidden h-[36rem] rotate-[2.45deg]">
                        <video
                            src="/videos/affiliate/influencer-1.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                    <div className="rounded-lg bg-elementGray border-2 border-white aspect-[9/16] overflow-hidden h-[20rem] absolute -left-32 top-16 rotate-[-7deg]">
                        <video
                            src="/videos/affiliate/influencer-1.1.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                    <div className="rounded-lg bg-elementGray border-2 border-white aspect-[9/16] overflow-hidden h-[12rem] absolute right-24 bottom-24 rotate-[5.84deg]">
                        <video
                            src="/videos/affiliate/influencer-1.2.mp4"
                            autoPlay
                            muted
                            loop
                            className="w-full h-full object-cover"
                        ></video>
                    </div>
                    <img src="/images/affiliate/2-star.svg" alt="" className="absolute top-1 -left-14" />
                    <img src="" alt="" className="absolute bottom-4 right-20" />
                </div>
                <div className="md:w-1/2 mb-8 md:mb-0">
                    <div className="flex flex-col gap-4 relative">
                        <span className="text-sm font-semibold text-blue">Join</span>
                        <h2 className="text-4xl font-semibold mb-4 tracking-[-0.07rem]">
                            <span
                                data-br=":Rhhe6:"
                                data-brr="1"
                                style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}
                            >
                                Generate your unique affiliate link
                            </span>
                        </h2>
                    </div>
                    <p className="text-lg mb-10 leading-6">
                        <span
                            data-br=":R2he6:"
                            data-brr="1"
                            style={{ display: 'inline-block', verticalAlign: 'top', textDecoration: 'inherit', textWrap: 'balance' }}
                        >
                            Apply to join the program. It only takes a minute.
                        </span>
                    </p>
                    <p className="relative z-10"></p>
                    <button className="whitespace-nowrap align-self-start relative flex flex-row gap-2.5 font-semibold justify-center items-center cursor-pointer hover:scale-[1.02] min-w-[80px] text-sm rounded-xl px-6 h-11 ease-in transition-transform bg-black text-white">
                        <span>Join now</span>
                    </button>
                </div>
            </div>
        </section>
    );
};

export default AffiliateSection;
