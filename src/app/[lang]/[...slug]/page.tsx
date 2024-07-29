import Home from "@/routes/home";

const Page = (
    { params: { lang, slug } } : { params: { lang: string, slug: string[] }}
) => {
    switch (slug[0]) {
        case "home": case "accueil":
            return (
                <Home lang={lang} />
            )
    }

    return (
        <>
            {lang}/{slug.join("/")}
        </>
    )
}

export default Page;
