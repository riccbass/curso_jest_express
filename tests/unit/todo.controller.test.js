import { createTodo } from "../../controllers/todo.controller.mjs";
// const TodoController = require("../../controllers/todo.controller");

describe("TodoController.createTodo", () => {
  it("should have a createTodo function", () => {
    expect(typeof createTodo).toBe("function");
  });
});
