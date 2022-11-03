const {DataTypes} = require('sequelize')
const BootcampModel = require('../models/bootcamp')
const sequelize = require('../config/seq')

const Bootcamp = BootcampModel(sequelize, DataTypes)

exports.getAllBootcamps = async (req , res)=>{
    const allBootcamps = await Bootcamp.findAll()
    console.log(allBootcamps)
    res.status(400).json({
        "success" : true,
        "data" : allBootcamps
    })
}

exports.getSingleBootcamp = async(req , res)=>{
    const SingleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({
     "success" : true,
     "data" : SingleBootcamp
    })
}

exports.createBootcamp= async (req , res)=>{
    const newBootcamp = await Bootcamp.create(req.body)
    res.status(201).json({
        "success" : true,
        "data" : newBootcamp
    })
}

exports.updateBootcamp= async (req , res)=>{
    await Bootcamp.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const SingleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({
     "success" : true,
     "data" : SingleBootcamp
    })
}

exports.deleteBootcamp = async (req,res) => {
    await Bootcamp.destroy({
        where: {
            id: req.params.id
        }
    })
    const SingleBootcamp = await Bootcamp.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": SingleBootcamp})
}