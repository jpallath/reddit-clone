import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import routes from "./routes";
import cors from "cors";

mongoose.connect("mongodb://localhost:27017/redditclone", () => {
  console.log("connected to mongodb");
});

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use("/api", routes);

export default app;
