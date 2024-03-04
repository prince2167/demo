import { Dialog, Transition } from "@headlessui/react";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsBell } from "react-icons/bs";
import { HiOutlineXMark } from "react-icons/hi2";
import { Fragment, useState } from "react";
import MobileSidebar from "./MobileSidebar";
import Profile from "./Profile";
import Logo from "./Logo";

export default function Navbar() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  return (
    <div className="sticky top-0 z-50 bg-white">
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-orange-900/40" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <HiOutlineXMark
                        size="22"
                        className="text-white"
                        aria-hidden="true"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* MobileSidebar */}
                <MobileSidebar />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <nav className="flex justify-between   items-center px-7 border-b border-gray-200 ">
        <div className="flex items-center gap-2">
          <button
            type="button"
            className="-m-2.5 p-2.5  lg:hidden"
            onClick={() => setSidebarOpen(true)}
          >
            <span className="sr-only">Open sidebar</span>
            <RxHamburgerMenu size="22" aria-hidden="true" />
          </button>
          <div className="hidden lg:block">
            <Logo />
          </div>
        </div>
        <div className="sticky  top-0 z-40 flex h-16 shrink-0 items-center gap-x-4  bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          {/* Separator */}

          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <button type="button" className="-m-2.5 p-2.5 text-black ">
                <BsBell size="22" aria-hidden="true" />
              </button>

              {/* Profile dropdown */}
              <Profile />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
