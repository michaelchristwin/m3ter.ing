/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import { lazy, ParentComponent } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import "./index.css";
import "./App.css";

const Layout: ParentComponent = ({ children }) => {
  return <main>{children}</main>;
};

const root = document.getElementById("root");

const routes = [
  {
    path: "/",
    component: lazy(() => import("./routes/home")),
  },
];

render(
  () => (
    <MetaProvider>
      <Router root={Layout}>{routes}</Router>
    </MetaProvider>
  ),
  root!
);
