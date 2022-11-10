const {DataTypes, ValidationError} = require('sequelize')
const CourseModel = require('../models/course')
const sequelize = require('../config/seq')

const Course = CourseModel(sequelize, DataTypes)

exports.getAllCourses = async (req , res)=>{
    
    const allCourses = await Course.findAll()
    console.log(allCourses)
    res.status(200).json({
        "success" : true,
        "data" : allCourses
    })
}

exports.getSingleCourse = async(req , res)=>{
    try {
        const singleCourse = await Course.findByPk(req.params.id)
        if(!singleCourse){
            res.status(400).json({
                "success" : flase,
                "errors" : "Curso no encontrado"
               })
        }else{
            res.status(200).json({
                "success" : true,
                "data" : singleCourse
               })
        }
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
   
}

exports.createCourse= async (req , res)=>{
    try {
        //grabar nuevo usuario
        const newCourse = await Course.create(req.body)
        //enviar response con nuevo usuario
        res.status(201).json({
            "success" : true,
            "data" : newCourse
        }) 
    } catch (error) {
        if(error instanceof ValidationError){
            //recorrer el arreglo de errores:
            //foreach
            //map
            const msg_errores=error.errors.map(errorItem=>errorItem.message)
            res.status(422).json({
                "success":false,
                "errors": msg_errores
            })
        }else{
            res.status(400).json({
                "success":false,
                "errors": "error de servidor"
            })
        }
    }
    
}

exports.updateCourse= async (req , res)=>{
    try {
        //seleccionar el usuario or id
        const updateCourse = await Course.findByPk(req.params.id)
        //si no existe
        if(!updateCourse){
            res.status(400).json({
                "success" : false,
                "errors" : "Curso no encontrado"
               })
        }else{
            //si existe, actualizar usuario
            await Course.update(req.body,{
                where:{
                    id: req.params.id
                }
            })
            //volvemos a seleccionar usuario
            const updateCourse = await Course.findByPk(req.params.id)
            //response con usuario actualizaco
            res.status(200).json({
                "seccess" : true,
                "data" : updateCourse
               })

        }
        
        
    } catch (error) {
        res.status(400).json({
            "success":false,
            "errors": "error de servidor"
        })
    }
 
}

exports.deleteCourse = async (req,res) => {
    try {
         //seleccionar el usuario or id
         const deleteCourse = await Course.findByPk(req.params.id)
         //si no existe
         if(!deleteCourse){
             res.status(400).json({
                 "success" : false,
                 "errors" : "Curso no encontrado"
                })
         }else{
             //si existe, actualizar usuario
             await Course.delete(req.body,{
                 where:{
                     id: req.params.id
                 }
             })
             //volvemos a seleccionar usuario
             const deleteCourse = await Course.findByPk(req.params.id)
             //response con usuario actualizaco
             res.status(200).json({
                 "seccess" : true,
                 "data" : deleteCourse
                })
        }
        
    } catch (error) {
        
    }
    await Course.destroy({
        where: {
            id: req.params.id
        }
    })
    const singleCourse = await Course.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": singleCourse})
}