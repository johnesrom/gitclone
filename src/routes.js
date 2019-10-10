import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Home from './pages/Home';
import _404 from './pages/404';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>     
                <Route path="/:repo" exact component={Home} />
                <Route component={_404} />
            </Switch>
        </BrowserRouter>
    );
}