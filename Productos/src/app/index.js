import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarProductos from './RegistrarProductos';
import ConsultarProductos from './ConsultarProductos';

render(<Router>
    <Switch>
        <Route path="/RegistrarProductos">
            <RegistrarProductos>

            </RegistrarProductos>
        </Route>
        <Route path="/ConsultarProductos">
            <ConsultarProductos>

            </ConsultarProductos>
        </Route>
        <Route path="/">
            <RegistrarProductos>

            </RegistrarProductos>
        </Route>
    </Switch>
</Router>, document.getElementById('app'));
//router para manejar pantallas y mas interfaces