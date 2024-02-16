import express from "express";
import {
  dropAsset,
  handleGetDroppedAsset,
  getDroppedAssetsWithUniqueName,
  getWorldDetails,
  handleGetVisitor,
  moveVisitor,
  removeDroppedAsset,
  updateWorldDetails,
} from "./controllers/index.js";
import { getVersion } from "./utils/getVersion.js";

const router = express.Router();

router.get("/system/health", (req, res) => {
  return res.json({
    appVersion: getVersion(),
    status: "OK",
  });
});

// Dropped Assets
router.get("/dropped-asset-with-unique-name", getDroppedAssetsWithUniqueName); // { isPartial: boolean, uniqueName: string }
router.post("/dropped-asset", dropAsset); // { assetId: string, isInteractive: boolean, position: {x: number, y: number }, uniqueName: string }
router.get("/dropped-asset", handleGetDroppedAsset);
router.delete("/dropped-asset", removeDroppedAsset);

// Visitor
router.get("/visitor", handleGetVisitor);
router.put("/visitor/move", moveVisitor);

// World
router.get("/world", getWorldDetails);
router.put("/world", updateWorldDetails); // See file for inputs

export default router;
