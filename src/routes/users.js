const { Router } = require('express');
const router = Router();
const bcrypt = require('bcrypt');
const User = require('../Models/User');
const jwt = require("jsonwebtoken");

require("dotenv").config();

//Raiz
router.get('/users', async (req, res) => {
    const users = await User.find().exec();
    res.json(users);
});


router.post('/signup', async (req, res) => {
    const { password: passwordPlainText, ...rest } = req.body

    const salt = await bcrypt.genSalt(10)
    const password = await bcrypt.hash(passwordPlainText, salt)

    const newUser = await User.create({ password, ...rest })

    const token = newUser.generateJWT()

    res.setHeader('x-auth-token', token).json(newUser)
    res.send('Te has registrado')
})

router.post('/signin', async (req, res) => {
    const { password: passwordPlainText, username } = req.body

    console.log(process.env.jwt_privateKey);


    const user = await User.findOne({ username })

    const isAuth = await bcrypt.compare(passwordPlainText, user.password)

    if (isAuth) {

        const token = jwt.sign({ username, name: user.name }, process.env.jwt_privateKey)

        res.setHeader('x-auth-token', token)
        res.send('Te has logeado')
    } else {
        res.send("usuario incorrecto")
    }


})


module.exports = router;