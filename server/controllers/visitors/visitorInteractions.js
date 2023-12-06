import { getVisitor, errorHandler } from "../../utils/index.js";

export const openIframe = async (req, res) => {
  try {
    const { link, shouldOpenInDrawer, title } = req.body;
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = req.query;
    const credentials = {
      assetId,
      interactiveNonce,
      interactivePublicKey,
      visitorId,
      urlSlug,
    };
    const visitor = await getVisitor(credentials);
    await visitor.openIframe({ link, shouldOpenInDrawer, title });
    return res.json({ visitor, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "openIframe",
      message: "Error opening iFrame in visitor UI",
      req,
      res,
    });
  }
};

export const fireToast = async (req, res) => {
  try {
    const { groupId, title, text } = req.body;
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = req.query;
    const credentials = {
      assetId,
      interactiveNonce,
      interactivePublicKey,
      visitorId,
      urlSlug,
    };
    const visitor = await getVisitor(credentials);
    await visitor.fireToast({ groupId, title, text });
    return res.json({ visitor, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "fireToast",
      message: "Error firing toast in visitor UI",
      req,
      res,
    });
  }
};

export const moveVisitor = async (req, res) => {
  try {
    const {
      moveTo, // { x, y }
      shouldTeleportVisitor,
    } = req.body;
    const { assetId, interactivePublicKey, interactiveNonce, urlSlug, visitorId } = req.query;
    const credentials = {
      assetId,
      interactiveNonce,
      interactivePublicKey,
      visitorId,
      urlSlug,
    };
    const visitor = await getVisitor(credentials);
    if (!moveTo || !moveTo.x || !moveTo.y) throw "Invalid movement coordinates";
    await visitor.moveVisitor({ x: moveTo.x, y: moveTo.y, shouldTeleportVisitor });
    return res.json({ visitor, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "moveVisitor",
      message: "Error moving visitor",
      req,
      res,
    });
  }
};
