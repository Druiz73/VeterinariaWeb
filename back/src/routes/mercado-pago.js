// SDK de Mercado Pago
import mercadopago from 'mercadopago';
import express from 'express';

var router = express.Router();

// Agrega credenciales
mercadopago.configure({
    access_token: 'PROD_ACCESS_TOKEN' // agregar el TOKEN de cada uno!
});

/* GET home page. */
router.get('/mercado-pago', function (req, res, next) {

    // Crea un objeto de preferencia
    let preference = {
        items: [
            {
                title: req.query.titulo,
                unit_price: req.query.precio_unitario,
                quantity: req.query.cantidad,
            }
        ]
    };

    mercadopago.preferences.create(preference)
        .then(function (response) {
            // Este valor reemplazará el string "$$init_point$$" en tu HTML
            console.log(response);
            // global.init_point = response.body.init_point;
        }).catch(function (error) {
            console.log(error);
        });

});

export default router;