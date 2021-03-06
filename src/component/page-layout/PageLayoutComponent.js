import React from 'react'
import Header from '../header/HeaderComponent'
import styles from './index.module.css'
import Footer from '../footer/FooterComponent'

const PageLayout = (props) => {
    return (
        <div className={styles.app}>
            <Header />
            <div className={styles.container}>
                <div>
                    {props.children}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default PageLayout