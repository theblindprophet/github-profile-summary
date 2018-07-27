import { celebrate, Joi } from "celebrate";

const getUserData = celebrate({
  params: {
    userName: Joi.string().required(),
  },
});

export default {
  getUserData
};