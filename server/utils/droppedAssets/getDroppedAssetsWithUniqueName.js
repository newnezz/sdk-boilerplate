import { World } from "../topiaInit.js";
import error from "../errors.js";

export const getDroppedAssetsWithUniqueName = async (req, res) => {
  const { interactivePublicKey, interactiveNonce, isPartial, uniqueName, urlSlug, visitorId } = req.query;

  try {
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
    const normalized = droppedAssets.map((asset) => {
      let normalizedAsset = { ...asset };
      delete normalizedAsset["topia"];
      delete normalizedAsset["credentials"];
      delete normalizedAsset["jwt"];
      delete normalizedAsset["requestOptions"];
      return normalizedAsset;
    });
    if (res) res.json({ droppedAssets: normalized, success: true });
    return droppedAssets;
  } catch (e) {
    error("Fetching dropped assets with unique name", e, res);
  }
};