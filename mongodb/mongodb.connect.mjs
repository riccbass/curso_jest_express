import mongoose from "mongoose";

export const connect = async () => {
  try {
    await mongoose.connect("mongodb://batata:69@localhost:27017/test", {
      useNewUrlParser: true,
    });
    console.log("connected to mongodb");
  } catch (err) {
    console.log("Error connecting to mongodb");
    console.log(err);
  }
};
