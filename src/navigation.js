import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom'

import ErrorPage from './pages/error'

const Navigation = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={ErrorPage}/>
                {/* <Route path="/register"  component={RegisterPage}/>
                <Route path="/login"  component={LoginPage}/>
                <Route path="/profile/:userid"  component={ProfilePage}/> */}
                <Route component={ErrorPage}/>
            </Switch>
        </BrowserRouter>
    )
}

export default Navigation