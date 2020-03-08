import mongoose from 'mongoose';

const consultavetSchema = mongoose.Schema({
    tipoMascota: {
        type: String,
        required: true
    },
    nombre: {
        type: String,
        required: true
    },
    edad: {
        type: String,
        required: true
    },
    problematica: {
        type: String,
        required: true
    }
    
})
const consultavet = mongoose.model('consultavet', consultavetSchema);

export default consultavet;