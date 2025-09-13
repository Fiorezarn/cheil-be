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
    'string.pattern.base':
     'Phone number must start with 08 and contain 10–13 digits.',
    'any.required': 'Phone number is required.',
   }),
  email: Joi.string().email().required().messages({
   'string.email': 'Email format is not valid.',
   'string.empty': 'Email is required.',
   'any.required': 'Email is required.',
  }),
 });

 const { error } = schema.validate(req.body);
 if (error) {
  return errorClientResponse(res, error.details[0].message, 422);
 }

 if (!req.file) {
  return errorClientResponse(res, 'Image is required.', 422);
 }

 const allowedMimeTypes = ['image/jpeg', 'image/jpg', 'image/png'];
 if (!allowedMimeTypes.includes(req.file.mimetype)) {
  return errorClientResponse(
   res,
   'Image must be JPEG, JPG, or PNG format.',
   422
  );
 }

 return next();
};

module.exports = { SubmissionValidation };
