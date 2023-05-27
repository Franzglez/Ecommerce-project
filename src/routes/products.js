const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const Product = require('../Models/Product');
const jwt = require("jsonwebtoken");

router.get('/products', async (req, res) => {
    const products = await Product.find().exec();
    res.json(products);
  });

  router.post('/products', async (req, res) => {
    const createProducts = req.body
    const newProduct = await Product.create(createProducts)
    res.json(newProduct)
  
  })

  router.delete('/products/:id', async (req, res) => {
    const productId = req.params.id
    const deletedProduct = await Product.findByIdAndDelete(productId)
  
    res.json(deletedProduct)
  })

  router.put('/products/:id',  async (req, res) => {
    const productId = req.params.id
    const updatedDetails = req.body
  
    const updatedProduct = await Product.findByIdAndUpdate(productId, updatedDetails, {
      new: true,
    })  
    res.json(updatedProduct)
  })


module.exports = router;
