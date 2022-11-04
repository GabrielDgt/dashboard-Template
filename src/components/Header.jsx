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
        <Menu 
          menuButton={
          <MenuButton className='relative py-3 px-4 rounded-lg hover:bg-secondary-100 transition-colors'>
            <RiNotification2Line className='text-primary'/>
            <span className='absolute top-0 right-2.5 box-content rounded-full text-secondary-100 bg-primary py-0.5 px-[5px] 
            text-[8px] font-bold'>
              5
            </span>
          </MenuButton>
          }
          align='end'
          arrow='right'
          arrowClassName='bg-secondary-100'
          transition
          menuClassName='text-tertiary p-2 bg-secondary-100'
        >
        <h1 className='text-tertiary text-center font-medium'>Notifications</h1>
        <hr className='border-t border-solid border-secondary-900 my-2' />
        <MenuItem></MenuItem>
        </Menu>
        <Menu 
          menuButton={
            <MenuButton onClick={() => setShowUserMenu(!showUserMenu)} 
              className='flex items-center gap-x-2 py-2 px-4 rounded-lg hover:bg-secondary-100 transition-colors'>
              <img 
                className='w-6 h-6 rounded-full object-cover'
                src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg" 
                alt="foto selfie" />
              <span className='text-tertiary'>John Doe</span>
              <RiArrowDownSLine className={`text-primary ${showUserMenu && 'rotate-180'} transition-all`} />
            </MenuButton>
          } 
          align='end'
          arrow='right'
          arrowClassName='bg-secondary-100 mx-12'
          transition 
          menuClassName='text-tertiary p-2 bg-secondary-100'
          >
          <MenuItem className='rounded-lg text-tertiary hover:bg-secondary-900 transition-colors'>
            <Link to='/profile' className='flex items-center gap-x-4'>
            <img 
                className='w-10 h-10 rounded-full object-cover'
                src="https://img.freepik.com/vector-gratis/estatua-diosa-griega-selfie-adiccion-redes-sociales-tecnicas-mixtas_53876-116525.jpg" 
                alt="foto selfie" />
              <div className='flex flex-col gap-1 text-tertiary'>
                <span>John Doe</span>
                <span className='text-xs'>johndoe@dashboard.com</span>
              </div>
            </Link>
          </MenuItem>
          <hr className='border-t border-solid border-secondary-900 my-4' />
          <MenuItem className='rounded-lg text-tertiary hover:bg-secondary-900 transition-colors my-2'>
            <Link to="/userSettings" 
              className='flex items-center gap-4 rounded-lg transition-color'>
              <RiSettings5Line className='text-primary' />
              User Settings
            </Link>
          </MenuItem>
          <MenuItem className='rounded-lg text-tertiary hover:bg-secondary-900 transition-colors'>
            <Link to="/" 
              className='flex items-center gap-4 rounded-lg transition-color'>            
              <span className='flex items-center gap-4'>
                  <RiEarthLine className='text-primary' /> Language
              </span>
                  <RiArrowRightSLine className='text-primary'/>
            </Link>
          </MenuItem>
          <hr className='border-t border-solid border-secondary-900 my-4' />
          <MenuItem className='rounded-lg text-tertiary hover:bg-secondary-900 transition-colors'>
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