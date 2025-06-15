import { SolarRow } from "~/assets/images";
import { FaXTwitter, FaDiscord } from "react-icons/fa6";
import { SiFarcaster } from "react-icons/si";
import { FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="w-full relative text-white bg-no-repeat bg-center bg-cover"
      style={{ backgroundImage: `url(${SolarRow.img.src})` }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-black/30"></div>

      {/* Main content container with glassmorphism */}
      <div className="relative z-10 glassmorph lg:p-[90px] p-[40px] shadow-lg border border-white border-opacity-20">
        <div className="lg:flex md:flex block justify-between">
          {/* Logo and company info */}
          <div className="mb-8 lg:mb-0 md:mb-0 lg:max-w-xs md:max-w-xs">
            <h2 className="text-xl font-[500] text-white mb-4 jello-stone">
              M3tering
            </h2>
            <p className="text-gray-200 mb-4">
              Creating beautiful sustainable experiences since 2025.
            </p>
            <div className="flex space-x-4 mb-6">
              <a
                href="https://discord.gg/afFvdhW4"
                target="_blank"
                className="text-white hover:text-gray-300 transition"
                aria-label="Facebook"
              >
                <FaDiscord size={24} />
              </a>
              <a
                href="https://x.com/M3tering"
                target="_blank"
                className="text-white hover:text-gray-300 transition"
                aria-label="X (formerly Twitter)"
              >
                <FaXTwitter size={24} />
              </a>
              <a
                href="https://farcaster.xyz/~/channel/m3ter-heads"
                target="_blank"
                className="text-white hover:text-gray-300 transition"
                aria-label="Farcaster"
              >
                <SiFarcaster size={24} />
              </a>
              <a
                href="https://github.com/M3tering"
                target="_blank"
                className="text-white hover:text-gray-300 transition"
                aria-label="GitHub"
              >
                <FaGithub size={24} />
              </a>
            </div>
          </div>

          {/* Navigation links grid - keeping your existing structure */}
          <div className="grid grid-cols-2 gap-[40px]">
            <div>
              <p className="font-bold mb-4 text-[20px]">Applications</p>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 transition">
                  <a target="_blank" href="https://xcharge.m3ter.ing/">
                    XCharge
                  </a>
                </li>
                <li className="hover:text-gray-300 transition">
                  <a target="_blank" href="https://watt-a-frame.vercel.app/">
                    Watt-A-Frame
                  </a>
                </li>
                <li className="hover:text-gray-300 transition">
                  <a target="_blank" href="https://asset.m3ter.ing/">
                    Solaxy
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <p className="font-bold mb-4 text-[20px]">Docs</p>
              <ul className="space-y-2">
                <li className="hover:text-gray-300 transition">
                  <a
                    href="https://m3tering.whynotswitch.com/token-economics/mint-and-distribution"
                    target="_blank"
                  >
                    Mint & DIstribution
                  </a>
                </li>
                <li className="hover:text-gray-300 transition">
                  <a
                    href="https://m3tering.whynotswitch.com/smart-contracts/audits/secure3-audit-contest"
                    target="_blank"
                  >
                    Audit
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="h-px bg-white bg-opacity-20 my-8"></div>
        <div className="text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} M3tering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
