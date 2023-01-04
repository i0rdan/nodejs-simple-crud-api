import { IncomingMessage, ServerResponse } from "http";
import { validate } from "uuid";

import { store } from "../store/store";
import { getIdFromUrl } from "../utils/get-id-from-url";
import { sendResponse } from "../utils/send-response";

export function handleDeleteRoutes(req: IncomingMessage, res: ServerResponse<IncomingMessage>): void {
  const userId = getIdFromUrl(req.url);
  if (userId) {
    if (!validate(userId)) {
      sendResponse(res, 'Id is invalid', 400);
      return;
    }
    try {
      store.deleteUser(userId);
      sendResponse(res, '', 204);
    } catch {
      sendResponse(res, 'No such User!', 404);
    }
  } else {
    sendResponse(res, 'No such endpoint', 404);
  }
}
