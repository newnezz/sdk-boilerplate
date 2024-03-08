import express from "express";
import {
  handleDropAsset,
  handleGetDroppedAssetsWithUniqueName,
  handleGetWorldDetails,
  handleGetDroppedAsset,
  handleGetVisitor,
  handleUpdateWorldDataObject,
  moveVisitor,
  handleRemoveDroppedAssets,
} from "./controllers/index.js";
import { getVersion } from "./utils/getVersion.js";

const router = express.Router();

app.post('/chicken', async (req, res) => {
  try {
    // Parse webhook payload
    const { assetId, interactiveNonce, interactivePublicKey, urlSlug, visitorId } = req.body;

    // Use RTSDK to update game world based on the clicked asset
    const droppedAsset = await DroppedAsset.get(assetId, urlSlug, {
      credentials: {
        interactiveNonce,
        interactivePublicKey,
        visitorId,
      },
    });

    // Example: Move the player to a random spot on the map
    const newX = Math.random() * 10; // Example: random X coordinate
    const newY = Math.random() * 10; // Example: random Y coordinate
    await droppedAsset.updateDataObject({ x: newX, y: newY });

    // Send back success response
    res.status(200).send('Game world updated successfully');
  } catch (error) {
    // Handle errors
    console.error('Error updating game world:', error);
    res.status(500).send('An error occurred while updating the game world');
  }
});

router.get("/system/health", (req, res) => {
  return res.json({
    appVersion: getVersion(),
    status: "OK",
  });
});

// Dropped Assets
router.get("/dropped-asset-with-unique-name", handleGetDroppedAssetsWithUniqueName);
router.post("/dropped-asset", handleDropAsset);
router.get("/dropped-asset", handleGetDroppedAsset);
router.delete("/dropped-asset", handleRemoveDroppedAssets);

// Visitor
router.get("/visitor", handleGetVisitor);
router.put("/visitor/move", moveVisitor);

// World
router.get("/world", handleGetWorldDetails);
router.put("/world/data-object", handleUpdateWorldDataObject);

export default router;
