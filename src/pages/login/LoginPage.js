import React , { Component } from 'react' 
import SubmitButton from '../../component/button/submit/SubmitButtonComponent'
import styles from './index.module.css'
import PageLayout from '../../component/page-layout/PageLayoutComponent'
import Input from '../../component/input/InputComponent'

class LoginPage extends Component {
    constructor(props) {
        super(props) 

        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (event, type) => {
        const newState = {}
        newState[type] = event.target.value
    }

    render() {
        const { email , password } = this.state
        return (
            <PageLayout>
                <div className={styles.container}>
                    <Input 
                        value = {email}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Email"
                        id="email"
                    />
                     <Input 
                        value = {password}
                        onChange={(e) => this.onChange(e, 'email')}
                        label="Password"
                        id="password"
                    />
                    <SubmitButton title="Login"/>
                </div>
            </PageLayout>
        )
    }
}

export default LoginPage