import React from 'react';

import {
    Link,
    useRouteMatch
} from "react-router-dom";


export default function NavBarAdmin() {
    let { url } = useRouteMatch();
    return (
        <nav>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <a className="navbar-brand" href="#">Admin Veterinaria</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                    aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav m-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" to={`${url}/ProductosAdmin`}>Productos <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${url}/VentasAdmin`}>Ventas</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${url}/ContactosAdmin`}>Contactos</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${url}/CategoriasAdmin`}>Categorias</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to={`${url}/TurnosAdmin`}>Turnos</Link>
                        </li>
                    </ul>
                    <ul className="navbar-nav ml-auto">
                        <li className="nav-item active">
                            <Link className="nav-link" href="#">Salir<span className="sr-only"></span></Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </nav>



    )
}




