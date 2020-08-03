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
                <form className={styles.container}>
                    <div class="form-group">
                        <Input
                            value={email}
                            onChange={(e) => this.onChange(e, 'email')}
                            label="Email"
                            id="email"
                        />
                    </div>
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
                </form>
            </PageLayout>
        )
    }
}

export default RegisterPage

{/* <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email">
    <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password">
  </div>
  <div class="form-group form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1">
    <label class="form-check-label" for="exampleCheck1">Check me out</label>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
</form> */}