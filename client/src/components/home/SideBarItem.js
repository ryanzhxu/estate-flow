import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './SideBarItem.css';
import { Modal } from 'react-bootstrap';
import Button from '@atlaskit/button';
import LoadingButton from '@atlaskit/button/loading-button';

function SideBarItem({ icon, name, onClick = undefined }) {
  //partial code were learnd by ZAINKEEPSCODE's tutorial videos: "React js Sidebar | Animated Navigation Menu" from youtube.
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const title = {
    true: {
      opacity: 1,
    },
    false: {
      display: 'none',
    },
  };

  const handleLogoutClick = () => {
    setIsOpen(true);
  };

  const handleConfirmLogout = () => {
    setIsLoading(true);
    setTimeout(() => {
      onClick();
      setIsLoading(false);
      setIsOpen(false);
    }, 1000);
  };

  return (
    <>
      <motion.div
        className='sideBarItem'
        whileHover={{
          backdropFilter: 'blur(5.5px)',
          cursor: 'pointer',
          color: '#FFA500',
        }}
        transition={{
          duration: 0.01,
        }}
        onClick={name === 'Log out' ? handleLogoutClick : undefined}>
        <motion.div className='icon'>
          <i className={icon}></i>
        </motion.div>
        <motion.span variants={title}>{name}</motion.span>
      </motion.div>

      <Modal show={isOpen} onHide={() => setIsOpen(false)} centered>
        <Modal.Header className='bg-danger text-white'>
          <Modal.Title>You're about to log out</Modal.Title>
        </Modal.Header>
        <Modal.Body className='modal-content panel-warning'>
          <p>
            Logging out will securely end your session and you will need to re-enter your credentials to access the app
            again.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button appearance='subtle' onClick={() => setIsOpen(false)}>
            Cancel
          </Button>
          <LoadingButton appearance='danger' onClick={handleConfirmLogout} isLoading={isLoading}>
            Log out
          </LoadingButton>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SideBarItem;
