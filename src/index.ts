import { config } from "dotenv";

console.log(config().parsed?.NODE_PORT)