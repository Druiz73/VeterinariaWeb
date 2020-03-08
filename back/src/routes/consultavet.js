import express from 'express';
import consultavet from './../models/consultavet';

var router = express.Router();

router.get('/', function (req, res, next) {
    consultavet.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});
router.get('/:id', function (req, res, next) {
    consultavet.findById({ _id: req.params.id }, function (error, consultavet) {
        if (error) {
            res.send(error);
        } else {
            res.send(consultavet)
        }
    })
})
router.put('/:id', function (req, res, next) {
    consultavet.updateOne({ _id: req.params.id }, { tipoMascota: req.body.tipoMascota, nombre: req.body.nombre, edad: req.body.edad, problematica: req.body.problematica }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.post('/', function (req, res, next) {
    const newconsultavet = new consultavet({
        tipoMascota: req.body.tipoMascota,
        nombre: req.body.nombre,
        edad: req.body.edad,
        problematica: req.body.problematica
    });
    newconsultavet.save((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.delete('/', function (req, res, next) {
    consultavet.deleteOne({ _id: req.body.id }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
})

export default router;