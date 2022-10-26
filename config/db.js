const sequelize = require('./seq')
const colors = require('colors')

//funcion para conectarme a la base de datos

const connectDB = async ()=>{
    try {
        await sequelize.authenticate()
        console.log('Conectado a servidor mysql'.bgBlue)
        /*const jane = await User.create({ username: "Jane", email: "jane@mail.com", password: "123456" });
        console.log("Jane's auto-generated ID:", jane.id);*/
        /*await User.destroy({
            where: {
              username: "Jane"
            }
          });
        await User.update({ email: "maria@mail.com" }, {
            where: {
              email: "Juan@mail.com"
            }
        });
        const users = await User.findAll();
        console.log(users.every(user => user instanceof User)); // true
        console.log("All users:", JSON.stringify(users, null, 2));*/
    } catch (error) {
        console.log(error)
    }
   
}
module.exports = connectDB