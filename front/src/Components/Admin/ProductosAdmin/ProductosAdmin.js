import React, { useState, useEffect } from 'react';
import ModalProductosAdmin from '../ModalProductosAdmin/ModalProductosAdmin';
import './producto.css'
import config from '../../../config/config';
export default function ProductosAdmin() {


    const [productos, setproductos] = useState({
        products: [],
        imageUrl: [],
        categoria: []
    })

    useEffect(() => {
        getProducto();
    }, []);


    function getProducto() {
        fetch(`${config.apiUrl}/producto`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setproductos({
                    products: data
                })
            });
    }


    function save(detalle, precio, imageUrl, stock, categoria) {
        fetch(`${config.apiUrl}/producto`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                detalle: detalle,
                precio: precio,
                imageUrl: imageUrl,
                category: categoria,
                stock: stock,
                
            })
        })
            .then(resp => resp.json())
            .then(data => {
                getProducto();
            })
    }

    function deleteProducto(id) {

        fetch(`${config.apiUrl}/producto/${id}`, {
            method: 'DELETE'
        })
            .catch(err => console.error(err))
            .then((data) => {
               getProducto();
            })
    }

   

    return (
        <body>
            <div className="container py-3">
                <div className="row">
                    <h1 className="mr-auto">Productos</h1>
                    <ModalProductosAdmin  save={(detalle, precio, imageUrl, stock, categoria) => save(detalle, precio, imageUrl, stock, categoria)} multiple={true}  />
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Detalle</th>
                                    <th scope="col">Precio</th>
                                    <th scope="col">Imagen</th>
                                    <th scope="col">Categoria</th>
                                    <th scope="col">Stock</th>
                                    <th scope="col">Eliminar</th>

                                </tr>
                            </thead>
                            <tbody id="tBody">
                                {productos.products.map((element) => (
                                    <tr key={element._id}>
                                        <td>{element.detalle}</td>
                                        <td>{element.precio}</td>
                                        <td><img className="img" src={element.imageUrl["0"].base64}/></td>
                                        <td>{element.categoria}</td>
                                        <td>{element.stock}</td>
                                        <td><button onClick={(id) => deleteProducto(element._id)}>Eliminar</button></td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </body>
    )
}



