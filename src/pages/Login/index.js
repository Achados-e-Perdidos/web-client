import React from 'react';
import Auth from '../../services/auth';
import { Redirect } from "react-router-dom";


const Login = (props) => {

    return (
        !Auth.isAuthenticated() ? (
            <>
                <h1>Login</h1>
            </>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )
}

export default Login;