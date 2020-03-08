import mongoose from 'mongoose';

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
    },
    respuesta: {
        type: Boolean,
        default: false,
        required: true
    }
});

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;