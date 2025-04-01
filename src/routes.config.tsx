/* @refresh reload */
import { render } from "solid-js/web";
import { Router } from "@solidjs/router";
import SolarBg from "~/assets/solarbg-ghiblify.png";
import "./index.css";
import { lazy, ParentComponent } from "solid-js";
import { MetaProvider } from "@solidjs/meta";
import "./App.css";
import Navbar from "./components/Navbar";
// import Footer from "./components/Footer";

const Layout: ParentComponent = ({ children }) => {
  return (
    <main
      class={`parallax h-[100vh] overflow-y-auto overflow-x-hidden wrapper relative`}
    >
      <img src={SolarBg} class={`background`} />
      <Navbar />
      {children}
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
