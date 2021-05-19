import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export default function ProtectedRoute({ component: Component, authenticated, redirect, ...rest }) {
    return (
        <Route
            {...rest}
            render={ props => (authenticated ? <Component {...props}/> : <Redirect to={redirect}/>) }
        />
    )
}
