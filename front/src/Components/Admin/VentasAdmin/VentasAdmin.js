import React from 'react';

export default class VentasAdmin extends React.Component {
    render() {
        return (
            <body>
                <div className="container py-3">
                    <div className="row">
                        <h1 className="mr-auto">Ventas</h1>
                        
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <table className="table table-hover table-sm">
                                <thead>
                                    <tr>
                                        <th scope="col">Detalle</th>
                                        <th scope="col">Precio</th>
                                        <th scope="col">Cantidad</th>
                                        <th scope="col">Total</th>
                                    </tr>
                                </thead>
                                <tbody id="tBody">
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </body>

        )
    }
}



