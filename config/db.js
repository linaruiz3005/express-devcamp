const mongoose = require('mongoose')
const url='mongodb+srv://linaruiz3005:linaruiz3005@cluster0.t2zqfj3.mongodb.net/?retryWrites=true&w=majority'

//crear un componente funcional 
const connectDB = async () =>{
    const conn = await mongoose.connect(url,{
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    console.log(conn.connection.host)
}
connectDB()