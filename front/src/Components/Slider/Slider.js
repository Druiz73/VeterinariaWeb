import React from "react";
import {
  Link
} from "react-router-dom";
import "./Slider.css";
import Slider1 from './../../image/Slider1.jpg';
import Slider2 from './../../image/Slider2.jpg';
import Slider3 from './../../image/Slider3.jpg';
export default class Slider extends React.Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="row justify-content-center">
          <div className="col-12 p-0">
            <div
              id="carouselExampleFade"
              class="carousel slide carousel-fade slider-size"
              data-ride="carousel"
            >
              <div class="carousel-inner">
                <div class="carousel-item active">
                  <img
                    src={Slider1}
                    class="img-size d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-content">
                    <div class="card">
                      <div class="card-body">
                        <h5 class="card-title text-primary">Conoce Veterinary-Clinic</h5>
                        <p class="card-text text-primary">Veterinary-Clinic tu veterinario on-line en un clic te permite solucionar cualquier duda con la ayuda de un profesional las 24 horas del dia.</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={Slider2}
                    class="img-size d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-content1">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text text-primary">Descarga Veretinary-Clinic en tu celular. Esta plataforma brinda asesoria veterinaria 24 Horas, permite crear el perfil de tu animal de compañia y tener la historia clinica dentro de la aplicacion!</p>
                        <button type="button" class="btn botonesCarousel">Descarga tu aplicacion movil!</button>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="carousel-item">
                  <img
                    src={Slider3}
                    class="img-size d-block w-100"
                    alt="..."
                  />
                  <div class="carousel-content">
                    <div class="card">
                      <div class="card-body">
                        <p class="card-text text-primary">Conoce nuestros servicios: Consulta 24 Horas o Encuentra a tu veterinario.</p>
                        <Link to="/turnos" type="button" class="btn botonesCarousel">Ver mas</Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <a
                class="carousel-control-prev"
                href="#carouselExampleFade"
                role="button"
                data-slide="prev"
              >
                <span
                  class="carousel-control-prev-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Previous</span>
              </a>
              <a
                class="carousel-control-next"
                href="#carouselExampleFade"
                role="button"
                data-slide="next"
              >
                <span
                  class="carousel-control-next-icon"
                  aria-hidden="true"
                ></span>
                <span class="sr-only">Next</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
