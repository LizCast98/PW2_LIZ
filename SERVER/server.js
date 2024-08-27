const express = require('express')
const http = require('http')
const cors = require('cors')

const app = express();

app.set ('puerto', 4200)
app.use(express.json())
app.get('/', (req, res) => {
    console.log("hola mundo");
    res.json({Respuesta: "HOLA MUNDO"})
})

const httpServer = http.createServer(app)

httpServer.listen(app.get('puerto'), "localhost", () =>{
    console.log("Server conectado")
})
