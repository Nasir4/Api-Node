const express = require('express');

const app = express()

const PORT = 4000 || process.env.PORT

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

app.listen(PORT,()=>{
    console.log(`Server Running at ${PORT}`)
})

