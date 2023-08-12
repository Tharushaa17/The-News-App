const { check } = require('express-validator');

exports.validateUserSingup = [
    check('first_name').trim().not().isEmpty().not().isNumeric(),
    check('last_name').trim().not().isEmpty().not().isNumeric(),
    check('email').normalizeEmail().not().isEmail().withMessage('Invalid Email'),
    check('password').trim().not().isEmpty().isLength({min:4, max:12})
]