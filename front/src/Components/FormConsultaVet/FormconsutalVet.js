import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import config from '../../config/config';
import Calendario from '../Calendar/Calendar';

export default function FormConsultaVet(props) {
  const [consulta, setConsulta] = useState({
    tipoMascota: '',
    nombre: '',
    edad: 0,
    problematica: '',
    horasTotales: ["8:00", "9:00", "10:00", "11:00", "12:00", "16:00", "17:00", "18:00", "19:00"],
    horasFiltradas: [],
    hora: []
  });


  /*
  function handleHorasTotales(e) {


  }
*/
  function getTurnos(e) {
    fetch(`${config.apiUrl}/turnos`)

      .then(resp => resp.json())
      .then(data => {


        let datos = [];

        data.forEach(Element => datos.push(Element.hora));


        const name = e.target.name;
        const value = e.target.value;

       
        console.log(consulta.horasFiltradas);

       let horasAFiltrar = consulta.horasTotales;
        if (datos) {
          for (var i = 0; i < datos.length; i++) {
            if (horasAFiltrar.indexOf(datos[i]) >= 0) {
              horasAFiltrar.splice(horasAFiltrar.indexOf(datos[i]), 1);
            }
          }         
        }
        
        setConsulta({
          ...consulta,
          [name]: value,
          horasFiltradas: datos,

          hora: horasAFiltrar
        })
        console.log(consulta.hora)
      });
  }


  function handleInput(e) {

    const name = e.target.name;
    const value = e.target.value;
    setConsulta({
      ...consulta,
      [name]: value
    })
    console.log(consulta)
  }

  function consultaVet() {
    fetch(`${config.apiUrl}/turnos`, {
      method: "POST",
      headers: {
        'Accept': 'aplication/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        tipoMascota: consulta.tipoMascota,
        nombre: consulta.nombre,
        edad: consulta.edad,
        problematica: consulta.problematica,
        hora: consulta.hora
      }),

    })
      .then(res => res.json())
      .then(data => {
        setConsulta({
          consulta: data
        })
      })
  }

  return (
    <React.Fragment>

      <Calendario horas={(e) => getTurnos(e)} />

      <form className="text-center mb-4">
        <select name="horasTotales" >
          <option>Selecciona un horario</option>
          {
            consulta.hora.map(function (hora) {
              return <option name="hora" value={consulta.hora} > {hora} </option>;
            })
          }
        </select>
      </form>

      <div className="col-6 mx-auto text-dark" ><h1 className="mb-5 ">Rellene el formulario</h1>
        <form className="mb-5">
          <div className="form-group">
            <label className="text-dark mx-auto" htmlFor="tipoMascota" >Tipo de Mascota: </label>
            <input className="form-control text-center" type="text" name="tipoMascota" value={consulta.tipoMascota} onChange={(e) => handleInput(e)} placeholder="Perro, Gato, Loro, etc" />
          </div>
          <div className="form-group">
            <label className="text-dark mx-auto" htmlFor="nombre">Nombre de la Mascota: </label>
            <input className="form-control text-center" type="text" name="nombre" value={consulta.nombre} onChange={(e) => handleInput(e)} placeholder="Nombre de su mascota" />
          </div>
          <div className="form-group">
            <label className="text-dark mx-auto" htmlFor="edad">Edad de su mascota: </label>
            <input className="form-control text-center" type="number" name="edad" value={consulta.edad} onChange={(e) => handleInput(e)} placeholder="Edad de su mascota" />
          </div>
          <div className="form-group text-center">
            <label className="text-dark text-center" htmlFor="problematica">Motivo</label>
            <textarea className="form-control text-center" name="problematica" rows="3" value={consulta.problematica} onChange={(e) => handleInput(e)}></textarea>
          </div>
          <Link className="btn btn-warning mb-5" to='/thanks' onClick={() => consultaVet()}> Enviar </Link>
        </form>
      </div>
    </React.Fragment>
  )
}