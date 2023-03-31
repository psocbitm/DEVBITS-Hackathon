import { useContext, useState } from "react";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { UserContext } from "@/context/UserContext";
import { getAuth } from "firebase/auth";
import Link from "next/link";
import Logo from "./Logo";

const auth = getAuth();

function MenuItem({ text, href }) {
  return (
    <Link href={href} className="text-sm font-semibold leading-6 text-gray-900">
      {text}
    </Link>
  );
}

function Menu({ items }) {
  return (
    <Popover.Group className="hidden lg:flex lg:gap-x-12">
      {items.map((item, index) => (
        <MenuItem key={index} {...item} />
      ))}
    </Popover.Group>
  );
}

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { user, setUser } = useContext(UserContext);

  async function handleLogout() {
    try {
      await auth.signOut();
      setUser(null);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <header className="bg-white">
      <nav
        className="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
        aria-label="Global"
      >
        <div className="flex lg:flex-1">
          <Logo />
        </div>
        <div className="flex lg:hidden">
          <button
            type="button"
            className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className="sr-only">Open main menu</span>
            <Bars3Icon className="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <Menu
          items={[
            { text: "Home", href: "/" },
            { text: "About Us", href: "/about" },
            { text: "Company", href: "#" },
          ]}
        />
        <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {user ? (
            <div
              className="text-sm font-semibold leading-6 text-gray-900 cursor-pointer"
              onClick={handleLogout}
            >
              Logout
            </div>
          ) : (
            <Link
              href="/register"
              className="text-sm font-semibold leading-6 text-gray-900"
            >
              Signup/Log in <span aria-hidden="true">&rarr;</span>
            </Link>
          )}
        </div>
      </nav>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-10" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Logo />
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
                <MenuItem text="Home" href="/" />
                <MenuItem text="About Us" href="/about" />
                <MenuItem text="Company" href="#" />
              </div>
              <div className="py-6">
                {user ? (
                  <div
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50 cursor-pointer"
                    onClick={handleLogout}
                  >
                    Logout
                  </div>
                ) : (
                  <Link
                    href="/register"
                    className="block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                  >
                    Signup/Log in
                  </Link>
                )}
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}
