import { DroppedAsset } from "../topiaInit.js";
import { errorHandler } from "../errorHandler.js";

export const getDroppedAsset = async (credentials) => {
  try {
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = credentials;

    const droppedAsset = await DroppedAsset.get(assetId, urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });

    if (!droppedAsset) throw "Dropped asset not found";

    return droppedAsset;
  } catch (error) {
    errorHandler({
      error,
      functionName: "getDroppedAsset",
      message: "Error getting dropped asset",
      req,
      res,
    });
  }
};
