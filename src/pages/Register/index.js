import React from 'react';
import Auth from '../../services/auth';
import { Redirect } from "react-router-dom";

const Register = (props) => {

    return (
        !Auth.isAuthenticated() ? (
            <>
                <h1>Registro</h1>
            </>
        ) : (
            <Redirect to={{pathname: '/', state: {from: props.location}}} />
        )
    )
}

export default Register;