import React, { useState, useEffect } from 'react';
import config from '../../../config/config';


export default function ModalProductosAdmin(props) {
    const [productos, setproductos] = useState({
        products: [],
        imageUrl: [],
        detalle: "",
        precio: "",
        categoria: [],
        stock: 0,
        category: ""

    })



    const handleChange = (e) => {

        // get the files
        let files = e.target.files;

        // Process each file
        var allFiles = [];
        for (var i = 0; i < files.length; i++) {

            let file = files[i];

            // Make new FileReader
            let reader = new FileReader();

            // Convert the file to base64 text
            reader.readAsDataURL(file);

            // on reader load somthing...
            reader.onload = () => {

                // Make a fileInfo Object
                let fileInfo = {
                    name: file.name,
                    type: file.type,
                    size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result,
                    file: file,
                };

                // Push it to the state
                allFiles.push(fileInfo);
                console.log(allFiles)
                // If all files have been proceed
                setproductos({
                    ...productos,
                    imageUrl: allFiles
                })
            }
        } // for
    }



    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setproductos({
            ...productos,
            [name]: value
        })
        console.log(productos)
    }

    useEffect(() => {
        getCategoria();

    }, []);
    useEffect(() => {
        getCategoria();

    }, []);

    function getCategoria() {
        fetch(`${config.apiUrl}/categorias`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setproductos({
                    categoria: data
                })
            });
    }

    function getProducto() {
        fetch(`${config.apiUrl}/producto`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setproductos({
                    ...productos,
                    products: data
                })
            });
    }

    const handleCategoria = ((e) => {
        setproductos({
            ...productos,
            category: e.target.value
        })
        console.log(productos.category)
    })
    let imageurl=  document.getElementById("image");
    const limpiar = ((e) => {(imageurl.value=null)
        setproductos({
            ...productos,
            imageUrl:  [],
            detalle: "",
            precio: "",
            stock: 0
        })
    })


    return (<div>
        <button className="btn btn-outline-success ml-auto" data-placement="right" title="Agregar Notiica"
            data-toggle="modal" data-target="#exampleModal" id="btnAgregarNuevo" onClick={(e) => limpiar(e)} type="button">
            +Agregar
                        </button>

        <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog"
            aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Agregar Producto</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div id="modalBody" className="modal-body">
                        <form>
                            <div className="form-row">
                                <div className="form-group col-md-6">
                                    <label>Detalle</label>
                                    <input type="text" className="form-control" value={productos.detalle} name="detalle" onChange={(e) => handleInput(e)} placeholder="Detalle" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Precio</label>
                                    <input type="text" className="form-control" value={productos.precio} name="precio" id="precio" onChange={(e) => handleInput(e)}
                                        placeholder="Precio" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>stock</label>
                                    <input type="text" className="form-control" value={productos.stock} name="stock" id="stock" onChange={(e) => handleInput(e)}
                                        placeholder="stock" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Categoria</label>
                                    <select name="select" value={productos.category} onChange={(e) => handleCategoria(e)}>
                                        {productos.categoria.map((element) => (

                                            <option value={element._id} >{element.nombre}</option>
                                        ))}
                                    </select>
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="file">Subir imagen de producto:</label>
                                    <input className="text-center mx-auto"  type="file" multiple={props.multiple} id="image" accept="image/*" name="imageUrl" onChange={(e) => handleChange(e)} required/>
                                    {/* <span className="hint">Supported files: jpg, jpeg, png.</span> */}

                                </div>
                            </div>
                            <div id="modalFooter" className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" data-dismiss="modal" onClick={() => props.save(productos.detalle, productos.precio, productos.imageUrl, productos.stock, productos.category)}>Agregar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );

}