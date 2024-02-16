import { World, errorHandler } from "../../utils/index.js";

export const updateWorldDetails = async (req, res) => {
  try {
    const { urlSlug, interactiveNonce, interactivePublicKey, visitorId } = req.query;
    const { controls, description, forceAuthOnLogin, height, name, spawnPosition, width } = req.body;
    const world = World.create(urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });
    await world.updateDetails({ controls, description, forceAuthOnLogin, height, name, spawnPosition, width });
    res.json({ world, success: true });
    return;
  } catch (error) {
    errorHandler({
      error,
      functionName: "updateWorldDetails",
      message: "Error updating world details",
      req,
      res,
    });
  }
};
