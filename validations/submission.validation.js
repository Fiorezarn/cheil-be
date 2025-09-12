const { errorClientResponse } = require('@/helpers/response.helper');
const Joi = require('joi');

const SubmissionValidation = (req, res, next) => {
 const schema = Joi.object({
  name: Joi.string().trim().required().messages({
   'string.base': 'Nama harus berupa teks.',
   'string.empty': 'Nama wajib diisi.',
   'any.required': 'Nama wajib diisi.',
  }),

  phone: Joi.string()
   .pattern(/^08\d{8,11}$/)
   .required()
   .messages({
    'string.empty': 'Nomor telepon wajib diisi.',
    'string.pattern.base': 'Nomor telepon tidak valid.',
    'any.required': 'Nomor telepon wajib diisi.',
   }),

  email: Joi.string().email().allow('').messages({
   'string.email': 'Format email tidak valid.',
  }),

  image: Joi.string().allow('').optional().messages({
   'string.empty': 'Gambar tidak boleh kosong.',
  }),
 });

 const { error } = schema.validate(req.body);
 if (error) {
  return errorClientResponse(res, error.details[0].message, 422);
 }

 return next();
};

module.exports = { SubmissionValidation };
