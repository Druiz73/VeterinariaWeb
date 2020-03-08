import React, { useState, useEffect } from 'react';
import ModalContactosAdmin from '../ModalContactosAdmin/ModalContactosAdmin';
import './ContactosAdminCss.css';
import config from '../../../config/config';

export default function ContactosAdmin() {
    const [consultas, setConsultas] = useState([]);
    const [consultaModal, setConsultaModal] = useState({});

    function findConsulta(_id) {
        var dataForModal = consultas.find((consulta) => consulta._id == _id);
        setConsultaModal(dataForModal);
    }

    function deleteConsulta(id) {
        if (window.confirm("¿Esta seguro de eliminar la consulta?")) {

            fetch(`${config.apiUrl}/contact`, {
                method: 'DELETE',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ id: id })
            })
                .then(resp => resp.json())
                .then(data => {
                    fetch(`${config.apiUrl}/contact`)
                        .then(resp => resp.json())
                        .then(data => {
                            setConsultas(data);
                        });
                });

        }
    }

    useEffect(() => {
        fetch(`${config.apiUrl}/contact`)
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
                        <table className="table table-hover table-sm table-bordered">
                            <thead>
                                <tr>
                                    <th className="text-center" scope="col">Nombre y Apellido</th>
                                    <th className="text-center" scope="col">Email</th>
                                    <th className="text-center" scope="col">Motivo</th>
                                    <th className="text-center" scope="col">Detalle</th>
                                    <th className="_id" scope="col">_id</th>
                                    <th className="text-center" scope="col">Accion</th>
                                    <th scope="col">Estado</th>

                                </tr>
                            </thead>
                            {consultas.map((item) => (
                                <tbody id="tBody">
                                    <tr className={item.respuesta ? "table-success" : "table-warning"}>
                                        <td name="apeNom" >{item.nombre}</td>
                                        <td name="email" >{item.email}</td>
                                        <td name="motivo" >{item.motivo}</td>
                                        <td name="detalle" >{item.detalles}</td>
                                        <td className="_id">{item._id}</td>
                                        <td className="d-flex justify-content-end pr-3" scope="row" >
                                            {!item.respuesta ? < button onClick={() => findConsulta(item._id)} className={item.respuesta ?
                                                "btn btn-outline-success ml-auto disabled" : "btn btn-outline-info ml-auto"} data-placement="right"
                                                data-toggle="modal" data-target="#exampleModal" id="btnAgregarNuevo" type="button">
                                                Responder
                                            </button> : null}
                                            <button onClick={() => deleteConsulta(item._id)} className={item.respuesta ?
                                                "btn btn-outline-danger ml-auto" : "btn btn-outline-danger ml-auto "} data-placement="right"
                                                data-toggle="modal" data-target="#deleteModal" id="btnDelete" type="button">
                                                Eliminar
                                            </button>
                                        </td>
                                        <td className="">{item.respuesta ? "Contestado" : "Responder"}</td>
                                    </tr>
                                </tbody>
                            ))}
                        </table>
                        <ModalContactosAdmin consultaModal={consultaModal} />
                    </div>
                </div>
            </div>
        </body>
    )
}


