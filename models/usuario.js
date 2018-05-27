'use strict'
var mongoose= require('mongoose');
var Schema= mongoose.Schema;

var UsuarioSchema=Schema({
    nikname:String,
    password:String,
    nombre:String,
    apellido:String,
    email:String,
    telefono:String,
    edad:Number,
    rol:String
});


module.exports=mongoose.model('Usuario',UsuarioSchema);
