import { World } from "../topiaInit.js";
import { errorHandler } from "../errorHandler.js";

export const getWorldDataObject = async (credentials) => {
  try {
    const { urlSlug } = credentials;
    const world = World.create(urlSlug, { credentials });
    await world.fetchDataObject();
    return world.dataObject;
  } catch (error) {
    errorHandler({
      error,
      functionName: "getWorldDataObject",
      message: "Error getting world details",
      req,
      res,
    });
  }
};

export const updateWorldDataObject = async (credentials, dataObject) => {
  try {
    const { urlSlug } = credentials;
    const world = World.create(urlSlug, { credentials });
    await world.updateDataObject(dataObject);
    return world.dataObject;
  } catch (error) {
    errorHandler({
      error,
      functionName: "updateWorldDataObject",
      message: "Error updating world data object",
      req,
      res,
    });
  }
};

export const incrementWorldDataObjectValue = async (credentials, amount, path) => {
  try {
    const { urlSlug } = credentials;
    const world = World.create(urlSlug, { credentials });
    // Can also pass in a lock object as third argument of type
    // { lockId: string, releaseLock?: boolean }
    await world.incrementDataObjectValue(path, amount);
    return world.dataObject;
  } catch (error) {
    errorHandler({
      error,
      functionName: "incrementWorldDataObjectValue",
      message: "Error incrementing world data object",
      req,
      res,
    });
  }
};
