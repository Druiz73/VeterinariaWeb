import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams,
  useRouteMatch
} from "react-router-dom";

import Login from "../Login/Login";
import Usuario from "../Usuario/Usuario";
import Registro from "../Registro/Registro";
import Contrasenia from "../Contrasenia/Contrasenia";
import Profesionales from "../Profesionales/Profesionales";
import Minimarket from "../Minimarket/Minimarket";
import Ventas from "../Ventas/Ventas";
import Navbar from "../Navbar/Navbar";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Servicios from "../Servicios/Servicios";
import IndexTurnos from "../IndexTurnos/IndexTurnos";
import FormConsultaVet from "../FormConsultaVet/FormconsutalVet";
import FormPeluqueria from "../FormPeluqueria/FormPeluqueria";
import Thanks from "../Thanks/Thanks";
import ProductPage from "../ProductPage/ProductPage";
import Slider from "../Slider/Slider";
import Carrito from "../Carrito/Carrito";
import FormContact from "../FormContact/FormContact";
import CompEnEspera from "../CompEnEspera/CompEnEspera";
import Calendario from "../Calendar/Calendar";
import Failure from '../MercadoPago/Failure';
import Pending from '../MercadoPago/Pending';
import Success from '../MercadoPago/Success';



export default function Home() {
  const produc = JSON.parse(localStorage.getItem("articulos")) || [];
  const hour = []
  const [cartLength, setCartLength] = useState(produc.length);
  function setear(data) {
    setCartLength(data);
  }
  

  return (
    <Router>
      <Header />
      <Navbar cartLength={cartLength} />
      <Switch>
        <Route path="/usuario" component={Usuario} />
        <Route path="/registro" component={Registro} />
        <Route path="/contrasenia" component={Contrasenia} />
        <Route path="/calendar" component={Calendario} />
        <Route path="/turnos" component={IndexTurnos} />
        <Route path="/consulta" component={FormConsultaVet} />
        <Route path="/peluqueria" component={FormPeluqueria} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/compenespera">
          <CompEnEspera setear={data => setear(data)} article={produc}/>
        </Route> 
        <Route path="/productPage/:id">
          <ProductPage setear={data => setear(data)} />
        </Route>
        <Route path="/ventas">
          <Ventas setear={data => setear(data)} />
        </Route>
        <Route path="/carrito">
          <Carrito setear={data => setear(data)} article={produc}/>
        </Route>
        <Route path="/contact" component={FormContact} />
        <Route path="/failure" component={Failure} />
        <Route path="/pending" component={Pending} />
        <Route path="/success" component={Success} />

        <Route exact path="/login">
        <Login />
        </Route>

        <Route exact path="/">
          
          <Slider />
          <Minimarket />
          <Servicios />
          <Profesionales />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}
