import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './Servicios.css';
import Fotoservice from './../../image/Fotoservice.jpg';
import Otroservice from './../../image/Otroservice.jpg';

export default class Servicios extends React.Component {
    render() {
        return (
            <div className="container-fluid mb-5">
                <div className="row">
                    <div className="col-12 text-center">
                    <h3 className="text-center">Nuestros Servicios!</h3>
                        <i class="material-icons">
                            category
</i>
                        <div className="container">
                            <div className="row">
                                <div className="col-12 col-md-6 rounded">
                                    <div class="card">
                                        <img class="card-img-top" src={Fotoservice} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title bg-primary rounded">Consulta 24 horas</h5>
                                            <p class="card-text">Consulta Médica Veterinaria a través de video llamada, en cualquier momento las 24 horas del día.</p>
                                            <Link type="button" class="btn btn-raised btn-success" to="/turnos">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 rounded">
                                    <div class="card">
                                        <img class="card-img-top" src={Otroservice} alt="Card image cap" />
                                        <div class="card-body">
                                            <h5 class="card-title bg-primary rounded">Encuentra tu Veterinario</h5>
                                            <p class="card-text">Consulta el listado de nuestros expertos. Si tu médico de confianza se encuentra en nuestra plataforma podrá atenderte en un clic.</p>
                                            <Link type="button" class="btn btn-raised btn-success" to="/turnos">Ver mas</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                      

                    </div>
                </div>
            </div>

        )
    }
}
