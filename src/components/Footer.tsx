import { createSignal } from "solid-js";

const Footer = () => {
  const [email, setEmail] = createSignal("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    alert(`Thank you for subscribing: ${email()}`);
    setEmail("");
  };

  return (
    <footer
      class="w-full relative text-white bg-no-repeat bg-center bg-cover"
      style={{ "background-image": `url("/images/solarpunk.webp")` }}
    >
      {/* Overlay for better text visibility */}
      <div class="absolute inset-0 bg-black/30 "></div>

      {/* Main content container with glassmorphism */}
      <div class="relative z-10 glassmorph lg:p-[90px] p-[40px] shadow-lg border border-white border-opacity-20">
        <div class="lg:flex md:flex block justify-between">
          {/* Logo and company info */}
          <div class="mb-8 lg:mb-0 md:mb-0 lg:max-w-xs md:max-w-xs">
            <h2 class="text-xl font-[500] text-white mb-4 jello-stone">
              M3tering
            </h2>
            <p class="text-gray-200 mb-4">
              Creating beautiful sustainable experiences since 2025.
            </p>
            <div class="flex space-x-4 mb-6">
              <a
                href="#"
                class="text-white hover:text-gray-300 transition"
                aria-label="Facebook"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
              <a
                href="#"
                class="text-white hover:text-gray-300 transition"
                aria-label="Twitter"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                </svg>
              </a>
              <a
                href="#"
                class="text-white hover:text-gray-300 transition"
                aria-label="Instagram"
              >
                <svg
                  class="w-6 h-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fill-rule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>

            {/* Subscribe form */}
            <form onSubmit={handleSubmit} class="flex flex-col space-y-3">
              <input
                type="email"
                placeholder="Your email"
                value={email()}
                onInput={(e) => setEmail(e.target.value)}
                required
                class="px-4 py-2 bg-white bg-opacity-20 backdrop-blur-sm rounded-lg border border-white border-opacity-20 placeholder-neutral-700 text-neutral-700 focus:outline-none focus:ring-2 focus:ring-white focus:ring-opacity-50"
              />
              <button
                aria-label="Submit"
                type="submit"
                class="bg-orange-500/40 backdrop-blur-[10px] text-white cursor-pointer font-medium py-2 px-4 rounded-lg hover:bg-orange-500/20 transition duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Navigation links grid - keeping your existing structure */}
          <div class="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-[40px]">
            <div>
              <p class="font-bold mb-4 text-[20px]">Products</p>
              <ul class="space-y-2">
                <li class="hover:text-gray-300 transition">
                  <a href="#">XCharge</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Watt-A-Frame</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Solaxy</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Maxwell</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-bold mb-4 text-[20px]">Socials</p>
              <ul class="space-y-2">
                <li class="hover:text-gray-300 transition">
                  <a href="#">Facebook</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Twitter</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Farcaster</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Mastodon</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Instagram</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-bold mb-4 text-[20px]">Docs</p>
              <ul class="space-y-2">
                <li class="hover:text-gray-300 transition">
                  <a href="#">M3tering</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Switch</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Lorem</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Ipsum</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
              </ul>
            </div>
            <div>
              <p class="font-bold mb-4 text-[20px]">Product</p>
              <ul class="space-y-2">
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
                <li class="hover:text-gray-300 transition">
                  <a href="#">Nitro</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div class="h-px bg-white bg-opacity-20 my-8"></div>
        <div class="text-center text-gray-200">
          <p>&copy; {new Date().getFullYear()} M3tering</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
