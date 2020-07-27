import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ErrorPage from './pages/error'
import RegisterPage from './pages/register'
import LoginPage from './pages/login'

const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ErrorPage}/>
                <Route path="/register"  component={RegisterPage}/>
                <Route path="/login"  component={LoginPage}/>
                <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation