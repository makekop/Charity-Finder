"use client";
import CompanyCard from "@/components/ui/companycards";
import TopMenu from "@/components/ui/topmenu";
import Search from "@/components/ui/search";

export default function Home() {
    return (
        <div>
            <TopMenu />
            <Search />
            <CompanyCard />
        </div>
    );
}
