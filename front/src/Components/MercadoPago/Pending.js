import React from 'react';
import image from '../../image/mercadopago-og.jpg'

export default function Pending() {
    return (
        <div className="col-12 col-lg-6 mx-auto">
            <h2>Su compra esta siendo procesada, nos contactaremos a la brevedad!</h2>
            <img src={image} />
        </div>
    )
}
