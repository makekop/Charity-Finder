"use client";
import { useState } from "react";
import { data } from "../app/data";
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

export default function CompanyCard({
    companyTitle,
    companyLogo,
    websiteURL,
    donateURL,
    about,
}) {
    const [companies, setCompanies] = useState(data);

    return (
        <div>
            {data.map((item) => (
                <div key={item.companyTitle}>
                    <Card className="w-full max-w-sm shadow-lg bg-white p-8 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                        <CardHeader className="">
                            <Image
                                src={item.companyLogo}
                                width={400}
                                height={400}
                                alt="Company Logo"
                            />
                            <CardTitle className="text-xl font-bold justify-items-start">
                                {item.companyTitle}
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="text-wrap">
                            {item.about}
                        </CardContent>
                        <CardFooter>
                            <CardAction className="grid grid-cols-2 gap-4 md:auto-cols-min">
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
