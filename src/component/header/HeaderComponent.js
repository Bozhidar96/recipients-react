import React, { Component } from 'react'
import Link from '../link/LinkComponent'
import styles from './index.module.css'
// import logo from '../../images/'
import getNavigation from '../../utils/navigation-header'

class Header extends Component {

    render () {
        const links = getNavigation(styles.navigation)

        return (
            <header className={styles.navigation}>
                {
                    links.map(navElement => { 
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="header"
                            />
                        )
                    })
                }
            </header>
        )
    }
}

export default Header