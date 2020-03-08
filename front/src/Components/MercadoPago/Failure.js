import React from 'react';
import image from '../../image/mercadopago-og.jpg'

export default function Failure() {
    return (
        <div className="col-12 col-lg-6 mx-auto">
            <h2>Tuvimos problemas para procesar su pago</h2>
            <img src={image} />
        </div>
    )
}
