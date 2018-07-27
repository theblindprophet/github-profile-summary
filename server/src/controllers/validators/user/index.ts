import { celebrate, Joi } from "celebrate";

const getAllUsers = celebrate({
  query: {
    email: Joi.string(),
    password: Joi.string(),
  },
});

const getUser = celebrate({
  params: {
    id: Joi.string().required(),
  },
});

const postUser = celebrate({
  body: Joi.object().keys({
    email: Joi.string(),
    password: Joi.string(),
  }),
});

export default {
  getAllUsers,
  getUser,
  postUser
};
