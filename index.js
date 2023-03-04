const express = require('express');

const app = express()

//swagger docs 

const swaggerUi = require('swagger-ui-express')

const YAMAL = require('yamljs')
const swaggerDocument = YAMAL.load('./swagger.yaml')

app.use('/api/swagger', swaggerUi.serve, swaggerUi.setup(swaggerDocument))

const PORT = process.env.PORT || 4000

app.get('/', (req, res) => {
    res.status(200).send("success status")
})

app.get('/api/v1/socialapp', (req, res) => {
    const socialdata = {
        username:'Nasir',
        folowers:66,
        following:55,
        date:Date.now()
    }
    res.json(socialdata)
})

app.get('/api/v1/:token', (req, res) => {
    const {token} = req.params;

    res.status(200).json(token)
})

app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`)
})

