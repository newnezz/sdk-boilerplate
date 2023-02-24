import { Error, Home } from "@pages";

export const routes = [
  {
    id: "HOME",
    path: "/",
    component: Home,
    text: "Home",
  },
  {
    path: "/error",
    component: Error,
    text: "Error",
  },
];

export default routes;
