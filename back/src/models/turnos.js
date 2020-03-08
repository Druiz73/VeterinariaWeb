import mongoose from 'mongoose';

const turnoSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    raza: {
        type: String,
        required: true
    },
    tamaño: {
        type: String,
        required: true
    }
    
})
const turno = mongoose.model('turno', turnoSchema);

export default turno;