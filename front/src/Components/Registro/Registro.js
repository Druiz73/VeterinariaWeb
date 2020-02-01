import React from "react";
import './Registro.css';

export default function Registro() {
    return (
        <div>
            <h3 className="font-italic pl-5 mt-2">Registrate en nuestra página!!!</h3>
            <form className="container border p-3 my-3 border-dark rounded-lg">
                <div className="form-row">
                    <div className="col-md-4 mb-3">
                        <label for="validationServer01">Nombre</label>
                        <input type="text" className="form-control is-valid" id="validationServer01" placeholder="Nombre" required />
                        <div className="valid-feedback">
                            Coloca tu nombre.
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationServer02">Apellido</label>
                        <input type="text" className="form-control is-valid" id="validationServer02" placeholder="Apellido" required />
                        <div className="valid-feedback">
                            Coloca tu apellido.
                    </div>
                    </div>
                    <div className="col-md-4 mb-3">
                        <label for="validationServerUsername">E-mail</label>
                        <div className="input-group">
                            <input type="text" className="form-control is-valid" id="validationServerUsername" placeholder="e-mail" aria-describedby="inputGroupPrepend3" required />
                            <div className="valid-feedback">
                                Coloca tu e-mail.
                        </div>
                        </div>
                    </div>
                </div>
                <div className="form-row">
                    <div className="col-md-6 mb-3">
                        <label for="validationServer03">Domicilio</label>
                        <input type="text" className="form-control is-valid" id="validationServer03" placeholder="Domicilio" required />
                        <div className="valid-feedback">
                            Coloca tu domicilio.
                    </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationServer04">Provincia</label>
                        <input type="text" className="form-control is-valid" id="validationServer04" placeholder="Provincia" required />
                        <div className="valid-feedback">
                            Coloca tu provincia.
                    </div>
                    </div>
                    <div className="col-md-3 mb-3">
                        <label for="validationServer05">DNI</label>
                        <input type="text" className="form-control is-valid" id="validationServer05" placeholder="DNI" required />
                        <div className="valid-feedback">
                            Coloca tu DNI.
                    </div>
                    </div>
                </div>
                <div className="d-flex justify-content-end">
                    <button className="btn btn-primary border-dark" type="submit">Registrarme</button>
                </div>
            </form>
        </div>
    )
}