import express from 'express';
import Product from './../models/product';

var router = express.Router();


// FILTRO DE CATEGORIAS
router.get('/:id', (req, res, next) => {
    let productIds = req.params.id
    Product.find({
            'category': {
                $in: productIds
            }
        })
        .exec((err, product) => {
            if (err) return req.status(400).send(err)
            return res.status(200).send(product)
        })
})


/* GET home page. */
router.get('/', function (req, res, next) {
    Product.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});

/* GET producto _id. */
router.get('/cart/:id', function (req, res, next) {
    Product.findById({
        _id: req.params.id
    }, function (err, producto) {
        if (err) throw err;
        res.send(producto)
    });
});



router.post('/', function (req, res, next) {
    const newProduct = new Product({

        detalle: req.body.detalle,
        precio: req.body.precio,
        imageUrl: req.body.imageUrl,
        category: req.body.category,
        stock: req.body.stock

    });
    newProduct.save((error, item) => {
        if (error) {
            res.send(error);
        } else {
            res.send(item)
        }
    })
});

router.put('/:id', function (req, res, next) {
    
    Product.updateOne(({ _id: req.params.id }, { precio: req.body.precio, detalle: req.body.detalle, idCategoria: req.body.idCategoria, imageUrl: req.body.imageUrl, stock: req.body.stock}), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
)})

router.delete('/:id', function (req, res, next) {
    Product.findOneAndDelete({
        _id: req.params.id
    }, (error, data) => {
        if (error) {
            res.send(error)
        } else {
            res.send(data)
        }
    });
})


export default router;



