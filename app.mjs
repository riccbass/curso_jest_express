import express from "express";
import todoRoutes from "./routes/todo.routes.mjs";
import { connect } from "./mongodb/mongodb.connect.mjs";

connect();

const app = express();

//pra usar json
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

export default app;
