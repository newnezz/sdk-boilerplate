import { Asset, DroppedAsset, errorHandler } from "../../utils/index.js";

export const dropAsset = async (req, res) => {
  try {
    const { urlSlug } = req.query;
    const { assetId, isInteractive, position, uniqueName } = req.body;

    const asset = Asset.create(assetId, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });

    const droppedAsset = await DroppedAsset.drop(asset, {
      isInteractive,
      interactivePublicKey: process.env.INTERACTIVE_KEY,
      position,
      uniqueName,
      urlSlug,
    });

    return res.json({ droppedAsset, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "dropAsset",
      message: "Error dropping asset",
      req,
      res,
    });
    return null;
  }
};
