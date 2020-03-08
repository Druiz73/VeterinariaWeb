import express from 'express';
import Contact from './../models/contact';
import verifyToken from '../middleware/middleware';

var router = express.Router();

/* GET home page. */
router.get('/', verifyToken, function (req, res, next) {
    Contact.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});

router.post('/', verifyToken, function (req, res, next) {
    const mje = new Contact({
        nombre: req.body.nombre,
        email: req.body.email,
        motivo: req.body.motivo,
        detalles: req.body.detalles
    });
    mje.save((error, item) => {
        res.send(item);
    });
});

router.delete('/', verifyToken, function (req, res, next) {
    Contact.deleteOne({ _id: req.body.id }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)

        }
    })
});

router.put('/', verifyToken, function (req, res, next) {
    Contact.updateOne({ _id: req.body.id }, {
        respuesta: req.body.respuesta,
    }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
});

export default router;