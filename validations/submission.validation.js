const { errorClientResponse } = require('@/helpers/response.helper');
const Joi = require('joi');

const SubmissionValidation = (req, res, next) => {
 const schema = Joi.object({
  name: Joi.string().trim().required().messages({
   'string.base': 'Name must be a text.',
   'string.empty': 'Name is required.',
   'any.required': 'Name is required.',
  }),

  phone: Joi.string()
   .pattern(/^08\d{8,11}$/)
   .required()
   .messages({
    'string.empty': 'Phone number is required.',
    'string.pattern.base': 'Phone number is not valid.',
    'any.required': 'Phone number is required.',
   }),

  email: Joi.string().email().allow('').messages({
   'string.email': 'Email format is not valid.',
  }),

  image: Joi.string().allow('').optional().messages({
   'string.empty': 'Image cannot be empty.',
  }),
 });

 const { error } = schema.validate(req.body);
 if (error) {
  return errorClientResponse(res, error.details[0].message, 422);
 }

 return next();
};

module.exports = { SubmissionValidation };
