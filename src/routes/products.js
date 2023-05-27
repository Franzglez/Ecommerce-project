const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const Product = require('../Models/Product');
const jwt = require("jsonwebtoken");

// router.get('/products', async (req, res) => {
//     const products = await products.find().exec();
//     res.json(products);
//   });

  router.post('/products', async (req, res) => {
    const createProducts = req.body
    const newProduct = await Product.create(createProducts)
    res.json(newProduct)
  
  })


// router.post('/products', async (req, res) => {
//   try {
//     const { titulo, descripcion, precio, categoria } = req.body;

//     // Validar que los campos obligatorios estén presentes
//     if (!titulo || !descripcion || !precio || !categoria) {
//       return res.status(400).json({ error: 'Por favor, proporciona todos los campos requeridos.' });
//     }

//     const newProduct = new Product({
//       titulo,
//       descripcion,
//       precio,
//       categoria
//     });

//     const savedProduct = await newProduct.save();
//     res.json(savedProduct);
//   } catch (error) {
//     console.error('Error al crear el producto:', error);
//     res.status(500).json({ error: 'Ocurrió un error al crear el producto.' });
//   }
// });

module.exports = router;
