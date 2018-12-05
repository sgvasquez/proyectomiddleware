var request = require('request');
// aqui poner la url del servidor
var hosts = ['https://charette9.ing.puc.cl/', 'https://charette5.ing.puc.cl/'];  // aqui se puede poner mas de una url para ping pero habria que cambiar la logica posterior

exports.pinger = function (req, res, next) {
  hosts.forEach(function(host){
    request
        .get(host)
        .on('response', function(response){
            req.hostValido = host;
            next();
        })
        .on('error', function(err) {
            console.log(err);
            res.send(err);
        })
  });
};