import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from "react-router-dom";
import Auth from '../services/auth'

import Error from '../pages/Error';
import Login from '../pages/Login';
import Register from '../pages/Register';
import Home from '../pages/Home';
import ItemDetails from '../pages/ItemDetails';
import ItemRegister from '../pages/ItemRegister';


const PrivateRoute = ({component: Component, ...rest}) => (
    <Route {...rest} render={props => (
        Auth.isAuthenticated() ? (
            <Component {...props} />
        ) : (
            <Redirect to={{pathname: '/login', state: {from: props.location}}} />
        )
    )} />
)

export default function Routes() {
    return (
      <BrowserRouter>
        <Switch>
            <PrivateRoute exact path='/teste' component={Home}/>
            <Route exact path='/' component={Home}/>
            <Route exact path='/item/detail' component={ItemDetails}/>
            <Route exact path='/item/register' component={ItemRegister}/>
            <Route exact path='/login' component={Login}/>
            <Route exact path='/register' component={Register}/>
            <Route exact path='*' component={Error}/>
        </Switch>
      </BrowserRouter>
    );
  }