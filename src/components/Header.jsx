import React, { useState } from "react";
import {
  RiNotification3Line,
  RiArrowDownSLine,
  RiUserSettingsLine,
  RiLogoutBoxLine,
  RiEarthLine,
  RiArrowRightSLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
//Dropdown menu
import {
  Menu,
  MenuItem,
  MenuButton,
  MenuDivider,
  SubMenu,
} from "@szhsin/react-menu";
import "@szhsin/react-menu/dist/index.css";
import "@szhsin/react-menu/dist/transitions/slide.css";

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  const [showSubMenu, setShowSubMenu] = useState(false);
  return (
    <>
      <div className="bg-secondary-900 h-[6vh] md:h-[8vh] xl:h-[10vh] p-8 border-b border-secondary-100 flex items-center justify-end">
        <nav className="flex items-center gap-x-2">
          <Menu
            menuButton={
              <MenuButton className="relative py-3 px-4 rounded-lg hover:bg-secondary-100 transition-colors">
                <RiNotification3Line className="text-primary text-xl" />
                <span className="absolute top-0 right-2 box-content rounded-full text-secondary-100 bg-primary py-0.5 px-1.5 text-xs">
                  5
                </span>
              </MenuButton>
            }
            align="end"
            arrow="right"
            arrowClassName="bg-secondary-100"
            transition
            menuClassName="text-tertiary px-2 py-4 bg-secondary-100"
          >
            <h1 className="text-tertiary text-center font-medium">
              Notifications
            </h1>
            {/* <hr className="border-t border-solid border-secondary-900 my-2" /> */}
            <MenuDivider className="h-px font-bold bg-secondary-900 my-4" />
            <MenuItem className='p-0 hover:bg-transparent text-tertiary'>
              <Link to="/profile" className="flex flex-1 items-center gap-2 py-2 px-4 hover:bg-secondary-900 transition-colors rounded-lg">
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg"
                  alt="foto selfie"
                />
                <div className="flex flex-col">
                  <div className="flex items-center justify-between gap-4">
                    <span className="font-bold">Densel Washinton</span>{" "}
                    <span className="text-xs">05/11/2022</span>
                  </div>
                  <p className='text-tertiary'>
                    Lorem Ipsum is a dummy text...
                  </p>
                </div>
              </Link>
            </MenuItem>
            <MenuDivider className="h-px font-bold bg-secondary-900 my-4" />
            <MenuItem className='p-0 hover:bg-transparent text-tertiary font-bold flex flex-1 justify-center cursor-default hover:bg-secondary-900 hover:text-primary transition-colors rounded-lg'>
              <Link to="" className="py-2">
                Read all
              </Link>
            </MenuItem>
          </Menu>
          <Menu
            menuButton={
              <MenuButton
                onClick={() => setShowUserMenu(!showUserMenu)}
                className="flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-secondary-100 transition-colors"
              >
                <img
                  className="w-8 h-8 rounded-full object-cover"
                  src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg"
                  alt="foto selfie"
                />
                <span className="text-tertiary">John Doe</span>
                <RiArrowDownSLine
                  className={`text-primary text-xl ${
                    showUserMenu && "rotate-180"
                  } transition-all`}
                />
              </MenuButton>
            }
            align="end"
            arrow="right"
            arrowClassName="bg-secondary-100 mx-12"
            transition
            menuClassName="text-tertiary px-2 py-4 bg-secondary-100"
          >
            <MenuItem className="rounded-lg text-tertiary hover:bg-secondary-900 transition-colors">
              <Link to="/profile" className="flex items-center gap-x-4">
                <img
                  className="w-10 h-10 rounded-full object-cover"
                  src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg"
                  alt="foto selfie"
                />
                <div className="flex flex-col gap-1 text-tertiary">
                  <span>John Doe</span>
                  <span className="text-xs">johndoe@dashboard.com</span>
                </div>
              </Link>
            </MenuItem>
            {/* <hr className='border-t border-solid border-secondary-900 my-4' /> */}
            <MenuDivider className="h-px font-bold bg-secondary-900 my-4" />
            <MenuItem className="rounded-lg text-tertiary hover:bg-secondary-900 transition-colors my-2">
              <Link
                to="/userSettings"
                className="flex items-center gap-4 rounded-lg transition-color"
              >
                <RiUserSettingsLine className="text-primary text-xl" />
                User Settings
              </Link>
            </MenuItem>
            {/* <MenuItem className='rounded-lg text-tertiary hover:bg-secondary-900 transition-colors'>
              <Link to="/" 
                className='flex items-center gap-4 rounded-lg transition-color'>            
                <span className='flex items-center gap-4'>
                    <RiEarthLine className='text-primary text-xl' /> Language
                </span>
                    <RiArrowRightSLine className='text-primary text-xl'/>
              </Link>
            </MenuItem> */}
            <li>
              <button
                onClick={() => setShowSubMenu(!showSubMenu)}
                className="flex items-center w-full py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors"
              >
                <span className="flex items-center gap-4 mx-4">
                  <RiEarthLine className="text-primary text-xl" /> Language
                </span>
                <RiArrowRightSLine
                  className={`text-primary text-xl ${
                    showSubMenu && "rotate-90"
                  } transition-all mx-4`}
                />
              </button>
              <ul
                className={`${
                  showSubMenu ? "h-[90px]" : "h-0"
                } overflow-y-hidden transition-all`}
              >
                <li>
                  <Link
                    to="/posts"
                    className="py-2 px-4 border-l border-tertiary block relative ml-8 cursor-pointer before:w-3 before:h-3 before:absolute 
                              before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                before:border-4 before:border-secondary-100"
                  >
                    SP - Spanish
                  </Link>
                </li>
                <li>
                  <Link
                    to="/stats"
                    className="py-2 px-4 border-l border-tertiary block relative ml-8 cursor-pointer before:w-3 before:h-3 before:absolute 
                              before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                before:border-4 before:border-secondary-100"
                  >
                    EN - English
                  </Link>
                </li>
              </ul>
            </li>
            {/* <hr className='border-t border-solid border-secondary-900 my-4' /> */}
            <MenuDivider className="h-px font-bold bg-secondary-900 my-4" />
            <MenuItem className="rounded-lg text-tertiary hover:bg-secondary-900 transition-colors">
              <Link
                to="/auth"
                className="flex items-center gap-4 rounded-lg transition-color"
              >
                <RiLogoutBoxLine className="text-primary text-xl" />
                Logout
              </Link>
            </MenuItem>
          </Menu>
        </nav>
      </div>
    </>
  );
};

export default Header;
