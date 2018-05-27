'use strict'
var jwt=require('jwt-simple');
var moment=require('moment');
var secret='ClaveS3cr3t4';

exports.createToken=function(user){
    var payload={
        sub:user._id,
        nikname:user.nikname,
        nombre:user.nombre,
        email:user.email,
        email:user.rol,
        iat:moment().unix(),// tiempo actual
        exp:moment().add(1,'days').unix()
    };
    return jwt.encode(payload,secret);
};
