import request from "supertest";
import app from "../../app.mjs";

import newTodo from "../mock-data/new-todo.json";

const endpointUrl = "/todos/";

describe(endpointUrl, () => {
  it("POST /todos/", async () => {
    const response = await request(app).post(endpointUrl).send(newTodo);
    expect(response.body.title).toBe(newTodo.title);
    expect(response.body.done).toBe(newTodo.done);
    expect(response.statusCode).toBe(201);
  });
});
