import { app } from "./app";
import { connectDB } from "./db/connect";
import { env } from "./config/env";

connectDB();

app.listen(env.PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${env.PORT}`);
});
