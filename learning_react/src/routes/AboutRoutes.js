import React from 'react';
import { Route, useRouteMatch } from 'react-router-dom';
import { About, Services } from '../pages/Pages';

export default function ABoutRoutes() {
    const { url } = useRouteMatch();

    return (
        <>
        <Route exact path={url}>
            <About/>
        </Route>
        <Route path={`${url}/services`}>
            <Services/>
        </Route>
        </>
    );
}