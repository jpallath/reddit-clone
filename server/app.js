import express from "express";
import mongoose from "mongoose";
import routes from "./routes";

mongoose.connect("mongodb://localhost:27017/redditclone", () => {
  console.log("connected to mongodb");
});

const app = express();

app.use("/api", routes);

export default app;
