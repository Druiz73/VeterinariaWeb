import React, { useState, useEffect } from 'react';
import config from '../../../config/config';

export default function VentasAdmin() {
    const [ventas, setVentas] = useState({
        sales: []
    });

    useEffect(() => {
        getVentas();
    }, {})
    function getVentas(){
        fetch(`${config.apiUrl}/sales`)
        .then( resp => resp.json())
        .then(data => {
            setVentas({
                sales: data
            })
        })
    }

    // function save(cantidad, precio, total, detalle, status) {
    //     fetch("http://localhost:4000/sales", {
    //         method: "POST",
    //         headers: {
    //             'Content-Type': 'application/json'
    //         },
    //         body: JSON.stringify({
    //             detalle: detalle,
    //             precio: precio,
    //             cantidad: cantidad,
    //             status: status,
    //             total: total
    //         })
    //     })
    //         .then(resp => resp.json())
    //         .then(data => {
    //             getVentas();
    //         })
    // }

    // let sale = ventas;

    return (
        <body>
            <div className="container py-3">
                <div className="row">
                    <h1 className="mr-auto">Ventas</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Detalle</th>
                                    <th scope="col" className="text-center">Precio</th>
                                    <th scope="col" className="text-center">Cantidad</th>
                                    <th scope="col" className="text-center">Total</th>
                                    <th scope="col" className="text-center">Estado</th>
                                </tr>
                            </thead>
                            {ventas.sales.map((item) => (
                               item.products.map((prod) =>
                                <tbody id="tBody">
                                    <td>{prod._id}</td>
                                    <td className="text-center">{prod.unit_price}</td>
                                    <td className="text-center">{prod.cantidad}</td>
                                    <td className="text-center">{prod.cantidad * prod.unit_price}</td>
                                    <td className="text-center">{item.status}</td>
                                </tbody>
                            )))}
                        </table>
                    </div>
                </div>
            </div>
        </body>

    )

}



