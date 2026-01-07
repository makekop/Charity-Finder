export default function TopMenu() {
    const titles = ["KOTI", "MEISTÄ", "FAQ"];
    return (
        <div className="flex items-center justify-center gap-6 text-3xl m-6 font-semibold">
            {titles.map((item) => (
                <p>{item}</p>
            ))}
        </div>
    );
}
