"use client";
import { data } from "../../app/data";
import { useState } from "react";
import CharityCard from "./charitycard";

export default function Search() {
    const [searchCharity, setSearchCharity] = useState("");

    const filteredCharities = data.filter((charity) =>
        charity.charityTitle.toLowerCase().includes(searchCharity.toLowerCase())
    );

    return (
        <div className="p-8 bg-zinc-200 dark:bg-black min-h-screen">
            <input
                type="text"
                value={searchCharity}
                onChange={(e) => setSearchCharity(e.target.value)}
                placeholder="Search companies..."
                className="w-full p-3 mb-8 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {filteredCharities.length === 0 && (
                <p className="text-center text-gray-500 col-span-full">
                    No charities found
                </p>
            )}

            <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCharities.map((charity) => (
                    <CharityCard key={charity.charityTitle} charity={charity} />
                ))}
            </div>
        </div>
    );
}
