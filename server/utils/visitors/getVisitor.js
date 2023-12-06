import { Visitor } from "../topiaInit.js";
import { errorHandler } from "../errorHandler.js";

export const getVisitor = async (credentials) => {
  const { visitorId, urlSlug } = credentials;
  try {
    const visitor = await Visitor.get(visitorId, urlSlug, {
      credentials,
    });
    if (!visitor || !visitor.username) throw "Not in world";
    await visitor.fetchDataObject();
    return visitor;
  } catch (error) {
    errorHandler({
      error,
      functionName: "getVisitor",
      message: "Error getting visitor",
      req,
      res,
    });
  }
};
