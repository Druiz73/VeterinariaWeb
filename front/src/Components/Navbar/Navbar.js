import React, {useState} from 'react';
import './Navbar.css'
import Consultas from '../Consultas/Consultas';
import logo from './../../image/logo.jpg';
import {
    Link
} from "react-router-dom";

export default function Navbar(props){


        return (
            
        

                <nav className="navbar navbar-expand-lg navbar-light  nav-wrapper nav-wrapper-4">
                    <img src={logo} className="rounded-circle img-logo" alt="" />
                    <Link className="navbar-brand text-center text-white m-1" to="/">Veterinary-Clinic</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse effect-4" id="navbarSupportedContent">
                        <ul className="navbar-nav mx-auto">
                        <li className="nav-item active">
                                <Link className="nav-link text-white" to="/">Inicio <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/ventas">Tienda <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/turnos">Turnos</Link>
                            </li>
                            <li className="nav-item active">
                                <Consultas />
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/registro">Registrarte <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                            
                            </li>
                        </ul>
                        <Link to="/login" className="mr-2">login<img src="https://img.icons8.com/bubbles/50/000000/cloud-account-login-male.png" /></Link>
                        </div>
                        <Link to="/carrito"><img src="https://img.icons8.com/color/48/000000/shopping-cart.png" />
                            <span className="badge badge-danger rounded-circle">{props.cartLength}</span>
                        </Link>
                    
                </nav>
          
          
        )
    
}