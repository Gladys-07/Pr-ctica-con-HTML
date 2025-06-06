console.log("¡Hola Mundo!");
import express from "express" ;

const app = express() //instancia del servidor

app.use("/", express.static("public")) 
const port = 3000;
app.listen(3000, console.log("http://localhost:" + port)) 