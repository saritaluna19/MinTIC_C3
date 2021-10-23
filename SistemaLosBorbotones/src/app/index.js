import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarProductos from './RegistrarProductos';
import ConsultarProductos from './ConsultarProductos';
import RegistrarVentas from './RegistrarVentas';
import ConsultarVentas from './ConsultarVentas';
import Usuarios from './Usuarios';
import Acceso from './Acceso';

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
        <Route path="/RegistrarVentas">
            <RegistrarVentas>

            </RegistrarVentas>
        </Route>
        <Route path="/ConsultarVentas">
            <ConsultarVentas>

            </ConsultarVentas>
        </Route>
        <Route path="/Usuarios">
            <Usuarios>

            </Usuarios>
        </Route>
        <Route path="/">
            <Acceso>

            </Acceso>
        </Route>
    </Switch>
</Router>, document.getElementById('app'));
//router para manejar pantallas y mas interfaces