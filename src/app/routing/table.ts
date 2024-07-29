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
])

export const insertGenericRoute = (lang: string, routeName: string) => {
    const route = routingTable.get(routeName);
    if (route) {
        return route.links.get(lang);
    }

    return "/404";
}

