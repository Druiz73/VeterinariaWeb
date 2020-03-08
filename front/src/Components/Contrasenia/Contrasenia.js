import React, { useState, useEffect } from 'react';
import './Contrasenia.css'
import {
    Link
} from "react-router-dom";

export default function Contrasenia() {
    const [email, setEmail] = useState({});
    const [passNueva, setPassNueva] = useState('');


    function handleClick(e) {
        if (!email.email) {
            alert("Debe ingresar su email")
        } else {
            send(email.email)
        }
    }

    function send(email) {
        fetch("http://localhost:4000/user/recovery", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: email })
        })
            .then(res => res.json())
            .then(data => {
                if (data.mensaje === "user does not exist") {
                    alert("Usuario no identificado")
                }
                else {
                    changePass();                   
                }
            })
    }

    function handleClickPass(e){        
        if(!email.passNueva){
            alert("Debe ingresar contraseña nueva")
        }else{
            cambiarContraseña()
        }
    }

    function cambiarContraseña() {
        fetch("http://localhost:4000/user/recovery", {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                passNueva: email.passNueva,
                email: email.email
            })
        })
            .then(res => res.json())
            .then(data => { 
                if(data.mensaje === "password actualizada"){
                    alert("Contraseña Actualizada");
                    let form = document.getElementById("form");
                    form.style.display = "block";
                    let recuperar = document.getElementById("recuperar");
                    recuperar.style.display = "none";
                    setEmail({email:""});
                }
            })
    }

    function handleInput(e) {
        const name = e.target.name;
        const value = e.target.value;
        setEmail({
            ...email,
            [name]: value
        })
    }
    useEffect(() => {        
        let recuperar = document.getElementById("recuperar");
        recuperar.style.display = "none"
    },[]);

    function changePass() {               
        let recuperar = document.getElementById("recuperar");
        recuperar.style.display = "block";
        let form = document.getElementById("form");
        form.style.display = "none";
    }

    return (
    <div>
        <div>
            <form id="form" className="container col-6 text-center my-5 py-2 border border-primary rounded-lg">
                <h3 className="font-italic my-3">Por favor ingrese su e-mail para recuperar la contraseña</h3>
                <div className="form-group mb-2 my-3 d-flex justify-content-center">
                    <label for="inputEmail2" className="sr-only">Email</label>
                    <input name="email" onChange={(e) => handleInput(e)} value={email.email} required type="email" className="form-control w-50 border-dark" id="staticEmail2" placeholder="e-mail@ejemplo.com" />
                </div>
                <button id="confirmar" type="button" onClick={(e) => handleClick(e)} className="btn btn-primary border-dark my-3 mb-2">Confirmar</button>
            </form>
        </div>
        <div>
            <form id="recuperar" className="container col-6 text-center my-5 py-2 border border-primary rounded-lg">
                <h3 className="font-italic my-3">Por favor ingrese su nueva contraseña para el usuario: {email.email}</h3>
                <div className="form-group mb-2 my-3 d-flex justify-content-center">
                    <label for="inputEmail2" className="sr-only">email</label>
                    <input name="passNueva" onChange={(e) => handleInput(e)} value={email.passNueva} required type="password" className="form-control w-50 border-dark" id="passNueva" />
                </div>
                <button id="confirmar" type="button" onClick={(e) => handleClickPass(e)} className="btn btn-primary border-dark my-3 mb-2">Confirmar</button>
            </form>
        </div>
    </div>
    )
}