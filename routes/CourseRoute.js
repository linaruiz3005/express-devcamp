const express  = require('express')

const router =express.Router()

//listar todos los cursos
router.get('/',(req , res)=>{
    res.status(400).json({
        "seccess" : true,
        "data" : "Aqui se van a mostrar todos los cursos"
    })
})

//listar un curso por id
router.get('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a mostrar el curso cuyo id es: ${req.params.id}`
    })
 })

//crear un nuevo curso
router.post('/',(req , res)=>{
    res.status(201).json({
        "seccess" : true,
        "data" : "Aqui se va a crear un nuevo curso"
    })
})

//acrualizar un curso por id
router.put('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a actualizar el curso cuyo id es: ${req.params.id}`
    })
 })

//borrar un curso por id
router.delete('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a eliminar el curso cuyo id es: ${req.params.id}`
    })
 })

module.exports = router