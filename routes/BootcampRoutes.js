const express  = require('express')
const {getAllBootcamps,getSingleBootcamp,updateBootcamp,deleteBootcamp,createBootcamp} = require('../controllers/BootcampController')
const router =express.Router()

router.route('/')
.get(getAllBootcamps)
.post(createBootcamp)

router.route('/:id')
.get(getSingleBootcamp)
.put(updateBootcamp)
.delete(deleteBootcamp)

module.exports = router