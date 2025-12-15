import { app } from "./app";
import { connectDB, env } from "./config";
import { logger } from "./utils/logger";

connectDB();

app.listen(env.PORT, () => {
  logger.info(`Server listening on http://localhost:${env.PORT}`);
});
