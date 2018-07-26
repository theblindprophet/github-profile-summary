import app from "./src/app";
import mongoose from "mongoose";
import { logger, port, mongoUrl } from "./lib/config";

mongoose.connect(mongoUrl);

app.listen(port);
logger.info(`App listening on port ${port}!`);
