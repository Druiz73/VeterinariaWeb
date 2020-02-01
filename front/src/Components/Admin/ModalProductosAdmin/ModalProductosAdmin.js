import React, { useState, useEffect } from 'react';


export default function ModalProductosAdmin(props) {
    const [productos, setproductos] = useState({
        products: [],
        imageUrl: [],
        detalle: "",
        precio: ""

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
                    //   name: file.name,
                    //   type: file.type,
                    //   size: Math.round(file.size / 1000) + ' kB',
                    base64: reader.result
                    //   file: file,
                };

                // Push it to the state
                allFiles.push(fileInfo);
                console.log(allFiles)
                // If all files have been proceed
                if (allFiles.length === files.length) {
                    // Apply Callback function
                    if (props.multiple) props.onDone(allFiles);
                    else props.onDone(allFiles[0]);
                }
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

    function handleClick() {
        setproductos({
            imageUrl: props.imageUrl
        })
        console.log(productos.imageUrl)
    }


    return (<div>
        <button className="btn btn-outline-success ml-auto" data-placement="right" title="Agregar Notiica"
            data-toggle="modal" data-target="#exampleModal" id="btnAgregarNuevo" type="button">
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
                                    <input type="text" className="form-control" value={productos.detalle} name="detalle" onChange={(e) => handleInput(e)}  placeholder="Detalle" />
                                </div>
                                <div className="form-group col-md-6">
                                    <label>Precio</label>
                                    <input type="text" className="form-control" value={productos.precio} name="precio" id="precio" onChange={(e) => handleInput(e)}
                                        placeholder="Precio" />
                                </div>
                            </div>
                            <div className="form-row">
                                <div className="form-group col-md-12">
                                    <label for="file">Subir imagen de producto:</label>
                                    <input className="text-center mx-auto" type="file" multiple={props.multiple} accept="image/*" name="imageUrl" onChange={(e) => handleChange(e)} />
                                    {/* <span className="hint">Supported files: jpg, jpeg, png.</span> */}

                                </div>
                            </div>
                            <div id="modalFooter" className="modal-footer">
                                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cerrar</button>
                                <button type="button" className="btn btn-primary" onClick={() => props.save(productos.detalle, productos.precio, props.imageUrl)}>Agregar</button>
                            </div>
                        </form>
                    </div>

                </div>
            </div>
        </div>
    </div>
    );

}