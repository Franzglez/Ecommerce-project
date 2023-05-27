const express = require('express');
const app = express(); 
require('dotenv').config()


require('./startup/db')()
require('./startup/routes')(app)


app.listen('9000', () => console.log('Server on 9000'));