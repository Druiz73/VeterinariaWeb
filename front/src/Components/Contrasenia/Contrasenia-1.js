import React, { useState, useEffect } from 'react';
import {
    Link
} from "react-router-dom";
import emailjs from 'emailjs-com';

export default function Contrasenia() {
const [email, setEmail] = useState('');

function handleClick(e) {
    if (email === "") {
        alert("Debe ingresar ambos campos")
    }else{
        //fetch 
        send(email)
      
    }
}
var templateParams = {
    email: email,
}

function recoveryPassSendEmail() {
        emailjs.send('gmail', 'rc-recovery-pass', templateParams, 'user_KJvvMIBvWRC8W8MmvO6h0')
            .then(function (response) {
                console.log('SUCCESS!', response.status, response.text);
                alert('Verificar su correo!');
            }, function (error) {
                console.log('FAILED...', error);
                alert('Error al enviar email !!');
            });  
}

function send(email){
    fetch("http://localhost:4000/user/recovery", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            email: email
        })
    })
        .then(res => res.json())
        .then(data => {
            if (data.message === "Usuario no identificado") {
                alert("Usuario no identificado")
            }
            else {
                console.log("usuario email ok:",data);
                //enviar email pare recuperar clave, emailJs
                recoveryPassSendEmail()


                //redireccionar a componente de cambio de clave
            }
        })

}

function handleInput(e) {
    const name = e.target.name;
    const value = e.target.value;
    setEmail({
        email,
        [name]: value
    })
}

    return (
        <form className="container col-6 text-center my-5 py-2 border border-primary rounded-lg">
            <h3 className="font-italic my-3">Por favor ingrese su e-mail para recuperar la contraseña</h3>
            <div className="form-group mb-2 my-3 d-flex justify-content-center">
                <label for="inputEmail2" className="sr-only">Email</label>
                <input name="email" onChange={(e) => handleInput(e)} value={email.email} required type="email" className="form-control w-50 border-dark" id="staticEmail2" placeholder="e-mail@ejemplo.com" />
            </div>
            <button type="button" onClick={(e) => handleClick(e)} className="btn btn-primary border-dark my-3 mb-2">Confirmar</button>
        </form>
    )
}