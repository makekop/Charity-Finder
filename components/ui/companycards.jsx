import { data } from "../../app/data";
import {
    Card,
    CardTitle,
    CardAction,
    CardHeader,
    CardContent,
    CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CompanyCard() {
    return (
        <div className="grid gap-y-8 gap-x-0 sm:grid-cols-2 lg:grid-cols-3 bg-zinc-200 font-sans dark:bg-black p-20">
            {data.map((item) => (
                <div key={item.companyTitle}>
                    <Card className="h-full flex flex-col rounded-2xl p-8 bg-white m-4 transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-gray-100">
                        <CardHeader className="flex flex-col items-center">
                            <Image
                                src={item.companyLogo}
                                width={200}
                                height={200}
                                alt="Company Logo"
                                className="object-contain w-80 h-40 object-center mx-auto"
                            />
                            <CardTitle className="font-bold justify-items-start mt-2 text-xl">
                                {item.companyTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-start mt-4 mb-4">
                            {item.about}
                        </CardContent>
                        <CardFooter className="mt-auto">
                            <CardAction className="grid grid-cols-2 bottom-0 gap-4 mt-auto">
                                <Button>
                                    <Link
                                        target="_blanK"
                                        href={item.websiteURL}
                                    >
                                        Verkkosivut
                                    </Link>
                                </Button>
                                <Button>
                                    <Link target="_blank" href={item.donateURL}>
                                        Lahjoita
                                    </Link>
                                </Button>
                            </CardAction>
                        </CardFooter>
                    </Card>
                </div>
            ))}
        </div>
    );
}
