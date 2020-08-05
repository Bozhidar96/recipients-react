import React from 'react'
import styles from './index.module.css'

const Recipient = ({ description, author}) => {

    return (
        <div className={styles["card-margin"]} >
            <div className="card">
                <div className="card-body">
                    <p className="card-text">
                    {description}
                    </p>
                    <div>
                        <span>
                            <small>Author: {author}</small>
                        </span>
                    </div>
                </div>
            </div>
            </div>
            )
}

export default Recipient