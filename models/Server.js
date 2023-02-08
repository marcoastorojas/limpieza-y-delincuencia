const express = require("express")
const cors = require("cors")
require("dotenv").config()
const { connectPostgres } = require("../config/db")

class Server {

    constructor() {
        this.PORT = process.env.PORT
        this.app = express()
        this.middlewares()
    }
    
    async listen() {
        try {
            await connectPostgres
            this.app.listen(this.PORT, () => {
                console.log(`servidor corriendo en el puerto ${this.PORT}`)
            })
        } catch (error) {
            console.log(error)
        }
        
    }
    
    middlewares() {
        this.app.use(express.json())
        this.app.use(cors())
        this.routes()
    }
    routes() {
        this.app.get("/saludo",(req,res)=>{
            res.send("hola mundo")
        })
        // this.app.use("/auth", authRouter)
        // this.app.use("/diet", dietRouter)
        // this.app.use("/recipe", recipeRouter)
    }

}

module.exports = Server