import { IncomingMessage, ServerResponse } from "http";
import { User } from "../interfaces/User";

import { store } from "../store/store";
import { getIdFromUrl } from "../utils/get-id-from-url";
import { sendResponse } from "../utils/send-response";

export function handlePutRoutes(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  const userId = getIdFromUrl(req.url);
  if (userId) {
    let body = '';
    req
      .on('data', (chunk: string) => {
        body += chunk.toString();
      })
      .on('end', () => {
        try {
          const parsedBody = body ? JSON.parse(body) : {};
          const newUser = { id: userId } as User;
          if (parsedBody['username']) {
            newUser['username'] = parsedBody['username'];
          }
          if (parsedBody['age']) {
            newUser['age'] = parsedBody['age'];
          }
          if (parsedBody['hobbies']) {
            newUser['hobbies'] = parsedBody['hobbies'];
          }
          const updatedUser = JSON.stringify(store.updateUser(newUser));
          sendResponse(res, updatedUser, 200);
        } catch {
          sendResponse(res, 'No such user!', 400);
        }
      });
  } else {
    sendResponse(res, 'No such endpoint', 404);
  }
}
