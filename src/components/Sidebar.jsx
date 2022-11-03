import React, { useState } from "react";
import { RiLogoutBoxRLine, RiBarChart2Line, RiEarthLine, 
         RiMessage2Line, RiCalendarEventLine, RiSettings5Line, 
         RiArrowRightSLine, RiMenuFill, RiCloseLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
    const [showSubMenu, setShowSubMenu] = useState(false);
    const [showSidebar, setShowSidebar] = useState(false);
  return (
    <>
      <div className={`xl:h-[100vh] xl:static overflow-y-scroll fixed bg-secondary-100 w-[60%] md:w-[40%] lg:w-[30%] h-full top-0 p-6 no-scrollbar flex flex-col 
      justify-between z-50 ${showSidebar ? 'left-0' : '-left-full'} transition-all`}>
            <div>
                <h1 className='text-center text-2xl font-bold mb-10'>
                    Sidebar<span className='text-3xl font-bold text-primary'>.</span>
                </h1>
                <ul>
                    <li>
                        <Link to="/" 
                            className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                            <RiBarChart2Line className='text-primary' />
                            Analytics
                        </Link>
                    </li>
                    <li>
                        <button onClick={() => setShowSubMenu(!showSubMenu)} 
                            className='flex items-center justify-between w-full py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                            <span className='flex items-center gap-4'>
                                <RiEarthLine className='text-primary' /> Social Media
                            </span>
                                <RiArrowRightSLine className={`text-primary ${showSubMenu && 'rotate-90'} transition-all`}/>
                        </button>
                        <ul className={`my-2 ${!showSubMenu && 'hidden'}`}>
                            <li>
                                <Link to="/"
                                    className='py-2 px-4 border-l border-tertiary block relative ml-4 cursor-pointer before:w-3 before:h-3 before:absolute 
                                    before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                    before:border-4 before:border-secondary-100'>
                                    Posts
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    className='py-2 px-4 border-l border-tertiary block relative ml-4 cursor-pointer before:w-3 before:h-3 before:absolute 
                                    before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                    before:border-4 before:border-secondary-100'>
                                    Stats
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    className='py-2 px-4 border-l border-tertiary block relative ml-4 cursor-pointer before:w-3 before:h-3 before:absolute 
                                    before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                    before:border-4 before:border-secondary-100'>
                                    Profile
                                </Link>
                            </li>
                            <li>
                                <Link to="/"
                                    className='py-2 px-4 border-l border-tertiary block relative ml-4 cursor-pointer before:w-3 before:h-3 before:absolute 
                                    before:bg-tertiary before:rounded-full before:-left-[6.5px] before:top-1/2 before:-translate-y-1/2 hover:text-tertiary 
                                    before:border-4 before:border-secondary-100'>
                                    Followers
                                </Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link to="/" 
                            className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                            <RiMessage2Line className='text-primary' />
                            Messages
                        </Link>
                    </li>
                    <li>
                        <Link to="/" 
                            className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                            <RiCalendarEventLine className='text-primary' />
                            Schedule
                        </Link>
                    </li>
                    <li>
                        <Link to="/" 
                            className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                            <RiSettings5Line className='text-primary' />
                            Settings
                        </Link>
                    </li>
                </ul>
            </div>
            <nav>
                <Link to="/" className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer hover:bg-secondary-900 transition-colors'>
                    <RiLogoutBoxRLine className='text-primary' />
                    Logout
                </Link>
            </nav>
      </div>
      <button onClick={() => setShowSidebar(!showSidebar)}
              className="fixed right-4 bottom-4 z-50 rounded-full p-3 text-secondary-100 bg-primary">
        {!showSidebar ? ( 
            <RiMenuFill />
        ) : (
            <RiCloseLine />
            )
        }
      </button>
    </>

  )
}

export default Sidebar