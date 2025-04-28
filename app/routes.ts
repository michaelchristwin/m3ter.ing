import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/animations", "routes/animations.tsx"),
  route("/testing", "routes/testing.tsx"),
] satisfies RouteConfig;
