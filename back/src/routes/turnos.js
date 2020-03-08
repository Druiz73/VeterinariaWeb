import express from 'express';
import turno from './../models/turnos';

var router = express.Router();

router.get('/', function (req, res, next) {
    turno.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});
router.get('/:id', function (req, res, next) {
    turno.findById({ _id: req.params.id }, function (error, turno) {
        if (error) {
            res.send(error);
        } else {
            res.send(turno)
        }
    })
})
router.put('/:id', function (req, res, next) {
    turno.updateOne({ _id: req.params.id }, { nombre: req.body.nombre, raza: req.body.raza, tamaño: req.body.tamaño }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.post('/', function (req, res, next) {
    const newturno = new turno({
        nombre: req.body.nombre,
        raza: req.body.raza,
        tamaño: req.body.tamaño
    });
    newturno.save((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.delete('/', function (req, res, next) {
    turno.deleteOne({ _id: req.body.id }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
})

export default router;