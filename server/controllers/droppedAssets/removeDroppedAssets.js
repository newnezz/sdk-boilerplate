import { DroppedAsset, errorHandler } from "../../utils/index.js";

export const removeDroppedAsset = async (req, res) => {
  try {
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = req.query;
    const droppedAsset = await DroppedAsset.get(assetId, urlSlug, {
      credentials: {
        assetId,
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });
    if (!droppedAsset) throw { message: "No dropped asset found" };
    droppedAsset.deleteDroppedAsset();
    return res.json({ success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "removeDroppedAsset",
      message: "Error removing dropping asset",
      req,
      res,
    });
  }
};
