import React from 'react'
import styled from '../index.module.css'

const SubmitButton = ({title}) => {
    return(
        <button className={styled['submit-button']}>{title}</button>
    )
}

export default SubmitButton