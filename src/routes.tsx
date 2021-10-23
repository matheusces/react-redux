import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import { CreateEmploye } from './pages/CreateEmploye';
import { Employes } from './pages/Employes';
import { Login } from './pages/Login';

export const Routes = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/" component={Login} />
                <Route path="/list-employes" component={Employes} />
                <Route path="/create-employe" component={CreateEmploye} />
            </Switch>
        </BrowserRouter>
    );
}