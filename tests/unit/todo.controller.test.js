import { createTodo } from "../../controllers/todo.controller.mjs";
import TodoModel from "../../model/todo.model.mjs";
import httpMocks from "node-mocks-http";

import newTodo from "../mock-data/new-todo.json";

//acho que isso é o retorno, não o teste em si
TodoModel.create = jest.fn();

//variáveis aqui, para não ficafem presas no escopo
let req, res, next;

beforeEach(() => {
  req = httpMocks.createRequest();
  res = httpMocks.createResponse();
  next = null;
});

describe("TodoController.createTodo", () => {
  beforeEach(() => {
    req.body = newTodo;
  });

  it("should have a createTodo function", () => {
    expect(typeof createTodo).toBe("function");
  });

  it("should call TodoModel.create", () => {
    createTodo(req, res, next);
    expect(TodoModel.create).toBeCalledWith(newTodo);
  });

  it("should return 201 response code", async () => {
    await createTodo(req, res, next);
    expect(res.statusCode).toBe(201);
    expect(res._isEndCalled()).toBeTruthy();
  });

  it("should return json body in response", async () => {
    TodoModel.create.mockReturnValue(newTodo);
    await createTodo(req, res, next);
    expect(res._getJSONData()).toStrictEqual(newTodo);
  });
});
