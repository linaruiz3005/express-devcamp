const express  = require('express')

const router =express.Router()

//listar todos los bootcamps
router.get('/',(req , res)=>{
    res.status(400).json({
        "seccess" : true,
        "data" : "Aqui se van a mostrar todos los bootcamps"
    })
})

//listar un bootcamp por id
router.get('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a mostrar el bootcamp cuyo id es: ${req.params.id}`
    })
 })

//crear un nuevo bootcamp
router.post('/',(req , res)=>{
    res.status(201).json({
        "seccess" : true,
        "data" : "Aqui se va a crear un nuevo bootcamp"
    })
})

//acrualizar un bootcamp por id
router.put('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a actualizar el bootcamp cuyo id es: ${req.params.id}`
    })
 })

//borrar un bootcamp por id
router.delete('/:id',(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `aqui se va a eliminar el bootcamp cuyo id es: ${req.params.id}`
    })
 })

module.exports = router