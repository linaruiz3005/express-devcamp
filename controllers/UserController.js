const {DataTypes} = require('sequelize')
const UserModel = require('../models/user')
const sequelize = require('../config/seq')

//objeto user
const User = UserModel(sequelize, DataTypes)

exports.getAllUsers = async (req , res)=>{
    const allUsers = await User.findAll()
    console.log(allUsers)
    res.status(400).json({
        "seccess" : true,
        "data" : allUsers
    })
}

exports.getSingleUser = (req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `Single user ${req.params.id}`
    })
}

exports.createUser=(req , res)=>{
    res.status(201).json({
        "seccess" : true,
        "data" : "create user"
    })
}

exports.updateUser=(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `update user ${req.params.id}`
    })
}

exports.deleteUser = (req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `delete user ${req.params.id}`
    })
 }