import { classNames } from "@/utils";
import Logo from "./Logo";
import { navigation } from "@/constants";
import { IoIosLogOut } from "react-icons/io";

const MobileSidebar = () => {
  return (
    <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 text-gray-800 pb-4">
      <div className="flex gap-4 h-16 shrink-0 items-center">
        <Logo />
      </div>
      <nav className="flex flex-1 flex-col gap-6">
        <ul role="list" className="flex flex-1 flex-col gap-y-5">
          <li>
            <ul role="list" className="flex flex-1 flex-col gap-y-5">
              {navigation.map((item) => (
                <li key={item.name}>
                  <a
                    href={item.href}
                    className={classNames(
                      item.current
                        ? "text-gray-100 bg-[#29ae6f]"
                        : "hover:bg-[#29AD70] ",
                      "flex gap-4 items-center rounded  p-2 hover:text-white"
                    )}
                  >
                    <item.icon size="20" />
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </li>
        </ul>
        <ul className="list-none">
          <li>
            <a
              href="/"
              className="text-gray-800 bg-gray-200 flex gap-4 items-center rounded  p-2"
            >
              <IoIosLogOut size="20" />
              Logout
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default MobileSidebar;
