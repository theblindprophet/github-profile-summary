import express, { Application } from "express";
import helmet from "helmet";
import bodyParser from "body-parser";
import controllers from "./controllers";
import { errors } from "celebrate";

const app: Application = express();
app.use(helmet());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use("/api/v1/", controllers);
app.use(errors());

export default app;