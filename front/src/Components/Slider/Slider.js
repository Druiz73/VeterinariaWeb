import React from "react";
import "./Slider.css";
export default class Slider extends React.Component {
  render() {
    return (
      <div className="container-fluid mb-5">
        <div className="row justify-content-center mt-5">
          <div
            id="carouselExampleFade"
            class="carousel slide carousel-fade slider-size"
            data-ride="carousel"
          >
            <div class="carousel-inner">
              <div class="carousel-item active">
                <img
                  src="https://static.miweb.padigital.es/var/m_4/4f/4f1/2875/38480-clinica-veterinaria-la-campana-banner.jpg"
                  class="img-size d-block w-100 imgCarousel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://static.websguru.com.ar/var/m_0/07/076/111671/1537381-Cl%C3%ADnica-Veterinaria-Instintos-banner-2.jpg"
                  class="img-size d-block w-100 imgCarousel"
                  alt="..."
                />
              </div>
              <div class="carousel-item">
                <img
                  src="https://www.daymascotas.cl/wp-content/uploads/2019/01/cabecera-clinica-veterinaria.jpg"
                  class="img-size d-block w-100 imgCarousel"
                  alt="..."
                />
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
    );
  }
}
