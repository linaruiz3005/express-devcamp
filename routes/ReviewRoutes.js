const express  = require('express')
const {getAllReviews,getSingleReview,updateReview,deleteReview,createReview} = require('../controllers/ReviewController')
const router =express.Router()

router.route('/')
.get(getAllReviews)
.post(createReview)

router.route('/:id')
.get(getSingleReview)
.put(updateReview)
.delete(deleteReview)

module.exports = router