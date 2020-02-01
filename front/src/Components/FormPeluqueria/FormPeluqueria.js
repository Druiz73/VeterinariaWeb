import React, { useState } from 'react';
import {Link} from 'react-router-dom';

export default function FormPeluqueria() {
  const [peluqueria, setPeluqueria] = useState({
    nombre: '',
    raza: '',
    tamaño: 0
  });

  function handleSubmit() {

  }

  function handleInput(e) {

    const name = e.target.name;
    const value = e.target.value;
    setPeluqueria({
      ...peluqueria,
      [name]: value
    })
    console.log(peluqueria)
  }

  return (<div className=" col-6 mx-auto " ><h1 className="mb-5 text-dark">Rellene el formulario</h1>
    <form className="mb-5" onSubmit={handleSubmit()}>
      <div className="form-group">
        <label className="text-dark mx-auto" for="nombre">Nombre de la Mascota: </label>
        <input className="form-control text-center" type="text" name="nombre" value={peluqueria.nombre} onChange={(e) => handleInput(e)} placeholder="Nombre de su mascota" />
      </div>
      <div className="form-group">
        <label className="text-dark mx-auto" for="raza">Raza de su mascota: </label>
        <input className="form-control text-center" type="text" name="raza" value={peluqueria.raza} onChange={(e) => handleInput(e)} placeholder="Raza de su mascota" />
      </div>
      <div className="form-group text-center">
        <label className="text-dark" for="tamaño">Motivo</label>
        <select class="custom-select " name="tamaño" id="inputGroupSelect01"  onChange={(e) => handleInput(e)} value={peluqueria.tamaño}>
          <option value="pequeño">Pequeño (1 a 3 kg)</option>
          <option value="mediano">Mediano(3 a 6 kg)</option>
          <option value="grande">Grande (mayor a 6kg)</option>
        </select>
      </div>
      <Link className="btn btn-warning mb-5" to='/thanks'> Enviar </Link>
    </form>
  </div>
  )
}