const {DataTypes} = require('sequelize')
const ReviewModel = require('../models/review')
const sequelize = require('../config/seq')

const Review = ReviewModel(sequelize, DataTypes)

exports.getAllReviews = async (req , res)=>{
    const allReviews = await Review.findAll()
    console.log(allReviews)
    res.status(400).json({
        "seccess" : true,
        "data" : allReviews
    })
}

exports.getSingleReview = async(req , res)=>{
    const getSingleReview = await Review.findByPk(req.params.id)
    res.status(200).json({
     "seccess" : true,
     "data" : getSingleReview
    })
}

exports.createReview= async (req , res)=>{
    const newReview = await Review.create(req.body)
    res.status(201).json({
        "seccess" : true,
        "data" : newReview
    })
}

exports.updateReview= async (req , res)=>{
    await Review.update(req.body,{
        where:{
            id: req.params.id
        }
    })
    const SingleReview = await Review.findByPk(req.params.id)
    res.status(200).json({
     "seccess" : true,
     "data" : SingleReview
    })
}

exports.deleteReview = async (req,res) => {
    await Review.destroy({
        where: {
            id: req.params.id
        }
    })
    const SingleReview = await Review.findByPk(req.params.id)
    res.status(200).json({"success": true, "data": SingleReview})
}