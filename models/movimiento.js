'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var MovimientoSchema = Schema({
    titulo: String,
    descripcion: String,
    monto: Number,
    fecha: String,
    usuario: {
        type: Schema.objectId,
        ref: 'Usuario'
    }
    // categoria:{type:Schema.objectId,ref:'Categoria'},
    // tipomovimiento:{type:Schema.objectId,ref:'Tipomovimiento'}
});


module.exports = mongoose.model('Movimiento', MovimientoSchema);