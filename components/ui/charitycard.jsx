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

export default function CharityCard({ charity }) {
    if (!charity) return null;

    return (
        <Card className="h-full flex flex-col rounded-2xl p-8 bg-white m-4 md:transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-gray-100">
            <CardHeader className="flex flex-col items-center">
                <Image
                    src={charity.charityLogo}
                    width={200}
                    height={200}
                    alt={`${charity.charityTitle} Logo`}
                    className="object-contain w-80 h-40 mx-auto"
                />
                <CardTitle className="font-bold mt-2 text-xl ">
                    {charity.charityTitle}
                </CardTitle>
            </CardHeader>

            <CardContent className="text-start mt-4 mb-4">
                {charity.about}
            </CardContent>

            <CardFooter className="mt-auto">
                <CardAction className="grid grid-cols-2 gap-4 mt-auto">
                    <Button asChild>
                        <Link target="_blank" href={charity.websiteURL}>
                            Verkkosivut
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link target="_blank" href={charity.donateURL}>
                            Lahjoita
                        </Link>
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}
