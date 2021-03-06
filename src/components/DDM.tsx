import { Menu, Transition } from "@headlessui/react";
import { Fragment } from "react";
import { Link } from "react-router-dom";
import {
  menuIcon,
  themeIcon,
  schoolIcon,
  workIcon,
  insightsIcon,
  liveIcon,
} from "./Icons";

interface IToggleProps {
  toggle: () => void;
}

function DDM({ toggle }: IToggleProps) {
  return (
    <div className="">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium text-[#ed194a] bg-black rounded-md bg-opacity-20 hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75">
            {menuIcon}
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="z-10 absolute right-0 w-56 mt-2 origin-top-right bg-black/90 divide-y div divide-gray-100/10 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/roles"}>
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="mr-2">{insightsIcon}</span>
                      Roles
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/careers"}>
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="mr-2">{workIcon}</span>
                      Careers
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/learning"}>
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="mr-2">{schoolIcon}</span>
                      Learning
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/startups"}>
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="mr-2">{insightsIcon}</span>
                      Startups
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#ed194a] text-white" : "text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    onClick={toggle}
                  >
                    <span className="mr-2">{themeIcon}</span>
                    Toggle Theme
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to={"/about"}>
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      About
                    </button>
                  </Link>
                )}
              </Menu.Item>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? "bg-[#ed194a] text-white" : "text-gray-300"
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    Contact
                  </button>
                )}
              </Menu.Item>
            </div>
            <div className="px-1 py-1">
              <Menu.Item>
                {({ active }) => (
                  <Link to="/postarole">
                    <button
                      className={`${
                        active ? "bg-[#ed194a] text-white" : "text-gray-300"
                      } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                    >
                      <span className="mr-2">{liveIcon}</span>
                      Post a Role
                    </button>
                  </Link>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
}
export default DDM;
