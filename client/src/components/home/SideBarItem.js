import React from 'react';
import { motion } from 'framer-motion';
import './SideBarItem.css';
import { useDispatch } from 'react-redux';
import { logout } from '../../reducers/userSlice';

function SideBarItem({ icon, name }) {
  //partial code were learnd by ZAINKEEPSCODE's tutorial videos: "React js Sidebar | Animated Navigation Menu" from youtube.

  const dispatch = useDispatch();

  const handleLogout = (e) => {
    dispatch(logout());
  };

  const title = {
    true: {
      opacity: 1,
    },
    false: {
      display: 'none',
    },
  };

  return (
    <motion.div
      className='sideBarItem'
      whileHover={{
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        backdropFilter: 'blur(5.5px)',
        cursor: 'pointer',
      }}
      transition={{
        type: 'none',
        duration: 0.01,
      }}
      onClick={
        name === 'Log out'
          ? (e) => {
              handleLogout(e);
            }
          : undefined
      }>
      <motion.div className='icon'>
        <i className={icon}></i>
      </motion.div>
      <motion.span variants={title}>{name}</motion.span>
    </motion.div>
  );
}

export default SideBarItem;
