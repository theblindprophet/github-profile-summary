import { celebrate, Joi } from "celebrate";

const putUser = celebrate({
  params: {
    id: Joi.string().required(),
  },
  body: Joi.object().keys({
    email: Joi.string(),
    password: Joi.string(),
  })
});

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

const deleteUser = celebrate({
  params: {
    id: Joi.string().required(),
  },
});

export default {
  putUser,
  getAllUsers,
  getUser,
  postUser,
  deleteUser
};
