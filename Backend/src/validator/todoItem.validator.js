const { body } = require("express-validator");

exports.itemValidator=[
    body('todoTask')
    .notEmpty()
    .withMessage('todo task is required')
    .isLength({min:3})
    .withMessage('todo task must be at least 3 character long'),

    body('todoCompleteTime')
    .isLength({min:3})
    .withMessage('todo complete time must be at least 3 character long'),

    body('todoComplete')
    .isBoolean()
    .withMessage('todo complete must be given as true or false')

    
]