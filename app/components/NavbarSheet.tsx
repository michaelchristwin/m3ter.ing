import { Link } from "react-router";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "~/components/ui/sheet";

const NavbarSheet: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <Sheet>
      <SheetTrigger asChild>{children}</SheetTrigger>
      <SheetContent className={`py-[70px] px-[30px]`}>
        <SheetHeader className={`hidden`}>
          <SheetTitle></SheetTitle>
          <SheetDescription></SheetDescription>
        </SheetHeader>
        <ul
          className={`text-[25px] text-neutral-700 font-[600] space-y-[30px]`}
        >
          <li>
            <Link to={`https://docs.m3ter.ing/`} target={`_blank`}>
              Docs
            </Link>
          </li>
          <li>
            <Link to={`/build`}>Build</Link>
          </li>
          <li>
            <Link to={`/governance`}>Governance</Link>
          </li>
          <li>
            <Link to={`/apps`}>Apps</Link>
          </li>
        </ul>
      </SheetContent>
    </Sheet>
  );
};

export default NavbarSheet;
