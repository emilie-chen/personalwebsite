const genTableEntry = (name: string, routeEn: string, routeFr: string): any => {
    return [
        name,
        {
            links: new Map([
                ["en", routeEn],
                ["fr", routeFr]
            ])
        }
    ]
}

export const routingTable = new Map<string, any>([
    genTableEntry("home", "/en/home", "/fr/accueil"),
    genTableEntry("experience", "/en/experience", "/fr/experience"),
    genTableEntry("contact", "/en/about/contact", "/fr/a-propos/contact"),
])

export const insertGenericRoute = (lang: string, routeName: string) => {
    const route = routingTable.get(routeName);
    if (route) {
        return route.links.get(lang);
    }

    return "/404";
}

export const resolveRouteInOppositeLang = (lang: string, currentSlugs: string[]) => {
    const targetLang = lang === "en" ? "fr" : "en";
    const currentRoute = "/" + lang + "/" + currentSlugs.join("/");
    const routeName = Array.from(routingTable.entries()).find(([key, value]) => {
        return value.links.get(lang) === currentRoute;
    });
    return insertGenericRoute(targetLang, routeName ? routeName[0] : "404");
}

