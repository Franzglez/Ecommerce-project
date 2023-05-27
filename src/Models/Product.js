const mongoose = require('mongoose')

const productSchema = mongoose.Schema({
    titulo: String,
    descripcion: String,
    precio: String,
    categoria: String,

})

const Product = mongoose.model('Product', productSchema)

module.exports = Product