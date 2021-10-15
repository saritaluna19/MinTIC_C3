import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import RegistrarVentas from './RegistrarVentas';
import ConsultarVentas from './ConsultarVentas';

render(<Router>
    <Switch>
        <Route path="/RegistrarVentas">
            <RegistrarVentas>

            </RegistrarVentas>
        </Route>
        <Route path="/ConsultarVentas">
            <ConsultarVentas>

            </ConsultarVentas>
        </Route>
    </Switch>
</Router>, document.getElementById('app'));
//router para manejar pantallas y mas interfaces
