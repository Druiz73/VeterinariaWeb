import React, {useState} from 'react';
import './Navbar.css'
import Consultas from '../Consultas/Consultas';
import logo from './../../image/logo.jpg';
import {
    Link
} from "react-router-dom";

export default function Navbar(props){


        return (
            
        

                <nav className="navbar navbar-expand-lg navbar-light backgroundNavbar border-bottom border-dark">
                    <img src={logo} className="rounded-circle img-logo" alt="" />
                    <Link className="navbar-brand text-center text-white m-1" to="/">Veterinary-Clinic</Link>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>

                    <div className="collapse navbar-collapse " id="navbarSupportedContent">
                        <ul className="navbar-nav m-auto">
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/ventas">Tienda <span className="sr-only">(current)</span></Link>
                            </li>
                            <li className="nav-item active">
                                <Link className="nav-link text-white" to="/turnos">Turnos</Link>
                            </li>
                            <li className="nav-item active">
                                <Consultas />
                            </li>
                        </ul>
                        <Link to="/" data-toggle="modal" data-target="#exampleModal" data-dismiss="modal" data-backdrop="false"><img src="https://img.icons8.com/bubbles/50/000000/cloud-account-login-male.png" /></Link>
                        <Link to="/carrito"><img src="https://img.icons8.com/color/48/000000/shopping-cart.png" />
                            <span class="badge badge-danger rounded-circle">{props.cartLength}</span>
                        </Link>
                    </div>
                </nav>
          
          
        )
    
}