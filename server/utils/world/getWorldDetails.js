import { World } from "../topiaInit.js";

export const getWorldDetails = async (urlSlug) => {
  const world = World.create(urlSlug);
  await world.fetchDetails();
  return world;
};
