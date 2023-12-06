import { World, errorHandler } from "../../utils/index.js";

export const getWorldDetails = async (req, res) => {
  try {
    const { urlSlug, interactiveNonce, interactivePublicKey, visitorId } = req.query;
    const { includeDataObject } = req.body;
    const world = World.create(urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });
    await world.fetchDetails();
    if (includeDataObject) await world.fetchDataObject();
    res.json({ world, success: true });
    return world;
  } catch (error) {
    errorHandler({
      error,
      functionName: "getWorldDetails",
      message: "Error getting world details",
      req,
      res,
    });
  }
};
