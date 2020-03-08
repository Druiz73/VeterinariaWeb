import React, { useState, useEffect } from 'react';
import './ItemNav.css';


export default function ItemNav(props) {
    const [items, setItems] = useState([])

    useEffect(() => {
        getCategorias();
    }, [])

    const getCategorias = (() => (
        fetch("http://localhost:4000/categorias")
            .then(resp => resp.json())
            .then(data => {
                setItems(data)
            })
    ))



    return (

        <nav id="navbar-example3" className="position-static size col-12 col-lg-2 navbar navbar-light backNav NavItem mt-3">
            <nav className="nav flex-column">
                <h3 className="text-center text-white marginSubir">Seccion de Productos</h3>
                {items.map((element) => (
                    <button className="nav-link text-white font-weight-bold bg-primary " onClick={()=>props.oneClick(element._id)}>{element.nombre}</button>
                ))}
            </nav>
        </nav>

    )
}