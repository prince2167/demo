import { navigation } from "@/constants";
import { classNames } from "@/utils";
import { IoIosLogOut } from "react-icons/io";

const Sidebar = () => {
  return (
    <div
      className=" fixed flex h-[92%] flex-col justify-between
    overflow-y-auto text-gray-800   max-lg:hidden lg:w-72"
    >
      <div className="flex grow pt-6 flex-col gap-y-5 overflow-y-auto border-r shadow-lg border-gray-200 bg-white px-6 pb-4">
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
                          ? " bg-[#f2f2f2]"
                          : // ? "text-gray-100 bg-[#29ae6f]"
                            "hover:bg-[#f2f2f2] ",
                        "flex text-gray-800 gap-4 items-center rounded  p-2"
                      )}
                    >
                      <item.icon size="20" className="text-[#29ae6f]" />
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
                className="text-gray-800 bg-[#f2f2f2] flex gap-4 items-center rounded  p-2"
              >
                <IoIosLogOut size="20" />
                Logout
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;
