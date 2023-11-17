import {
  // DROPPED ASSET CLASS
  dropAsset,
  dropWebImageAsset,
  getDroppedAssetsWithUniqueName,
  getDroppedAssetDetails,
  removeDroppedAssetsUniqueName,
  removeDroppedAsset,
  // USER CLASS
  getUser,
  updateUserDataObject,
  // VISITOR CLASS
  getVisitor,
  moveVisitor,
  updateLastVisited,
  updateVisitorDataObject,
  // WORLD CLASS
  getWorldDataObject,
  getWorldDetails,
  updateWorldDataObject,
  updateWorldDetails,
} from "./utils/index.js";

import express from "express";
const router = express.Router();

// Dropped Asset
// Gets all dropped assets with unique name
router.get("/dropped-asset-with-unique-name", getDroppedAssetsWithUniqueName); // { isPartial: boolean, uniqueName: string }
router.post("/dropped-asset/web-image", dropWebImageAsset); // { isInteractive: boolean, layers: {bottom: string, top: string}, position: {x: number, y: number }, uniqueName: string }
router.post("/dropped-asset/remove-all-with-unique-name", removeDroppedAssetsUniqueName); // { isPartial: boolean, uniqueName: string }
// This has to go last
router.post("/dropped-asset", dropAsset); // { id: string, isInteractive: boolean, position: {x: number, y: number }, uniqueName: string }

// Dropped Asset Instance
router.post("/dropped-asset/get/:droppedAssetId", getDroppedAssetDetails); // { includeDataObject: boolean }
router.delete("/dropped-asset/:droppedAssetId", removeDroppedAsset);

// User
router.put("/user/:profileId/data", updateUserDataObject); // { dataObject: object }
router.get("/user/:profileId", getUser);

// Visitor
// visitorId comes from interactive nonce
router.get("/visitor", getVisitor); // { includeDataObject: boolean }
router.put("/visitor/last-visited", updateLastVisited);
router.put("/visitor/move", moveVisitor);
router.put("/visitor/data", updateVisitorDataObject); // { dataObject: object }

// World
// urlSlug comes from interactive nonce
router.get("/world/data-object", getWorldDataObject); // Does not include world details
router.put("/world/data-object", updateWorldDataObject); // { dataObject: object }
router.get("/world", getWorldDetails); // { includeDataObject: boolean }
router.put("/world", updateWorldDetails); // See file for inputs

export default router;
