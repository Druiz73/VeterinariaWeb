import mongoose from 'mongoose';

const productSchema = mongoose.Schema({
    detalle: {
        type: String,
        required: true
    },
    stock:{
        type: Number,
        required: true
    },
    precio: {
        type: String,
        required: true
    },
    imageUrl: [],
    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Category'
    }
});

const Product = mongoose.model('Product', productSchema);

export default Product;