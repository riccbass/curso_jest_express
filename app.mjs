import express from "express";
import todoRoutes from "./routes/todo.routes.mjs";

const app = express();

//pra usar json
app.use(express.json());

app.use("/todos", todoRoutes);

app.get("/", (req, res) => {
  res.json("Hello World!");
});

app.listen(3000);
export default app;
