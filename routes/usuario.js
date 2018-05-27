'use strict'
var express = require('express');
var UsuarioController=require('../controllers/usuario');
var md_auth = require('../middlewares/autenticate');
var md_isadmin = require('../middlewares/is_admin');
var api=express.Router();
// [md_auth.ensureAuth,]
api.get('/pruebas-del-controlador',[md_auth.ensureAuth,md_isadmin.isAdmin],UsuarioController.pruebas);
// rutas de controlador
//api.get('/pruebas-del-controlador',UsuarioController.pruebas);

api.post('/register',UsuarioController.saveUser);
api.post('/login',UsuarioController.login);
module.exports=api;
