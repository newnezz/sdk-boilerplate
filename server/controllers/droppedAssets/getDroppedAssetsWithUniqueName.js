import { World, errorHandler } from "../../utils/index.js";

export const getDroppedAssetsWithUniqueName = async (req, res) => {
  try {
    const { interactivePublicKey, interactiveNonce, isPartial, uniqueName, urlSlug, visitorId } = req.query;

    const world = World.create(urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });
    const droppedAssets = await world.fetchDroppedAssetsWithUniqueName({
      isPartial,
      uniqueName,
    });

    return res.json({ droppedAssets, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "getDroppedAssetsWithUniqueName",
      message: "Error fetching dropped assets with unique name",
      req,
      res,
    });
  }
};
