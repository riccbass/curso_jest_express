import TodoModel from "../model/todo.model.mjs";

export const createTodo = async (req, res, next) => {
  const createdModel = await TodoModel.create(req.body);
  res.status(201).json(createdModel);
};
