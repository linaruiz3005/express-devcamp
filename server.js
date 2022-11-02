//1. crear la dependecia a express
const express  = require('express')
const colors = require('colors')
const dotenv = require('dotenv')
const connectDB = require('./config/db')
const listEndpoints = require('express-list-endpoints')

//dependencia a las rutas
const bootcampRoutes = require('./routes/BootcampRoutes')
const userRoutes = require('./routes/UserRoutes')
const courseRoutes = require('./routes/CourseRoute')
const reviewRoutes = require('./routes/ReviewRoutes')

//definiendo archivo .env
dotenv.config({
    path: './config/config.env'
})

//2. crear el objeto app con express 
const app = express()

app.use(express.json())

//conectar a bd
connectDB()

//relacionar rutas de dominio
app.use('/api/v1/bootcamps' , bootcampRoutes)
app.use('/api/v1/courses' , courseRoutes)
app.use('/api/v1/users' , userRoutes)

//primera ruta de prueba
app.get('/' , ( request, response )=>{
    response.send('Ruta Funcional')
})

//conultar endopints del proyecto
console.log(listEndpoints(app))


//3. iniciar el devserver
app.listen(process.env.PORT , ()=>{
        console.log('Servidor Inicializado'.bgMagenta)
})