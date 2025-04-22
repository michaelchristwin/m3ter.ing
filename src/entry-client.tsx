// @refresh reload
import { mount, StartClient } from "@solidjs/start/client";
import "~/lib/scroll-timeline";

mount(() => <StartClient />, document.getElementById("app")!);
