import React from 'react'
// import styles from './index.module.css'

const Recipient = ({ description, author}) => {

    return (
            <div className="card">
                <img className="card-img-top"  alt="Card image cap"></img>
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
            )
}

export default Recipient