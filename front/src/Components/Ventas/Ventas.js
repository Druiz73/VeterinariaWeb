import React, { useState } from 'react';
import './Ventas.css';
import ItemNav from '../ItemNav/ItemNav';
import {Link} from 'react-router-dom';

export default function Ventas() {

    return (
        <div className="container-fluid">

            <div className="row">
                <div className="d-flex">
               
                    <ItemNav />


              

                <div className="container-fluid section">
                <div data-spy="scroll" data-target="#navbar-example3" className="mb-3 col-12 col-md-6 col-lg-12" data-offset="0">
                    <h4 id="item-1" className="text-dark">Item 1</h4>
               
                    <div className="row">
                        <div class="card m-1 mb-3 col-12 col-lg-3 item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 id="item-1-1" className="mt-5 text-dark">Item 1-1</h5>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 id="item-1-2" className="mt-5 text-dark">Item 2-2</h5>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 id="item-2" className="mt-5 text-dark">Item 2</h4>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h4 id="item-3" className="mt-5 text-dark">Item 3</h4>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 id="item-3-1" className="mt-5 text-dark">Item 3-1</h5>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <h5 id="item-3-2" className="mt-5 text-dark">Item 3-2</h5>
                    <div className="row justify-content-start">
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="card m-1 mb-3 col-12 col-lg-3 d-flex justify-content-center item-border cards">
                            <div class="row no-gutters">

                                <img src="https://cdn.shopify.com/s/files/1/0185/9786/products/25203-HoopieCollar-RedButte-WEB_1024x1024_d6b98a18-6af4-4252-8a88-5f1a9526ffb5.jpg?v=1527393648" class="card-img" alt="..." />

                                <div class="col-md-12">
                                    <div class="card-body">
                                        <h3 class="card-title text-center">Collar de perro</h3>
                                        <p class="card-text text-center">La mejor marca al mejor precio</p>
                                        <p class="card-text text-center"><small class="text-muted">1500$</small></p>
                                        <div className="text-center">
                                            <Link to='/productPage' name="articulos" type="button" class="btn btn-warning">Agregar al carrito</Link>                                           </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </div>
            </div>
            </div>

        </div>
    )
}
