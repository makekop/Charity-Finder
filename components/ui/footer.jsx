export default function Footer() {
    const titles = ["KOTI", "MEISTÄ", "FAQ"];
    return (
        <div className="flex flex-row justify-center gap-12 text-3xl m-8 font-bold">
            {titles.map((title) => (
                <p key={title}>{title}</p>
            ))}
        </div>
    );
}
