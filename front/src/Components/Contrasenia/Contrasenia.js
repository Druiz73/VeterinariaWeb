import React from "react";

export default function Contrasenia() {
    return (
        <form class="container col-6 text-center my-5 py-2 border border-primary rounded-lg">
            <h3 className="font-italic my-3">Por favor ingrese su e-mail para recuperar la contraseña</h3>
            <div class="form-group mb-2 my-3 d-flex justify-content-center">
                <label for="inputEmail2" class="sr-only">Email</label>
                <input type="text" class="form-control w-50 border-dark" id="staticEmail2" placeholder="e-mail@ejemplo.com" />
            </div>
            <button type="submit" class="btn btn-primary border-dark my-3 mb-2">Confirmar</button>
        </form>
    )
}