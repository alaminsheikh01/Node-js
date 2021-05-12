import {fastify} from 'fastify'
import fastifyStatic from 'fastify-static'
import path from 'path'
import {fileURLToPath} from 'url'

//ESM specific
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)

const app = fastify()

async function startApp () {
    try{

        app.register(fastifyStatic, {
            root: path.join(__dirname, 'public')
        })

        app.get("/", (req, res) =>{
            res.send({
                msg: 'Hello world'
            })
        })

       await app.listen(2000)
       console.log("Server is running on port 2000")
    }catch(e){
        console.error(e)
    }
}

startApp()