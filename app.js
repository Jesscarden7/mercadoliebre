const express = require("express");

const path = require("path");/*  Modulo que me ayuda a identificar el dir o la carpeta
                              donde se encuentra el proyecto */
const app = express();

app.use(express.static("public")); // Pone disponible todo el contenido de la carpeta public

app.get("/", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"./views/home.html"));
});

app.get("/register", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"./views/register.html"));
});

app.get("/login", (req,res) =>{
    res.sendFile(path.resolve(__dirname,"./views/login.html"));
});

app.listen(3030, () =>
    console.log("Servidor Corriendo en el puerto 3030")
);  