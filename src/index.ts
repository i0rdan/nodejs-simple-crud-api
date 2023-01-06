import { config } from "dotenv";
import { createServer } from "http";

import { handleMainRoute } from "./routing/main-route";

const PORT = config().parsed?.NODE_PORT || 8080;

export const server = createServer((req, res) => handleMainRoute(req, res));
server.listen(PORT, () => {
  console.log(`Server is listening on http://localhost:${PORT}!`);
});
