import React from "react";
import {
    Link
} from "react-router-dom";

export default function Login() {
    return (
            <div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Logueate</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">&times;</span>
                            </button>
                        </div>
                        <div className="modal-body">
                            <form className="px-4 py-3">
                                <div className="form-group">
                                    <label for="exampleDropdownFormEmail1">Email</label>
                                    <input type="email" className="form-control border-dark" id="exampleDropdownFormEmail1" placeholder="e-mail@ejemplo.com" />
                                </div>
                                <div className="form-group">
                                    <label for="exampleDropdownFormPassword1">Contraseña</label>
                                    <input type="password" className="form-control border-dark" id="exampleDropdownFormPassword1" placeholder="Contraseña" />
                                </div>
                                <div className="d-flex justify-content-end">
                                    <Link type="submit" className="btn btn-primary border-dark" to="/usuario">Ingresar</Link>
                                </div>
                            </form>
                            <div className="dropdown-divider"></div>
                            <div className="reg d-flex justify-content-around">
                                <Link className="btn" to="/registro">Aun no estas registrado?</Link>
                                <Link className="btn" to="/contrasenia">Olvide mi contraseña?</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    )
}