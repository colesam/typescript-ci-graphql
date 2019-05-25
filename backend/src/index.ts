import "reflect-metadata";
import { appFactory } from "./App";

const port = process.env.PORT || 8080;

(async function() {
  const app = await appFactory();
  await app.start(port);
  console.log(`Server is running on localhost:${port}`);
})();
