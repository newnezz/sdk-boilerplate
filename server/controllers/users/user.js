import { User, errorHandler } from "../../utils/index.js";

export const getUser = async (req, res) => {
  try {
    const { profileId } = req.params;
    // Doesn't require interactive nonce
    const user = await User.create({ profileId });
    // This is the primary function of the User class, so always include
    await user.fetchUserDataObject();
    return res.json({ user, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "getUser",
      message: "Error fetching user",
      req,
      res,
    });
  }
};

export const updateUserDataObject = async (req, res) => {
  try {
    const { dataObject } = req.body;
    const { profileId } = req.params;
    // Doesn't require interactive nonce
    const user = await User.create({ profileId });
    await user.updateDataObject(dataObject);
    return res.json({ user, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "updateUserDataObject",
      message: "Error updating user object",
      req,
      res,
    });
  }
};

export const incrementUserDataObjectValue = async (req, res) => {
  try {
    const { path, amount } = req.body;
    const { profileId } = req.params;
    const user = await User.create({ profileId });
    // Can also pass in a lock object as third argument of type
    // { lockId: string, releaseLock?: boolean }
    await user.incrementDataObjectValue(path, amount);
    return res.json({ user, success: true });
  } catch (error) {
    errorHandler({
      error,
      functionName: "incrementUserDataObjectValue",
      message: "Error incrementing user data object",
      req,
      res,
    });
  }
};
