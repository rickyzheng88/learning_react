import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router-dom';
import { Main, Profile } from '../pages/Pages';
import SessionProvider from '../provider/SessionProvider';

export default function MainRoutes() {
    const { url } = useRouteMatch();
    
    return (
        <SessionProvider>
            <Switch>
                <Route 
                    exact 
                    path={url}
                    render={() => <Main/>}
                />
                <Route 
                    path={`${url}/profile`}
                    render={() => <Profile/>}
                />
            </Switch>
        </SessionProvider>
    );
}
