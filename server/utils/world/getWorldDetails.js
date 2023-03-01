import { World } from "../topiaInit.js";

export const getWorldDetails = async (urlSlug) => {
  try {
    const world = World.create(urlSlug);
    await world.fetchDetails();
    res.json({ success: true, world });
  } catch (error) {
    console.log("Error getting world details", error);
    res.status(500).send({ error, success: false });
  }
};
