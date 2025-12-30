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

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-200 font-sans dark:bg-black">
            <Card className="w-full max-w-sm p-4">
                <CardHeader className="items-center justify-center">
                    <Image
                        src="https://mieli.fi/wp-content/uploads/2021/06/MIELI-logo-1-2460x790.png"
                        width={400}
                        height={800}
                        alt="Company Logo"
                    />
                    <CardTitle className="text-xl font-bold">
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
                <CardFooter>
                    <CardAction className="">
                        <Button>Go To Verkkosivut</Button>
                    </CardAction>
                </CardFooter>
            </Card>
        </div>
    );
}
