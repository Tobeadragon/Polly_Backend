const express = require('express');
const router = express.Router();
const { check }  = require('express-validator')


//check normalize Email!!!!!!!!!!!!!!!!!!!!!!!!!!!!

const {userGetController,
       userPostController,
       userEinloggen,
       userEinloggenGoogle
      }=require('../controller/users_controller')

const validUser = [
  check('name')
    .not()
    .isEmpty()
    .isLength({min:2})
    .withMessage('Please enter a name.')
    .trim()
    .escape(),
  check('email')
    .isEmail()
    .withMessage('Not a valid email.')
    .trim()
    .normalizeEmail(),
  check('password')
    .not()
    .isEmpty()
    .isLength({min:8})
    .withMessage('Your password needs to have 8 characters.')
    .matches('[0-9]').withMessage('Your password must contain a number')
    .trim()
    .escape(),
    
];

router
    .route('/')
        .get(userGetController)
        .post(validUser,userPostController)
        

router.route('/login')
        .post(userEinloggen)

router.route('/googlelogin')
        .post(userEinloggenGoogle)






module.exports = router;
