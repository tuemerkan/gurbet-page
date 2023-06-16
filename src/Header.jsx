import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline/index.js";
import { Dialog } from "@headlessui/react";
import { useState } from "react";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Über uns", href: "#" },
  { name: "Kontakt", href: "#" },
];
export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <motion.header
      animate={{ y: [-80, 0] }}
      initial="offscreen"
      whileInView="onscreen"
      transition={{ type: "just", duration: 0.6, stiffness: 100 }}
      className="absolute inset-x-0 top-0 z-50 bg-white bg-opacity-95"
    >
      <nav
        className="flex items-center justify-between p-6 lg:px-8 "
        aria-label="Global"
      >
        <a href="#" className="flex-1">
          <img className="max-h-12 sm:max-h-24" src="gurbet.jpg" alt="" />
        </a>
        <a href="#" className="shrink">
          <img className="max-h-12 sm:max-h-24" src="gurbet2.jpg" alt="" />
        </a>
        <div className="flex flex-1 justify-end lg:hidden">
          <button
            type="button"
            className="-m-2.5 items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div className="hidden justify-end lg:flex lg:flex-1 gap-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-xl font-semibold text-gray-900"
            >
              {item.name}
            </a>
          ))}
        </div>
      </nav>

      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img className="h-8 w-auto" src="gurbet2.jpg" alt="" />
            </a>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="space-y-2 py-6">
                {navigation.map((item) => (
                  <a
                    key={item.name}
                    href={item.href}
                    className="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    {item.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </motion.header>
  );
}