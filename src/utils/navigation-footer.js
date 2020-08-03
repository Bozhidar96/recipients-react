const getNavigation = () => {
    const links = [
        {
            title: "Рецепти",
            link: "/"
        },
        {
            title: "Контакти",
            link: `/contact`
        },
        {
            title: "Права за поверителност",
            link: "/register"
        },
    ]

    return links
}

export default getNavigation