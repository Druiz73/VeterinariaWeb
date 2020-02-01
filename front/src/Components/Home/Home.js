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

export default function Home() {
  const produc = JSON.parse(localStorage.getItem("articulos")) || [];
  const [cartLength, setCartLength] = useState(produc.length);

  function setear(data) {
    setCartLength(data);
  }

  return (
    <Router>
      <Header />
      <Navbar cartLength={cartLength} />
      <Switch>
        <Route path="/registro" component={Registro} />
        <Route path="/contrasenia" component={Contrasenia} />
        <Route path="/turnos" component={IndexTurnos} />
        <Route path="/consulta" component={FormConsultaVet} />
        <Route path="/peluqueria" component={FormPeluqueria} />
        <Route path="/thanks" component={Thanks} />
        <Route path="/productPage">
          <ProductPage setear={data => setear(data)} />
        </Route>
        <Route path="/ventas">
          <Ventas setear={data => setear(data)} />
        </Route>
        <Route path="/carrito">
          <Carrito setear={data => setear(data)} />
        </Route>
        <Route path="/contact" component={FormContact} />
        <Route exact path="/">
          <Login />
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
