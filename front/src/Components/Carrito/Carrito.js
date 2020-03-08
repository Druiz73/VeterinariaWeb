import React, { useState, useEffect } from 'react';
import { Link, Redirect } from "react-router-dom";
import './Carrito.css';
import config from '../../config/config';

export default function Carrito(props) {
    const [art, setArt] = useState(props.article);
    const [redirect, setRedirect] = useState();

    function eliminar(index) {
        let art2 = art.slice();
        art2.splice(index, 1);
        setArt(art2);
        localStorage.setItem('articulos', JSON.stringify(art2));
        props.setear(art2.length)
    }

    function compra() {
        mercadoPago();
        guardarCompra();
    }

    function guardarCompra() {
        fetch(`${config.apiUrl}/sales`, {
            method: "POST",
            body: JSON.stringify({
                products: art
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => console.log(data))
            .catch(err => console.error(err, "error"));

        art.splice(art);
        setArt(art);
        localStorage.setItem('articulos', JSON.stringify(art));
        props.setear(art.length)

    }

    useEffect(() => {
      curl();
    }, [])

    function curl() {
        fetch(`https://api.mercadopago.com/users/test_user?access_token=PROD_ACCESS_TOKEN`, {
            method: "POST",
            body: JSON.stringify({
                "site_id": "MLA" 
            }),
            headers: {
          
                'Content-Type': 'application/json'
        }
    })
        .then(res => res.json())
        .then(data => {
            console.log("test: ", data)
        })
    }

    async function mercadoPago() {

        fetch(`${config.apiUrl}/mercado-pago`, {
            method: "POST",
            body: JSON.stringify({
                products: art
            }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(res => res.json())
            .then(data => {
                return data.body.init_point
            })
            .then(data => {
                // window.location.href = data;
                console.log(data)
            })
            .catch(err => console.error(err, "error"))
    }



    var total = 0;
    art.forEach(item => {
        total += item.cantidad * item.precio
    })



    return (
        <div>
            <div className="container">
                <h1 className="text-dark font-italic">Productos Seleccionados</h1>
            </div>
            <div className="container rounded-top" id="articulos">
                <div className="row border-bottom border-dark justify-content-end">
                    <h6 className="col-2 col-lg-2 mt-2 text-center">Precio unitario</h6>
                    <h6 className="col-2 col-lg-2 mt-2 text-center">Cantidad</h6>
                    <h6 className="col-1 col-lg-2 mt-2 ml-3 text-center">Total</h6>
                    <h6 className="col-1 col-lg-1 mt-2 text-center"></h6>
                </div>

                {art.map((item, index) => (
                    <div className="row mt-1 border-bottom border-dark" id="fila">
                        <img className="col-3 col-lg-2" src={item.imageUrl["0"].base64} alt="" />
                        <div className="col-3 col-lg-3 mt-1">
                            <h5 className="align-self-center">{item.detalle}</h5>
                        </div>
                        <div className="col-2 col-lg-2 mt-1 align-self-center">
                            <p className="text-center">$ {item.precio}</p>
                        </div>
                        <div className="col-2 col-lg-2 mt-1 align-self-center">
                            <p className="text-center">{item.cantidad}</p>
                        </div>
                        <div className="col-2 col-lg-2 mt-1 align-self-center">
                            <p className="text-center">$ {item.precio * item.cantidad}</p>
                        </div>
                        <div className="col-1 col-lg-1 mt-1 align-self-center">
                            <button className="btn btn-danger" onClick={() => eliminar(index)}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <div className="container rounded-bottom mb-2">
                    <div className="d-flex justify-content-end">
                        <h5 className="mr-5 my-1">Total $ {total}</h5>
                    </div>
                    <div className="row">
                        <Link to={redirect} className="mx-auto my-1 btn btn-raised btn-primary btn-sm border-dark" onClick={() => compra()}>Finalizar Compra</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}