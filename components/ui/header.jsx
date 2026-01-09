import Link from "next/link";

export default function Header() {
    const navData = [
        {
            title: "HOME",
            link: "/",
        },
        {
            title: "MEISTÄ",
            link: "/about",
        },
        {
            title: "FAQ",
            link: "/FAQ",
        },
    ];

    return (
        <div className="flex flex-row items-center justify-center gap-12 text-3xl m-8 font-bold">
            {navData.map((title) => (
                <Link key={title.title} href={title.link}>
                    {title.title}
                </Link>
            ))}
        </div>
    );
}
