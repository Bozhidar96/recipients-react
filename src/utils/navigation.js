const getNavigation = () => {
    const links = [
        {
            title: "Recipients",
            link: "/"
        },
        {
            title: "Profile",
            link: `/profile/`
        },
        {
            title: "Register",
            link: "/register"
        },
        {
            title: "Login",
            link: "/login"
        },
    ]

    return links
}

export default getNavigation