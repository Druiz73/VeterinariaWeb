import React from 'react';
import './Profesionales.css';
import { Link } from 'react-router-dom';
export default class Profesionales extends React.Component {
    render() {
        return (
            <div className="container-fluid mb-3">
                <h2 className="text-dark text-center pb-2">••• Nuestros Profesionales •••</h2>
                <div className="row justify-content-around">
                    <div className="text-center">
                    <Link to="/adrian">
                        <h1 className="text-dark">Adrian Iramain</h1>
                        </Link> 
                        <img className="img-prof rounded-circle" src="https://media.tourbar.com/photos/0/2/6/1361026/221542/19089_big.jpg?updated=1463438252" alt="" />
                       
                        <br/>
                        <h5 className="text-dark">Peluqueria</h5>
                        <p className="text-dark">Especialista en peluqueria canina</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-dark">David Ruiz</h1>

                        <img className="img-prof rounded-circle" src="https://scontent.ftuc1-1.fna.fbcdn.net/v/t31.0-8/27023437_10213763093619305_4350963629558453583_o.jpg?_nc_cat=101&_nc_ohc=v_t2ZvfpLuYAQnITS5JZMcZQU_7oj2qLj6KpHznkMBaQi5UAJVvv2grTA&_nc_ht=scontent.ftuc1-1.fna&oh=0f4e644ba04bb7e7c333b49e532fab23&oe=5EAAF304" alt="" />
                        <br />
                        <h5 className="text-dark">Contador</h5>
                        <p className="text-dark">Encargado de ventas y facturación</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-dark">Mauro Ayala</h1>

                        <img className="img-prof rounded-circle" src="https://trello-avatars.s3.amazonaws.com/a27bc669232bab97a4fa521215472b2e/original.png" alt="" />
                        <br/>
                        <h5 className="text-dark">Veterinario</h5>
                        <p className="text-dark">Cirugias y consultas 24/7</p>
                    </div>
                    <div className="text-center">
                        <h1 className="text-dark">Jorge Gotar</h1>

                        <img className="img-prof rounded-circle" src="https://scontent.ftuc1-2.fna.fbcdn.net/v/t31.0-8/13475012_10201892888719767_8595416214749019221_o.jpg?_nc_cat=111&_nc_ohc=QwR5i4Cj9nQAQn7FU4Kfmng6bzBsk6ALl1BtPiDi2Gme8sCqi_aNzvtkA&_nc_ht=scontent.ftuc1-2.fna&oh=8b224a2766493081197cc79b5d34e2eb&oe=5EAA39A7" alt="" />
                        <br/>
                        <h5 className="text-dark">Secretario</h5>
                        <p className="text-dark">Encargado de la atencion al público</p>
                    </div>
                </div>
            </div>
        )
    }
}