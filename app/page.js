import CompanyCard from "@/components/companycards";
import Map from "@/components/ui/map";

export default function Home() {
    return (
        <div className="flex min-h-screen items-center justify-center bg-zinc-200 font-sans dark:bg-black">
            <CompanyCard />
        </div>
    );
}
