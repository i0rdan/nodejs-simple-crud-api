import { IncomingMessage, ServerResponse } from "http";

import { sendResponse } from "../utils/send-response";
import { handleDeleteRoutes } from "./delete-routes";
import { handleGetRoutes } from "./get-routes";
import { handlePostRoutes } from "./post-routes";
import { handlePutRoutes } from "./put-routes";

export function handleMainRoute(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  switch(req.method) {
    case 'GET':
      handleGetRoutes(req, res);
      break;
    case 'DELETE':
      handleDeleteRoutes(req, res);
      break;
    case 'POST':
      handlePostRoutes(req, res);
      break;
    case 'PUT':
      handlePutRoutes(req, res);
      break;
    default: 
      sendResponse(res, 'No such endpoint', 404);
  }
}
