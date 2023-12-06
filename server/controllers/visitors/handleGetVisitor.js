import { errorHandler, getVisitor } from "../../utils/index.js";

export const handleGetVisitor = async (req, res) => {
  try {
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = req.query;
    const credentials = {
      assetId,
      interactiveNonce,
      interactivePublicKey,
      visitorId,
      urlSlug,
    };
    const visitor = await getVisitor(credentials);
    if (!visitor || !visitor.username) throw "Not in world";
    if (includeDataObject) await visitor.fetchDataObject();
    return res.json({ visitor, success: true });
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
