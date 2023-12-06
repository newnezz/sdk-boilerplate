import express from "express";
import {
  dropAsset,
  getDroppedAssetDetails,
  getDroppedAssetsWithUniqueName,
  getUser,
  getWorldDetails,
  handleGetVisitor,
  moveVisitor,
  removeDroppedAsset,
  updateUserDataObject,
  updateWorldDetails,
} from "./controllers/index.js";
const router = express.Router();

// Dropped Assets
router.get("/dropped-asset-with-unique-name", getDroppedAssetsWithUniqueName); // { isPartial: boolean, uniqueName: string }
router.post("/dropped-asset", dropAsset); // { id: string, isInteractive: boolean, position: {x: number, y: number }, uniqueName: string }
router.get("/dropped-asset", getDroppedAssetDetails);
router.delete("/dropped-asset", removeDroppedAsset);

// User
router.put("/user/:profileId/data", updateUserDataObject); // { dataObject: object }
router.get("/user/:profileId", getUser);

// Visitor
// visitorId comes from interactive nonce
router.get("/visitor", handleGetVisitor); // { includeDataObject: boolean }
router.put("/visitor/move", moveVisitor);

// World
// urlSlug comes from interactive nonce
router.get("/world", getWorldDetails); // { includeDataObject: boolean }
router.put("/world", updateWorldDetails); // See file for inputs

export default router;
