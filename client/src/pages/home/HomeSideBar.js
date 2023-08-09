import { motion } from 'framer-motion';
import React from 'react';
import { useState } from 'react';
import SideBarItem from './SideBarItem';
import { Link } from 'react-router-dom';
import logo from '../../shared/images/logo.png';

const HomeSideBar = ({ handleLogout = undefined }) => {
  const [open, setOpen] = useState(true);

  const handleToggle = () => {
    setOpen(!open);
  };

  const sidebarShift = {
    true: {},
    false: {
      width: '5rem',
    },
  };

  const profileShift = {
    true: {
      alignSelf: 'center',
      width: '4rem',
    },
    false: {
      marginTop: '2rem',
      width: '3rem',
    },
  };

  const whiteHoverStyles = {
    rotate: 180,
  };

  return (
    <>
      <motion.div className='sidebar' initial={`${open}`} animate={`${open}`} variants={sidebarShift}>
        <motion.div whileHover={whiteHoverStyles} onClick={handleToggle} className='minimize_sidebar_icon'>
          <i className={'bi bi-card-list'}></i>
        </motion.div>
        {open && (
          <div className='sideLogo'>
            <img src={logo} alt='logo' width='200' height='40' />
          </div>
        )}

        <br />
        <br />

        <motion.div
          initial={`${open}`}
          animate={`${open}`}
          variants={profileShift}
          className='profile'
          whileHover={whiteHoverStyles}>
          <img
            src={`https://hips.hearstapps.com/hmg-prod/images/russian-blue-royalty-free-image-1658451809.jpg?crop=0.667xw:1.00xh;0.120xw,0&resize=1200:*`}
            alt='profile_img'
          />
        </motion.div>

        <br />

        <div className='group'>
          <Link to='/' style={{ textDecoration: 'none', color: 'white' }}>
            <SideBarItem icon={'bi bi-calendar2-heart'} name='Dashboard' />
          </Link>{' '}
          <Link to='/properties' style={{ textDecoration: 'none', color: 'white' }}>
            <SideBarItem icon={'bi bi-houses'} name='Properties' />
          </Link>{' '}
          <Link to='/tenants' style={{ textDecoration: 'none', color: 'white' }}>
            <SideBarItem icon={'bi bi-people'} name='Tenants' />
          </Link>
          <Link to='/workers' style={{ textDecoration: 'none', color: 'white' }}>
            <SideBarItem icon={'bi bi-person-circle'} name='Workers' />
          </Link>
          <Link to='/about' style={{ textDecoration: 'none', color: 'white' }}>
            <SideBarItem icon={'bi bi-cup-hot-fill'} name='About' />
          </Link>
          <SideBarItem icon={'bi bi-box-arrow-left'} name='Log out' onClick={handleLogout} />
        </div>
      </motion.div>
    </>
  );
};

export default HomeSideBar;
