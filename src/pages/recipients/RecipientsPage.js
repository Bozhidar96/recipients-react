import React from 'react'
import PageLayout from '../../component/page-layout/PageLayoutComponent'
// import styles from './index.module.css'
import Recipients from '../../component/recipient/RecipientComponent'
import getRecipients from '../../utils/recipients'

const RecipientsPage = () => {

    const recipient = getRecipients()

    return (
        <PageLayout>
            <div className="container">
                <div className="row"></div>
                    <div className="card-deck">
                        {
                        recipient.map(recp => {
                            return(
                                <Recipients 
                                    key={recp.author}
                                    description={recp.description}
                                    author={recp.author}
                                />
                            )
                        })
                        }
                    </div>
                    </div>
        </PageLayout>
    )
}

export default RecipientsPage