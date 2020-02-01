import express from 'express';
import mongoose from 'mongoose';
var router = express.Router();

const contactSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    motivo: {
        type: String,
        required: true
    },
    detalles: {
        type: String,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);
/* GET home page. */
router.get('/', function (req, res, next) {
    Contact.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});

router.post('/create', function (req, res, next) {
    const mje = new Contact({

        nombre: req.body.nombre,
        email: req.body.email,
        motivo: req.body.motivo,
        detalles: req.body.detalles
    });
    mje.save((error, item) => {
        console.log(error, item)
        res.send(item);
    });
});

export default router;