import { errorHandler } from "../errorHandler.js";
import { getVisitor } from "./getVisitor.js";

export const updateLastVisited = async (credentials) => {
  try {
    const visitor = await getVisitor(credentials);
    await visitor.updateDataObject({ lastVisited: Date.now() });
    return visitor;
  } catch (error) {
    errorHandler({
      error,
      functionName: "updateLastVisited",
      message: "Error updating last visited",
      req,
      res,
    });
  }
};

export const incrementVisitorDataObjectValue = async (credentials, amount, path) => {
  try {
    const visitor = await getVisitor(credentials);
    // Can also pass in a lock object as third argument of type
    // { lockId: string, releaseLock?: boolean }
    await visitor.incrementDataObjectValue(path, amount);
    return visitor;
  } catch (error) {
    errorHandler({
      error,
      functionName: "incrementVisitorDataObjectValue",
      message: "Error incrementing visitor data object",
      req,
      res,
    });
  }
};
