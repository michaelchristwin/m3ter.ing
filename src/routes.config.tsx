/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import { lazy } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import "./App.css";

const root = document.getElementById("root");

const routes = [
  {
    path: "/",
    component: lazy(() => import("./routes/index")),
  },
];

render(
  () => (
    <MetaProvider>
      <Router>{routes}</Router>
    </MetaProvider>
  ),
  root!
);
