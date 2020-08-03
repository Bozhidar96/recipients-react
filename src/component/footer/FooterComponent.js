import React from 'react'
import Link from '../link/LinkComponent'
import styles from './index.module.css'
import getNavigation from '../../utils/navigation-header'

const Footer = () => {
    const links = getNavigation()
    return (
        <footer className={styles.footer}>
            <div>
                {
                    links.map(navElement => {
                        return (
                            <Link
                                key={navElement.title}
                                href={navElement.link}
                                title={navElement.title}
                                type="footer"
                            />
                        )
                    })
                }
            </div>
            <p className={styles.university}>Created by Bozhidr Rusev</p>
        </footer>
    )
}

export default Footer