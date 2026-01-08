"use client";
import { data } from "../../app/data";
import { useState } from "react";
import CompanyCard from "./companycards";

export default function Search() {
    const [searchCompany, setSearchCompany] = useState("");

    const filteredCompanies = data.filter((company) =>
        company.companyTitle.toLowerCase().includes(searchCompany.toLowerCase())
    );

    return (
        <div className="p-8 bg-zinc-200 dark:bg-black min-h-screen">
            <input
                type="text"
                value={searchCompany}
                onChange={(e) => setSearchCompany(e.target.value)}
                placeholder="Search companies..."
                className="w-full p-3 mb-8 rounded-md border border-gray-300 dark:border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
            />

            {filteredCompanies.length === 0 && (
                <p className="text-center text-gray-500 col-span-full">
                    No companies found
                </p>
            )}

            <div className="grid gap-y-8 sm:grid-cols-2 lg:grid-cols-3">
                {filteredCompanies.map((company) => (
                    <CompanyCard key={company.companyTitle} company={company} />
                ))}
            </div>
        </div>
    );
}
