import CompanyCard from "../companycards";

export default function Map({
    companyLogo,
    companyTitle,
    websiteURL,
    donateURL,
    about,
}) {
    return (
        <div>
            <div>
                <CompanyCard
                    companyLogo={companyLogo}
                    companyTitle={companyTitle}
                    websiteURL={websiteURL}
                    donateURL={donateURL}
                    about={about}
                />
            </div>
        </div>
    );
}
