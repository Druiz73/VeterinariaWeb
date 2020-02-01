import React, { useState } from 'react';
import peluqueria from './peluqueria.jpg';
import veterinaria from './veterinaria.jpg';
import './indexTurnos.css';
import {
    Link
} from "react-router-dom";

export default function IndexTurnos(props) {
    const [turnos, setTurnos] = useState({
        consulta: false,
        peluqueria: false
    });

    function guardarConsulta(event) {
        event.preventDefault();
        document.getElementById("veterinaria").className += " bg-warning";
        document.getElementById("peluqueria").className = document.getElementById("peluqueria").className.replace(/(?:^|\s)bg-warning(?!\S)/g, '');
        console.log(turnos);
        setTurnos({
            ...turnos,
            consulta: true,
            peluqueria: false
        })

    }

    function guardarPeluqueria(event) {
        event.preventDefault();
        document.getElementById("peluqueria").className += " bg-warning";
        document.getElementById("veterinaria").className = document.getElementById("veterinaria").className.replace(/(?:^|\s)bg-warning(?!\S)/g, '');
        setTurnos({
            ...turnos,
            consulta: false,
            peluqueria: true
        })
    }


    return (<div className="container t-1">
        <div className="row">
            <div className="card col-6" id="peluqueria">
                <img src={peluqueria} className="card-img-top img-fluid" alt="" />
                <div className="card-body text-center">
                    <h5 className="card-title">Turnos para Peluqueria</h5>
                    <Link className="btn btn-warning" to="/peluqueria">Seleccionar</Link>
                </div>
            </div>
            <div className="card col-6" id="veterinaria" >
                <img src={veterinaria} className="card-img-top img-fluid" alt="..." />
                <div className="card-body text-center">
                    <h5 className="card-title">Turnos para consultas Veterinaria</h5>
                    <Link className="btn btn-warning" to="/consulta">Seleccionar</Link>
                </div>
            </div>
        </div>
    </div>
    )
}