import Joi from 'joi';

export const contactSchema = Joi.object({
  Name: Joi.string().min(2).max(50).required().messages({
    'string.empty': 'Name is required',
    'string.min': 'Name should have at least 2 characters',
    'string.max': 'Name should have at most 50 characters',
  }),
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required()
    .messages({
      'string.empty': 'Email is required',
      'string.email': 'Please enter a valid email address',
    }),
  Phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required()
    .messages({
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Phone number must be 10-15 digits',
    }),
  Message: Joi.string().min(5).max(1000).required().messages({
    'string.empty': 'Message is required',
    'string.min': 'Message should have at least 5 characters',
    'string.max': 'Message should have at most 1000 characters',
  }),
});
