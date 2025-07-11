import Joi from 'joi';

export const LoginSchema = Joi.object({
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  Password: Joi.string().min(8).max(30).required(),
});

export const SignUpSchema = Joi.object({
  Name: Joi.string().min(3).max(30).required(),
  Email: Joi.string()
    .email({ tlds: { allow: false } })
    .required(),
  Password: Joi.string().min(8).max(30).required(),
  ConfirmPassword: Joi.string().valid(Joi.ref('Password')).required(),
});
