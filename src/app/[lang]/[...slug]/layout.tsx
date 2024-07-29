import Link from "next/link";
import {insertGenericRoute, resolveRouteInOppositeLang} from "@/app/routing/table";

const Layout = ({ children, params: {
    lang,
    slug
} }: {
    children: React.ReactNode;
    params: { lang: string, slug: string[] }
}) => {
    return (
        <>
            <nav className="nav bg-black text-white">
                <div className="container py-5 px-9">
                    <div className="">
                        <ul className="flex space-x-5 justify-between">
                            <li>
                                <div className={"flex space-x-5"}>
                                    <Link href={insertGenericRoute(lang, "home")}>{
                                        lang === "en" ? "Home" : "Accueil"
                                    }</Link>
                                    <Link href={insertGenericRoute(lang, "experience")}>{
                                        lang === "en" ? "Experience" : "Expérience"
                                    }</Link>
                                    <Link href={insertGenericRoute(lang, "about")}>{
                                        lang === "en" ? "About" : "À propos"
                                    }</Link>
                                </div>
                            </li>
                            <li>
                                <Link href={resolveRouteInOppositeLang(lang, slug)}>{lang === "en" ? "Français" : "English"}</Link>
                            </li>
                        </ul>
                    </div>

                </div>
            </nav>
            {children}
        </>
    );
}

export default Layout;

