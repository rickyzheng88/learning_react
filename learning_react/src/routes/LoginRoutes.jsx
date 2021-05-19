import React from 'react';
import { Redirect, Route, useRouteMatch } from 'react-router-dom';
import useSession from '../hooks/useSession';
import { Login, getUserSession } from '../pages/Pages';
import PrivateRoute from '../routes/PrivateRoute';

export default function LoginRoutes() {
    const { url } = useRouteMatch();
    const { isAuthenticated } = useSession();

    return (
        <PrivateRoute
            path={url}
            component={Login}
            redirect='/main'
            authenticated={isAuthenticated}
        />
    );
}
