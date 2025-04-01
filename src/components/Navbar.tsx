import { A } from "@solidjs/router";
import NavbarSheet from "./NavbarSheet";

const Navbar = () => {
  return (
    <nav
      class={`w-full flex h-[50px] px-[90px] bg-transparent justify-between items-center`}
    >
      <A href="/" class={`text-orange-500 text-[23px] bowlby-one-regular`}>
        m3tering
      </A>

      <NavbarSheet>
        <button
          type="button"
          class={`w-[40px] h-[40px] rounded-full bg-neutral-400 flex items-center justify-center`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="white"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
            class="lucide lucide-menu-icon lucide-menu"
          >
            <line x1="4" x2="20" y1="12" y2="12" />
            <line x1="4" x2="20" y1="6" y2="6" />
            <line x1="4" x2="20" y1="18" y2="18" />
          </svg>
        </button>
      </NavbarSheet>
    </nav>
  );
};

export default Navbar;
