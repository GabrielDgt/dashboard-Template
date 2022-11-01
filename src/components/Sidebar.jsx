import React from 'react'
import { RiLogoutBoxRLine, RiBarChart2Line, RiEarthLine, RiMessage2Line, RiCalendarEventLine, RiSettings5Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className='xl:h-[100vh] xl:static overflow-y-scroll fixed bg-secondary-100 w-full h-full -left-full top-0 p-8 no-scrollbar flex flex-col justify-between'>
        <div>
            <h1 className='text-center text-xl font-bold mb-8'>
                Sidebar<span className='text-3xl font-bold text-primary'>.</span>
            </h1>
            <ul>
                <li>
                    <Link to="/" 
                        className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                        <RiBarChart2Line className='text-primary' />
                        Analytics
                    </Link>
                </li>
                <li>
                    <Link to="/" 
                        className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                        <RiEarthLine className='text-primary' />
                        Social Media
                    </Link>
                    <ul>
                        <li>
                            <Link to="/"
                                className='text-xs py-2 px-4 border-l'>
                                Posts
                            </Link>
                        </li>
                        <li>
                            <Link to="/"
                                className='text-xs py-2 px-4 border-l'>
                                Stats
                            </Link>
                        </li>
                        <li>
                            <Link to="/"
                                className='text-xs py-2 px-4 border-l'>
                                Profile
                            </Link>
                        </li>
                        <li>
                            <Link to="/"
                                className='text-xs py-2 px-4 border-l'>
                                Followers
                            </Link>
                        </li>
                    </ul>
                </li>
                <li>
                    <Link to="/" 
                        className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                        <RiMessage2Line className='text-primary' />
                        Messages
                    </Link>
                </li>
                <li>
                    <Link to="/" 
                        className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                        <RiCalendarEventLine className='text-primary' />
                        Schedule
                    </Link>
                </li>
                <li>
                    <Link to="/" 
                        className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                        <RiSettings5Line className='text-primary' />
                        Settings
                    </Link>
                </li>
            </ul>
        </div>
        <nav>
            <Link to="/" className='flex items-center gap-4 py-2 px-2 rounded-lg cursor-pointer text-sm hover:bg-secondary-900 transition-colors'>
                <RiLogoutBoxRLine className='text-primary' />
                Logout
            </Link>
        </nav>
    </div>
  )
}

export default Sidebar