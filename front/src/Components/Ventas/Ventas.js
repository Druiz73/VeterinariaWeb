import React, { useState, useEffect } from 'react';
import './Ventas.css';
import ItemNav from '../ItemNav/ItemNav';
import { Link, useParams } from 'react-router-dom';
import config from '../../config/config';


export default function Ventas(props) {
    const [items, setItems] = useState({
        productos: [],
        categorias: [],
        productosFiltrados: []
    });

    useEffect(() => {
        getProductos();
        getCategorias();

    }, [])


    const getCategorias = (() => (
        fetch(`${config.apiUrl}/categorias`)
            .then(resp => resp.json())
            .then(data => {
                setItems({
                    ...items,
                    categorias: data
                })

                getProductos();

            })
    ))

    const getProductos = (() => (
        fetch(`${config.apiUrl}/producto`)
            .then(resp => resp.json())
            .then(data => {
                setItems({
                    ...items,
                    productos: data
                })
            })
    ))

    function handleClick(id) {
        fetch(`${config.apiUrl}/producto/${id}`)
            .then(resp => resp.json())
            .then(data => {

                setItems({
                    ...items,
                    productos: data
                })
            })
    }

    return (
        <div className="container-fluid cien2">
            <div className="row">
                <ItemNav className="col-3" oneClick={(id) => handleClick(id)} />
                <div className="col-9 border-0">
                    <div className="container">
                        <div data-spy="scroll" data-target="#navbar-example3" className="mb-3 col-12 col-md-6 col-lg-12" data-offset="0">
                            <div className="row">
                                {items.productos.map((element) => (
                                    <div className="card m-1 mb-3 mt-3 mr-3 col-12 col-lg-3 item-border cards" id={element.category}>
                                        <div className="row no-gutters">
                                            <img className="img-sale mx-auto" src={element.imageUrl['0'].base64} />
                                            <div class="col-md-12">
                                                <div class="card-body">
                                                    <h3 class="card-title text-center">{element.detalle}</h3>
                                                    <p class="card-text text-center">La mejor marca al mejor precio</p>
                                                    <p class="card-text text-center"><small class="text-muted">${element.precio}</small></p>
                                                    <div className="text-center">
                                                        <Link to={`/productPage/${element._id}`} name="articulos" type="button" class="btn btn-raised btn-warning">Agregar al carrito</Link>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

}