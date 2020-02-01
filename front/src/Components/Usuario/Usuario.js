import React from 'react';

export default class Usuario extends React.Component{
    render(){
        return(
            <div className="container">
                <div ClassName="row">
                        <div className="logo col-6">
                            <img src="https://image.flaticon.com/icons/png/512/21/21645.png" width="500px"/>
                        </div>
                        <div className="formulario col-6">
                            <h2>Datos Personales</h2>
                            <h4>Nombre:</h4>
                            <h4>Apellido:</h4>
                            <h4>Dni:</h4>
                            <h4>Correo:</h4>
                            <h4>Provincia:</h4>
                            <h4>Direccion:</h4>
                        </div>
                        <div className="Mascotas">
                            <h2>Datos de la mascotas</h2>
                            <h4>Nombre:</h4>
                            <h4>Raza:</h4>
                            <h4>Edad:</h4>
                            
                        </div>
                </div>
            </div>
        )
    }
}  