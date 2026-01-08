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

export default function CompanyCard({ company }) {
    if (!company) return null;

    return (
        <Card className="h-full flex flex-col rounded-2xl p-8 bg-white m-4 md:transition-transform duration-300 ease-in-out hover:-translate-y-1 hover:scale-102 hover:bg-gray-100">
            <CardHeader className="flex flex-col items-center">
                <Image
                    src={company.companyLogo}
                    width={200}
                    height={200}
                    alt={`${company.companyTitle} Logo`}
                    className="object-contain w-80 h-40 mx-auto"
                />
                <CardTitle className="font-bold mt-2 text-xl ">
                    {company.companyTitle}
                </CardTitle>
            </CardHeader>

            <CardContent className="text-start mt-4 mb-4">
                {company.about}
            </CardContent>

            <CardFooter className="mt-auto">
                <CardAction className="grid grid-cols-2 gap-4 mt-auto">
                    <Button asChild>
                        <Link target="_blank" href={company.websiteURL}>
                            Verkkosivut
                        </Link>
                    </Button>
                    <Button asChild>
                        <Link target="_blank" href={company.donateURL}>
                            Lahjoita
                        </Link>
                    </Button>
                </CardAction>
            </CardFooter>
        </Card>
    );
}
