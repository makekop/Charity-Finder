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

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-200 font-sans dark:bg-black">
            <Card className="w-full max-w-sm shadow-lg bg-white p-8 transition delay-100 duration-200 ease-in-out hover:-translate-y-1 hover:scale-105 hover:shadow-xl">
                <CardHeader className="items-center justify-center">
                    <Image
                        src="https://mieli.fi/wp-content/uploads/2021/06/MIELI-logo-1-2460x790.png"
                        width={400}
                        height={800}
                        alt="Company Logo"
                    />
                    <CardTitle className="text-xl font-bold justify-items-start">
                        Mieli Ry
                    </CardTitle>
                </CardHeader>
                <CardContent className="text-wrap">
                    MIELI Suomen Mielenterveys ry:n perustehtävä on
                    mielenterveyden edistäminen ja ongelmien ehkäisy.
                    Puolustamme kaikkien yhtäläistä oikeutta hyvään
                    mielenterveyteen. MIELI ry on maailman vanhin
                    mielenterveysalan kansalaisjärjestö.
                </CardContent>
                <CardFooter className="">
                    <CardAction className="grid grid-cols-2 gap-4 md:auto-cols-min">
                        <Button>
                            <Link
                                target="_blanK"
                                href="https://mielilahjoitus.fi/"
                            >
                                Verkkosivut
                            </Link>
                        </Button>
                        <Button>
                            <Link target="_blank" href="https://mieli.fi/">
                                Lahjoita
                            </Link>
                        </Button>
                    </CardAction>
                </CardFooter>
            </Card>
        </div>
    );
}
