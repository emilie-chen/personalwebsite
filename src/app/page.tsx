import Link from "next/link";
import {insertGenericRoute} from "@/app/routing/table";

export default function Home() {
  return (
    <main className="bg-black w-screen h-screen">
        <div className={"grid grid-cols-12"}>
            <div className={"col-start-3 col-span-8 md:col-start-5 md:col-span-4 bg-white mt-60"}>
                <div className={"grid grid-cols-12 lg:mx-7 my-10"}>
                    <div className={"col-start-2 col-span-4 text-right"}>
                        <div>
                            {"Welcome to Emilie Chen's personal website"}
                        </div>
                        <div className={"mt-3"}>
                            <Link className={"bg-black text-white py-2 px-4 w-24"} href={insertGenericRoute("en", "home")}>
                                English
                            </Link>
                        </div>
                    </div>
                    <div className={"col-start-8 col-span-4"}>
                        <div>
                            {"Bienvenue sur le site personnel d'Emilie Chen"}
                        </div>
                        <div className={"mt-3"}>
                            <Link className={"bg-black text-white py-2 px-4 w-24"} href={insertGenericRoute("fr", "home")}>
                                Français
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
  );
}
