import { IncomingMessage, ServerResponse } from "http";

import { store } from "../store/store";
import { BASIC_ENDPOINT } from "../utils/constants/constants";
import { createUserFromBody } from "../utils/create-user-from-body";
import { sendResponse } from "../utils/send-response";

export function handlePostRoutes(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  if (req.url === BASIC_ENDPOINT) {
    let body = '';
    req
      .on('data', (chunk: string) => {
        body += chunk.toString();
      })
      .on('end', () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};
          const newUser = createUserFromBody(parsedBody);
          const addedUser = JSON.stringify(store.addUser(newUser));
          sendResponse(res, addedUser, 200);
        } catch {
          sendResponse(res, 'Check body params', 400);
        }
      });
  } else {
    sendResponse(res, 'No such endpoint', 404);
  }
}
