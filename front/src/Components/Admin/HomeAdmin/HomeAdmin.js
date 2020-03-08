import React from 'react';
import NavBarAdmin from '../NavbarAdmin/NavbarAdmin';
import ProductosAdmin from '../ProductosAdmin/ProductosAdmin';
import VentasAdmin from '../VentasAdmin/VentasAdmin';
import ContactosAdmin from '../ContactosAdmin/ContactosAdmin';
import CategoriasAdmin from '../CategoriasAdmin/Categorias';
import TurnosAdmin from '../TurnosAdmin/TurnosAdmin';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    useParams,
    useRouteMatch
} from "react-router-dom";


export default function HomeAdmin() {
    let { path } = useRouteMatch();
    return (

        <div>
            <NavBarAdmin />
            <Switch>
                <Route exact path={`${path}`}>
                </Route>
                <Route path={`${path}/ProductosAdmin`}>
                    <ProductosAdmin />
                </Route>
                <Route path={`${path}/VentasAdmin`}>
                    <VentasAdmin />
                </Route>
                <Route path={`${path}/ContactosAdmin`}>
                    <ContactosAdmin />
                </Route>
                <Route path={`${path}/CategoriasAdmin`}>
                    <CategoriasAdmin />
                </Route>
                <Route path={`${path}/TurnosAdmin`}>
                    <TurnosAdmin />
                </Route>
            </Switch>
        </div>

    )
}




