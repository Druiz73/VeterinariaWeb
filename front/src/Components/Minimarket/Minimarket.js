import React from "react";
import { Link } from "react-router-dom";
import "./Minimarket.css";
import collar from "./../../image/collar.jpg";
import huesito from "./../../image/huesito.jpg";
import dog from "./../../image/dog.jpg";
import cat from "./../../image/cat.jpg";
import jirafa from "./../../image/jirafa.jpg";
import adrian from "./../../image/adrian.jpeg";
export default class Minimarket extends React.Component {
  render() {
    return (
      <div className="container-fluid row mx-0 mt-3 col-12 mb-3">
        <div className="col-12 col-lg-8 mx-auto">
          <h1 className="text-center">Productos y Mas</h1>
          <div class="row row-cols-2 row-cols-lg-3">
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              {" "}
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
            <div class="col mx-0">
              <div className="card text-center border border-secondary">
                <h5 className="text-center">Collares</h5>
                <img src={collar} className="card-img" alt="" />
                <h5 className="text-center">$1500</h5>
              </div>
            </div>
          </div>
          <div className="row justify-content-center">
            <Link
              type="button"
              className="btn btn-outline-success"
              to="/ventas"
            >
              Ver mas
            </Link>
          </div>
        </div>
        <div className="col-4 d-flex flex-column mx-auto">
          <img
            src={dog}
            className="desaparecerImg img-thumbnail my-auto border border-secondary"
            alt=""
          />
          <img
            src={cat}
            className="desaparecerImg img-thumbnail my-auto border border-secondary"
            alt=""
          />
        </div>
      </div>
    );
  }
}
