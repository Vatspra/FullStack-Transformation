const { body } = require('express-validator');

const validateTask = [
  body('title')
    .notEmpty()
    .withMessage('Title is required')
    .isLength({ max: 50 })
    .withMessage('Title must not exceed 50 characters'),
  body('description')
    .notEmpty()
    .withMessage('Description is required')
    .isLength({ max: 200 })
    .withMessage('Description must not exceed 200 characters'),
  body('status')
    .optional()
    .isIn(['pending', 'in-progress', 'completed'])
    .withMessage('Invalid status value'),
];

module.exports = validateTask;
