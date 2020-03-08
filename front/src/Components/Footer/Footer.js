import React from "react";
import "./Footer.css";
import logo from "./../../image/logo.jpg";
import Google from "./../../image/Google.svg";
import Instagram from "./../../image/Instagram.svg";
import Facebook from "./../../image/Facebook.svg";

export default class Footer extends React.Component {
  render() {
    return (
      <div className="bg-dark">
        <footer className="bg-dark container">
          <h5 className="text-center text-white pt-3">Veterinary Clinic</h5>
          <div className="container">
            <div className="row">
              <div className="col-12 col-lg-4 text-center my-lg-auto">
                <img src={logo} className="rounded-circle imgFooter " alt="" />
              </div>

              <div className="col-12 col-lg-4 d-flex flex-row  my-lg-auto">
                <div className="  col-6">
                  <h5 className="text-center text-white">Direccion</h5>
                  <p className="text-center text-white">Gral Paz 576</p>
                </div>
                <div className="col-6  ">
                  <h5 className="text-center text-white">Telefono</h5>
                  <p className="text-center text-white">0800-222-7777</p>
                </div>
              </div>
              <div className="col-12 col-lg-4 text-center my-3 my-lg-auto">
                <ul className="list-group list-group-horizontal ml-5 mx-auto">
                  <li className="mx-auto mb-2">
                    <a href="#!">
                      <img className="imgLogo" src={Google} />
                    </a>
                  </li>
                  <li className="mx-auto mb-2">
                    <a href="#!">
                      <img className="imgLogo" src={Instagram} />
                    </a>
                  </li>
                  <li className="mx-auto mb-2">
                    <a href="#!">
                      <img className="imgLogo" src={Facebook} />
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copyright">
            <div className="container text-white text-center">
              © 2020 Veterinary Clinic
            </div>
          </div>
        </footer>
      </div>
    );
  }
}
