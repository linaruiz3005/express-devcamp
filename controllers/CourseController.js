const {DataTypes} = require('sequelize')
const CourseModel = require('../models/course')
const sequelize = require('../config/seq')

const Course = CourseModel(sequelize, DataTypes)

exports.getAllCourses = async (req , res)=>{
    const allCourses = await Course.findAll()
    console.log(allCourses)
    res.status(400).json({
        "success" : true,
        "data" : allCourses
    })
}

exports.getSingleCourse = async(req , res)=>{
    const SingleCourse = await Course.findByPk(req.params.id)
    res.status(200).json({
     "success" : true,
     "data" : SingleCourse
    })
}

exports.createCourse= async (req , res)=>{
    const newCourse = await Course.create(req.body)
    res.status(201).json({
        "success" : true,
        "data" : newCourse
    })
}

exports.updateCourse= async (req , res)=>{
    await Course.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const SingleCourse = await Course.findByPk(req.params.id)
    res.status(200).json({
     "success" : true,
     "data" : SingleCourse
    })
}

exports.deleteCourse = async (req,res) => {
    await Course.destroy({
        where: {
            id: req.params.id
        }
    })
    const SingleCourse = await Course.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": SingleCourse})
}