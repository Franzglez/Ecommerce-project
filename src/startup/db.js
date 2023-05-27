const mongoose = require('mongoose')
const config = require('config')


module.exports = () => mongoose.connect(config.get('db'))
.then(()=>console.log('conexión exitosa'))