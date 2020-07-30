import React, { Component } from 'react'
import PageLayout from '../../component/page-layout/PageLayoutComponent'
import styles from './index.module.css'
import Input from '../../component/input/InputComponent'
import SubmitButton from '../../component/button/submit/SubmitButtonComponent'

class RegisterPage extends Component { 
    constructor(props) {
        super(props)

        this.state = {
            email: "",
            password: "",
            rePassword: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value

        this.setState(newState)
    }

    render() {
        const { email , password, rePassword } = this.state

        return (
            <PageLayout>
                <div className={styles.container}>
                    <Input
                        value={email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                    />
                     <Input
                        value={password}
                        onChange={(e) => this.onChange(e, 'password')}
                        label="password"
                        id="password"
                    />
                     <Input
                        value={rePassword}
                        onChange={(e) => this.onChange(e, 'rePassword')}
                        label="rePassword"
                        id="rePassword"
                    />
                    <SubmitButton title="Register" />
                </div>
            </PageLayout>
        )
    }
}

export default RegisterPage