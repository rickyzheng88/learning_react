import React from 'react';
import { Switch, useRouteMatch } from 'react-router-dom';
import useSession from '../hooks/useSession';
import { Main, Profile } from '../pages/Pages';
import ProtectedRoute from '../routes/ProtectedRoute';

export default function MainRoutes() {
    const { url } = useRouteMatch();
    const { isAuthenticated } = useSession();
    
    return (
        
            <Switch>
                <ProtectedRoute 
                    exact 
                    path={url}
                    component={Main}
                    authenticated={isAuthenticated}
                    redirect='/login'
                />
                <ProtectedRoute 
                    exact 
                    path={`${url}/profile`}
                    component={Profile}
                    authenticated={isAuthenticated}
                    redirect='/login'
                />
            </Switch>
    );
}
