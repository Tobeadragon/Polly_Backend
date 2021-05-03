const express = require('express');
const router = express.Router();
//const { check }  = require('express-validator')
const {antwortPostController, antwortIdGetController}=require('../controller/antwort_controller')


router
    .route('/')
        .post(antwortPostController)
    
router
    .route('/:id')
        .get(antwortIdGetController)




module.exports = router