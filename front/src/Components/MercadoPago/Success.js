import React from 'react';
import image from '../../image/mercadopago-og.jpg'

export default function Success() {
    return (
        <div className="col-12 col-lg-6 mx-auto">
            <h2>Su compra fue realizada exitosamente!</h2>
            <img src={image} />
        </div>
    )
}
