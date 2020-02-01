import express from 'express';
import mongoose from 'mongoose';
var router = express.Router();
mongoose.connect('mongodb://localhost:27017/VeterinariaWeb', {
    useNewurlParser: true
});
const productoSchema = mongoose.Schema({
    // idCategoria: {
    //     type: String,
    //     required: true
    // },
    detalle: {
        type: String,
        required: true
    },
   
    precio: {
        type: String,
        required: true
    },
   
    imageUrl: []
});

const Producto = mongoose.model('Producto', productoSchema);
/* GET home page. */
router.get('/', function (req, res, next) {
    Producto.find((error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data);

        }
    });
});

router.put('/:id', function (res, req, next) {
    Producto.updateOne(({ _id: req.params.id }, { precio: req.params.precio, detalle: req.params.detalle, idCategoria: req.params.idCategoria, url: req.params.url }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }

    )
}
)
router.delete('/', function (res, req, next) {
    Producto.deleteOne({ _id: req.body.id }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
}
)


router.post('/create', function (req, res, next) {
    const newProduct = new Producto({
        
        detalle: req.body.detalle,
        precio: req.body.precio,
        imageUrl: req.body.imageUrl

    });
    newProduct.save((error, item) => {
        if (error) {
            res.send(error);
        } else {
            res.send(item)
        }
    })
})
router.put('/:id', function (res, req, next) {
    Producto.updateOne(({ _id: req.params.id }, { precio: req.params.precio, detalle: req.params.detalle, idCategoria: req.params.idCategoria, url: req.params.url }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }

    )
}
)
router.delete('/', function (res, req, next) {
    Producto.deleteOne({ _id: req.body.id }), (error, data) => {
        if (error) {
            res.send(error);
        } else {
            res.send(data)
        }
    }
}
)

export default router;