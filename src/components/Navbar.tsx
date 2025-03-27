import { A } from "@solidjs/router";

const Navbar = () => {
  return (
    <nav
      class={`w-full flex h-[50px] px-[90px] z-10 bg-white justify-between fixed top-0 left-0 items-center`}
    >
      <A href="/" class={`text-orange-500 text-[23px] bowlby-one-regular`}>
        m3tering
      </A>

      <ul
        class={`flex space-x-[30px] items-center text-[17px] text-neutral-700 font-[500]`}
      >
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
    </nav>
  );
};

export default Navbar;
