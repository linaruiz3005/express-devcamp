const express  = require('express')
const {getAllUsers,getSingleUser,updateUser,deleteUser,createUser} = require('../controllers/UserController')
const router =express.Router()

router.route('/')
.get(getAllUsers)
.post(createUser)

router.route('/:id')
.get(getSingleUser)
.put(updateUser)
.delete(deleteUser)

module.exports = router