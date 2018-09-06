import app from "./src/app";
import { logger, port } from "./lib/config";

// mongoose.connect(mongoUrl);

app.listen(port);
logger.info(`App listening on port ${port}!`);
