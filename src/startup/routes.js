const morgan = require('morgan');
const express = require('express')
const user = require('../routes/users')
const product = require('../routes/products')

module.exports = function (app) {
    // Creo un path de inicio a mi app
    const api_path = "/eatfit"

    // Middleware
    app.use(morgan('dev'));
    app.use(express.json());


    // /Routes app está enrutando
    app.use(api_path, user);
    app.use(api_path, product);

}