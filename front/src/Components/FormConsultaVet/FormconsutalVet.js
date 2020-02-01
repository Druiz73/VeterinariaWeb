import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function FormConsultaVet() {
  const [consulta, setConsulta] = useState({
    tipoMascota: '',
    nombre: '',
    edad: 0,
    problematica: ''
  });

  function handleSubmit() {

  }

  function handleInput (e) {
       
    const name = e.target.name;
    const value = e.target.value;
    setConsulta({
        ...consulta,
        [name]: value
    })
    console.log(consulta)
}

  return (<div className="col-6 mx-auto text-dark" ><h1 className="mb-5 ">Rellene el formulario</h1>
    <form className="mb-5" onSubmit={handleSubmit()}>
      <div className="form-group">
        <label className="text-dark mx-auto" for="tipoMascota" >Tipo de Mascota: </label>
        <input className="form-control text-center" type="text" name="tipoMascota" value={consulta.tipoMascota} onChange={(e)=>handleInput(e)} placeholder="Perro, Gato, Loro, etc" />
      </div>
      <div className="form-group">
        <label className="text-dark mx-auto" for="nombre">Nombre de la Mascota: </label>
        <input className="form-control text-center" type="text" name="nombre" value={consulta.nombre} onChange={(e)=>handleInput(e)} placeholder="Nombre de su mascota" />
      </div>
      <div className="form-group">
        <label className="text-dark mx-auto" for="edad">Edad de su mascota: </label>
        <input className="form-control text-center" type="number" name="edad" value={consulta.edad} onChange={(e)=>handleInput(e)} placeholder="Edad de su mascota" />
      </div>
      <div className="form-group text-center">
        <label className="text-dark text-center" for="problematica">Motivo</label>
        <textarea className="form-control text-center  " name="problematica" rows="3" value={consulta.problematica} onChange={(e)=>handleInput(e)}></textarea>
      </div>
      <Link className="btn btn-warning mb-5" to='/thanks'> Enviar </Link>
    </form>
  </div>
  )
}