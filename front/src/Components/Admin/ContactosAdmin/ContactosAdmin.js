import React, { useState, useEffect } from 'react';
import ModalContactosAdmin from '../ModalContactosAdmin/ModalContactosAdmin';

export default function ContactosAdmin() {
    const [consultas, setConsultas] = useState([]);

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({
            [name]: value
        })
    }

    useEffect(() => {
        fetch("http://localhost:3001/contact")
            .then(resp => resp.json())
            .then(data => {
                setConsultas(data);

            });
    }, [])

    return (
        <body>
            <div className="container py-3">
                <div className="row">
                    <h1 className="mr-auto">Contactos Admin</h1>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Nombre y Apellido</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Motivo</th>
                                    <th scope="col">Detalle</th>
                                    <th scope="col">Accion</th>
                                </tr>
                            </thead>
                            <tbody id="tBody">
                                {consultas.map((item) => (
                                    <tr>
                                        <td name="apeNom" >{item.nombre}</td>
                                        <td name="email" >{item.email}</td>
                                        <td name="motivo" >{item.motivo}</td>
                                        <td name="detalle" >{item.detalles}</td>
                                        <td scope="row" ><ModalContactosAdmin onClick={() => handleInput()} consultas={item} /></td>
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


