import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function PrivateRoute({ component: Component, authenticated, redirect, ...rest }) {
    return (
        <Route
            {...rest}
            render={ props => (authenticated ? <Redirect to={redirect}/> : <Component {...props}/>) }
        />
    )
}
