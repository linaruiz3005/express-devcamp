exports.getAllBootcamps = (req , res)=>{
    res.status(400).json({
        "seccess" : true,
        "data" : "Todos los bootcamps"
    })
}

exports.getSingleBootcamp = (req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `Single bootcamp ${req.params.id}`
    })
}

exports.createBootcamp=(req , res)=>{
    res.status(201).json({
        "seccess" : true,
        "data" : "create bootcamp"
    })
}

exports.updateBootcamp=(req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `update bootcamp ${req.params.id}`
    })
}

exports.deleteBootcamp = (req , res)=>{
    res.status(200).json({
     "seccess" : true,
     "data" : `delete bootcamp ${req.params.id}`
    })
 }