import { ParentComponent } from "solid-js";
import { A } from "@solidjs/router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const NavbarSheet: ParentComponent = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger>{children}</SheetTrigger>
      <SheetContent class={`py-[70px]`}>
        <SheetHeader class={`hidden`}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul class={`text-[25px] text-neutral-700 font-[600] space-y-[30px]`}>
          <li>
            <A href={`https://docs.m3ter.ing/`} target={`_blank`}>
              Docs
            </A>
          </li>
          <li>
            <A href={`/build`}>Build</A>
          </li>
          <li>
            <A href={`/governance`}>Governance</A>
          </li>
          <li>
            <A href={`/apps`}>Apps</A>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
