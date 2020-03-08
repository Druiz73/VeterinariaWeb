import express from 'express';
import Sale from './../models/sale';
import verifyToken from "../middleware/middleware";

var router = express.Router();

router.get('/', function (req, res, next) {
    Sale.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});
router.get('/:id', function (req, res, next) {
    Sale.findById({
        _id: req.params.id
    }, function (error, sale) {
        if (error) {
            res.send(error);
        } else {
            res.send(sale)
        }
    })
})
router.put('/:id', function (req, res, next) {
    Sale.updateOne({
        _id: req.params.id
    }, {
        status: req.body.status
    }, (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.post('/', function (req, res, next) {
    
    let productos = req.body.products.map((item) => ({
        _id: item._id,
        cantidad: item.cantidad,
        unit_price: item.precio,
    }))
  
    const newSale = new Sale({
        products: productos,
    });

    newSale.save((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    })
})
router.delete('/', function (req, res, next) {
    Sale.deleteOne({
        _id: req.body.id
    }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
})

export default router;