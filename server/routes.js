import { getDroppedAssetDetails, getWorldDetails } from "./utils/index.js";
import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  res.json({ message: "Hello from server!" });
});

router.get("/world/:urlSlug", getWorldDetails);

router.get("/dropped-asset", getDroppedAssetDetails);

export default router;
