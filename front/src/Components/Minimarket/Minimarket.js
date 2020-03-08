import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Minimarket.css";
import collar from "./../../image/collar.jpg";
import huesito from "./../../image/huesito.jpg";
import Pelota from "./../../image/Pelota.jpg";
import Pelota2 from "./../../image/Pelota2.jpg";
import dog from "./../../image/dog.jpg";
import cat from "./../../image/cat.jpg";
import config from "../../config/config";
export default function Minimarket() {

  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(`${config.apiUrl}/producto`)

      .then(function (response) {
        return response.json()
      })
      .then(data => {
        setProducts(data)
      })
  }, {})


  return (
    // map de productos en el minimarket pagina principal
    <div className="container row mx-0 mt-3 col-12 mb-3" >
      <div className="col row">
      <div className="col-9 col-lg-8" >
      <h1 className="text-center" > Productos y Mas </h1>
      </div>
       
      <div className="row col-lg-8 mx-auto" >
       

        {products.map((item) => (
          <div className="col-6 box-wrap" >
            <div className="col mx-0 mb-1 box-wrap" >
              <div className="card text-center border border-secondary box " >
                <h5 className="text-center" > {item.detalle} </h5>
                <Link to={`/productPage/${item._id}`}
                  name="articulos"
                  type="button" >
                  <img src={item.imageUrl["0"].base64}
                    className="card-img"
                    alt="" />
                </Link> <h5 className="text-center" > {item.precio} </h5>
              </div>
            </div>

          </div>
        ))
        }
        <div className="d-flex justify-content-center col-12 my-auto" >
          <Link type="button"
            className="btn btn-outline-success"
            to="/ventas" >
            Ver mas </Link>
        </div>
      </div>
      </div> 
      <div className="col-4 d-flex flex-column mx-auto" >

        <img src={dog} className="desaparecerImg img-thumbnail my-auto border border-secondary" alt="" />
        <img src={cat} className="desaparecerImg img-thumbnail my-auto border border-secondary" alt="" />
      </div>
    </div>
  );

}