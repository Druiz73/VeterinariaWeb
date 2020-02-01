import React, { useState } from 'react';
import './Carrito.css';

export default function Carrito(props) {
    const [art, setArt] = useState(JSON.parse(localStorage.getItem('articulos')) || []);

    
    function eliminar(index) {
        let art2 = art.slice();
        art2.splice(index, 1);
        setArt(art2);
        localStorage.setItem('articulos', JSON.stringify(art2));
        props.setear(art2.length)
    }
    
    function compra(){
        console.log(art);
        fetch("http://localhost:3001/producto")
            .then(function (response) {
                return response.json()
            })
            .then(data => {
                setArt(data)
            console.log(data);
        })
    }
    
    var total= 0;
    art.forEach(item => {
        total+=item.cantidad*item.precio
    })

    return (
        <div>
            <div className="container">
                <h1 className="text-dark font-italic">Productos Seleccionados</h1>
            </div>
            <div className="container rounded-top" id="articulos">
                <div className="row border-bottom border-dark justify-content-end">
                    <h5 className="col-2 mt-2 text-center">Precio unitario</h5>
                    <h5 className="col-2 mt-2 text-center">Cantidad</h5>
                    <h5 className="col-2 mt-2 text-center">Total</h5>
                    <h5 className="col-1 mt-2 text-center"></h5>
                </div>

                {art.map((item, index) => (    
                <div className="row mt-1 border-bottom border-dark" id="fila">
                    <img className="col-2" src={item.url} alt="" />
                    <div className="col-3 mt-1">
                        <h3 className="font-italic">{item.producto}</h3>
                        <p className="align-self-center">{item.descripcion}</p>
                    </div>
                    <div className="col-2 mt-1 align-self-center">
                            <p className="text-center">$ {item.precio}</p>
                    </div>
                    <div className="col-2 mt-1 align-self-center">
                        <p className="text-center">{item.cantidad}</p>
                    </div>
                    <div className="col-2 mt-1 align-self-center">
                        <p className="text-center">$ {item.precio * item.cantidad}</p>
                    </div>
                    <div className="col-1 mt-1 align-self-center">
                        <button className="btn btn-danger" onClick={() => eliminar(index)}>Eliminar</button>
                    </div>
                </div>
                ) )}
                <div className="container rounded-bottom mb-2">
                    <div className="d-flex justify-content-end">                 
                    <h5 className="mr-5 my-1">Total $ {total}</h5>
                    </div>
                    <div className="row">
                        <button className="mx-auto my-1 btn btn-primary btn-sm border-dark" onClick={() => compra()}>Finalizar Compra</button>
                    </div>
                </div>
            </div>
        </div>
    )
}