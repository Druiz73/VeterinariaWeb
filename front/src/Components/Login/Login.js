import React, { useState, useEffect } from 'react';
import './Login.css';
import {
    Link
} from "react-router-dom";
import Google from "./../../image/Google.svg";
import Instagram from "./../../image/Instagram.svg";
import Facebook from "./../../image/Facebook.svg";

export default function Login() {

    const [login, setLogin] = useState({
        email: '',
        password: ''
    })

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setLogin({
            ...login,
            [name]: value
        })
    }

    function handleClick(e) {
        e.preventDefault();
        if (login.email === "" || login.password === "") {
            alert("Debe ingresar ambos campos")
        } else {
            inicio(login.email, login.password);
        }
    }

    function inicio(email, password) {
        fetch("http://localhost:4000/user/login", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                email: email,
                password: password
            })
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if (data.error == "user does not exist") {
                    alert("email y contraseña no coinciden")
                }
                else {
                    localStorage.setItem('usertoken', data.token);
                }
            })
    }

    return (
        <div className="container-fluid">
            <div className="row bg-primary" >
                <div className="col-6 mx-auto">
                    <div class="card mb-3 mt-3">

                        <h5 class="card-header info-color white-text text-center py-4">
                            <strong>Login</strong>
                        </h5>

                        <div class="card-body px-lg-5 pt-0">


                            <form class="text-center" action="#!">

                                <div class="md-form mb-1">
                                    <input type="email" id="materialLoginFormEmail" class="form-control" placeholder="Pon tu Correo" />
                                    <label for="materialLoginFormEmail">E-mail</label>
                                </div>


                                <div class="md-form">
                                    <input type="password" id="materialLoginFormPassword" class="form-control" placeholder="Pon tu Contraseña" />
                                    <label for="materialLoginFormPassword">Contraseña</label>
                                </div>

                                <div class="d-flex justify-content-around">
                                    <div>

                                        <div class="form-check">
                                            <input type="checkbox" class="form-check-input" id="materialLoginFormRemember" />
                                            <label class="form-check-label" for="materialLoginFormRemember">Recordarme</label>
                                        </div>
                                    </div>
                                    <div>

                                        <a className="text-white btn btn-raised btn-primary mx-1" href="">Olvidaste tu contraseña?</a>
                                    </div>
                                </div>


                                <button class="btn btn-outline-info btn-rounded btn-block my-4 waves-effect z-depth-0" type="submit">Ingresar</button>


                                <p>Aun no eres miembro?
        <Link className="text-white btn btn-raised btn-primary mx-1" to="/registro">Registrate!</Link>
                                </p>


                                <p>O ingresa con!</p>
                                <a type="button" class="btn-floating btn-fb btn-sm">
                                <img className="imgLogo" src={Facebook} />
                                </a>
                                <a type="button" class="btn-floating btn-tw btn-sm">
                                <img className="imgLogo" src={Instagram} />
                                </a>
                                <a type="button" class="btn-floating btn-li btn-sm">
                                <img className="imgLogo" src={Google} />
                                </a>
                              

                            </form>


                        </div>

                    </div>
                </div>

            </div>
        </div>
    )
}