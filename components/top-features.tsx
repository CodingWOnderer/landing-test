import { TopFeatures } from "@/lib/mocks";
import { Typography } from "./typography";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { GetConvertedUrl } from "@/utils/Images";

export function TopFeaturesSection() {
    return <section className="mt-16 container">
        <div className="space-y-8">
            <Typography variant={"h2"} as={"h2"} className=" text-foreground">
                Top Features
            </Typography>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {TopFeatures.map((feature, index) => (
                    <Card key={index} className=" bg-secondary rounded">
                        <CardHeader>
                            <CardTitle>
                                <div className="flex items-center mb-4 gap-4">
                                    <div className="text-4xl mr-4">
                                        <img
                                            src={GetConvertedUrl(`${feature.img}`)}
                                            className="h-12 w-12 sm:h-14 sm:w-14"
                                            alt=""
                                        />
                                    </div>
                                    <h3 className="text-lg sm:text-xl font-semibold">
                                        {feature.title}
                                    </h3>
                                </div>
                            </CardTitle>
                            <CardContent className=" px-2">{feature.text}</CardContent>
                        </CardHeader>
                    </Card>
                ))}
            </div>
        </div>
    </section>
}