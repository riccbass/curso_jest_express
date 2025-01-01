import TodoModel from "../model/todo.model.mjs";

export const createTodo = (req, res, next) => {
  const createdModel = TodoModel.create(req.body);
  res.status(201).send().json(createdModel);
};
