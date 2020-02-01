import React, { useState } from 'react';
import img from '../../image/img-ejemplo-product.jpg';
import medios from '../../image/Formas-de-pago-Mercado-Pago2.jpg';

export default function ProductPage(props) {
    
    const [venta, setVenta] = useState({
        articulos: JSON.parse(localStorage.getItem('articulos')) || [],
    })

  function handleButton(e) {
        const name = e.target.name;
        const value = e.target.value;
        setVenta({
            ...venta,
            [name]: value
        })
        let arrayCompleto = venta.articulos;
        if (document.getElementsByTagName('input')[0].value > 0){
        arrayCompleto.push({
            producto: "hola",
            descripcion: "hola",
            precio: 52,
            cantidad: document.getElementsByTagName('input')[0].value,
            url: "https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648"
        })} else {alert("INGRESE CANTIDAD")};
        localStorage.setItem('articulos', JSON.stringify(arrayCompleto))
        setVenta({ articulos: arrayCompleto })
        props.setear(arrayCompleto.length)
    }

    return (
        <div>
            <h2 className="text-center"><strong>Titulo Producto</strong></h2>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 text-center my-auto">
                        <img className="img-thumbnail mt-5" src={img} />
                    </div>
                    <div className="col-12 col-md-6 text-center">
                        <h3 className="text-center mt-5 row-4">Precio: "2500"</h3>
                        <hr></hr>
                        <p>Medios de pago</p>
                        <img src={medios} className="img-fluid" />
                        <hr></hr>
                        <p>Caracteristicas</p>
                        <hr></hr>
                        <label className="mr-2">Cantidad: </label>
                        <input className="col-2" type="number"></input>
                        <hr></hr>
                        <div className="text-center">
                        <button className="btn btn-warning mx-auto mb-5" onClick={(e) => handleButton(e)}>Comprar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
