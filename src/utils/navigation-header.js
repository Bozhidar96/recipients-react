const getNavigation = () => {
    const links = [
        {
            title: "Рецепти",
            link: "/"
        },
        {
            title: "Профил",
            link: `/profile/`
        },
        {
            title: "Регистрация",
            link: "/register"
        },
        {
            title: "Влез",
            link: "/login"
        },
    ]

    return links
}

export default getNavigation