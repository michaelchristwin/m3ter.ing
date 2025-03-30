/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import "./index.css";
import { lazy, ParentComponent } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const Layout: ParentComponent = ({ children }) => {
  return (
    <main class={`relative h-fit`}>
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};

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
      <Router root={Layout}>{routes}</Router>
    </MetaProvider>
  ),
  root!
);
