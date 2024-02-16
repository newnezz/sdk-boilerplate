import { errorHandler } from "../../utils/index.js";

export const removeDroppedAsset = async (req, res) => {
  try {
    const droppedAsset = await getDroppedAsset(req.query);

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
