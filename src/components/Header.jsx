import React, { useState } from 'react';
import { RiNotification2Line, RiArrowDownSLine, RiSettings5Line,
         RiLogoutBoxLine, RiEarthLine, RiArrowRightSLine } from "react-icons/ri";
import { Link } from 'react-router-dom';
//Dropdown menu
import { Menu, MenuItem, MenuButton } from '@szhsin/react-menu';
import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';

const Header = () => {
  const [showUserMenu, setShowUserMenu] = useState(false);
  return (
    <div className='bg-secondary-900 h-[6vh] md:h-[8vh] xl:h-[10vh] p-8 border-b border-secondary-100 flex item justify-end'>
      <nav className='flex items-center gap-x-2'>
        <button className='relative py-3 px-4 rounded-lg hover:bg-secondary-100 transition-colors'>
          <RiNotification2Line className='text-primary'/>
          <span className='absolute top-0 right-2.5 box-content rounded-full text-secondary-100 bg-primary py-0.5 px-[5px] text-[8px] font-bold'>5</span>
        </button>

        <Menu 
          menuButton={
            <MenuButton onClick={() => setShowUserMenu(!showUserMenu)} 
              className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-secondary-100 transition-colors'>
              <img 
                className='w-6 h-6 rounded-full object-cover'
                src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg" 
                alt="foto selfie" />
              <span className='text-tertiary'>John Doe</span>
              <RiArrowDownSLine className={`'text-primary' ${showUserMenu && 'rotate-180'} transition-all`} />
            </MenuButton>
          } 
          transition 
          menuClassName='text-tertiary p-4 bg-secondary-100'
          >
          <MenuItem className='rounded-lg transition-all text-tertiary hover:bg-secondary-900'>
            <Link to='/profile' className='flex items-center gap-x-4 mb-2'>
            <img 
                className='w-10 h-10 rounded-full object-cover'
                src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg" 
                alt="foto selfie" />
              <div className='flex flex-col gap-1'>
                <span className='text-tertiary'>John Doe</span>
                <span className='text-xs'>johndoe@dashboard.com</span>
              </div>
            </Link>
          </MenuItem>
          <div className='border-t border-solid border-tertiary m-1'></div>
          <MenuItem className='rounded-lg transition-all text-tertiary hover:bg-secondary-900'>
            <Link to="/" 
              className='flex items-center gap-4 rounded-lg transition-color'>
              <RiSettings5Line className='text-primary' />
              User Settings
            </Link>
          </MenuItem>
          <MenuItem className='rounded-lg transition-all text-tertiary hover:bg-secondary-900'>
            <Link to="/" 
              className='flex items-center gap-4 rounded-lg transition-color mb-2'>            
              <span className='flex items-center gap-4'>
                  <RiEarthLine className='text-primary' /> Language
              </span>
                  <RiArrowRightSLine className='text-primary'/>
            </Link>
          </MenuItem>
          <div className='border-t border-solid border-tertiary m-1'></div>
          <MenuItem className='rounded-lg transition-all text-tertiary hover:bg-secondary-900'>
            <Link to="/auth" 
              className='flex items-center gap-4 rounded-lg transition-color'>
              <RiLogoutBoxLine className='text-primary' />
              Logout
            </Link>
          </MenuItem>
        </Menu>
      </nav>
    </div>
    
  )
}

export default Header