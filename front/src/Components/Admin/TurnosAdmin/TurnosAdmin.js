import React, { useState, useEffect } from 'react';
import config from '../../../config/config';
export default function TurnosAdmin() {


    const [turnos, setturnos] = useState({     
       turno: []

    })

    useEffect(() => {
        getTurno();
    }, []);


    function getTurno() {
        fetch(`${config.apiUrl}/turnos`)
            .then(resp => resp.json())
            .then(data => {
                console.log(data)
                setturnos({
                    turno: data
                })
            });
    }


    function deleteTurno(id) {

        fetch(`${config.apiUrl}/turnos/${id}`, {
            method: 'DELETE'
        })
            .catch(err => console.error(err))
            .then((data) => {
                getTurno();
            })
    }



    return (
        <body>
        
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <table className="table table-hover table-sm">
                            <thead>
                                <tr>
                                    <th scope="col">Raza</th>
                                    <th scope="col">Nombre</th>
                                    <th scope="col">Motivo</th>
                                    <th scope="col">Dia</th>
                                    <th scope="col">Hora</th>
                                    <th scope="col">Eliminar</th>

                                </tr>
                            </thead>
                            <tbody id="tBody">
                                {turnos.turno.map((element) => (
                                    <tr key={element._id}>
                                        <td>{element.raza}</td>
                                        <td>{element.nombre}</td>
                                        <td>{element.motivo} </td>
                                        <td>{element.dia}</td>
                                        <td>{element.hora}</td>
                                        <td><button onClick={(id) => deleteTurno(element._id)}>Eliminar</button></td>
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



