import { IncomingMessage, ServerResponse } from "http";
import { validate } from "uuid";

import { store } from "../store/store";
import { BASIC_ENDPOINT } from "../utils/constants/constants";
import { getIdFromUrl } from "../utils/get-id-from-url";
import { sendResponse } from "../utils/send-response";

export function handleGetRoutes(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  const userId = getIdFromUrl(req.url);
  if (req.url === BASIC_ENDPOINT) {
    const allUsers = JSON.stringify(store.getAllUsers());
    sendResponse(res, allUsers, 200);
  } else if (userId) {
    if (!validate(userId)) {
      sendResponse(res, 'Id is invalid', 400);
      return;
    }
    try {
      const user = JSON.stringify(store.getUserById(userId));
      sendResponse(res, user, 200);
    } catch {
      sendResponse(res, 'No such User!', 404);
    }
  } else {
    sendResponse(res, 'No such endpoint', 404);
  }
}
