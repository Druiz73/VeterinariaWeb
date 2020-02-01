import React, {useState, useEffect} from 'react';
import ModalProductosAdmin from '../ModalProductosAdmin/ModalProductosAdmin';

export default function ProductosAdmin() {


    const [productos, setproductos] = useState({
        products:[],
        imageUrl:[]
    })

    useEffect(() => {
        fetch("http://localhost:4000/producto")
        .then(resp => resp.json())
        .then(data => {
            console.log(data)
            setproductos({
                products: data
            })
        });
            }, []);

        function save (detalle, precio, imageUrl){
            fetch("http://localhost:4000/producto/create", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    detalle: detalle,
                    precio: precio,
                    imageUrl: imageUrl
                  
                })
            })
                .then(resp => resp.json())
                .then(data => {
                  console.log(data)       
                })
        }

   function getFiles(files){
       console.log(files)
    setproductos({imageUrl: files })
       console.log(productos.imageUrl)
      }
    
    return (
        <body>
            <div className="container py-3">
                <div className="row">
                    <h1 className="mr-auto">Productos</h1>
                    <ModalProductosAdmin save={(detalle, precio, imageUrl)=>save(detalle, precio, imageUrl)}  imageUrl={productos.imageUrl} multiple={ true } onDone={(files)=> getFiles(files)} />
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
                                </tr>
                            </thead>
                            <tbody id="tBody">
                                {productos.products.map((element, index) =>( 
                                    <tr key={element._id}>
                                <td>{element.detalle}</td>
                                <td>{element.precio}</td>
                                <td>{element.imagen}</td>
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



