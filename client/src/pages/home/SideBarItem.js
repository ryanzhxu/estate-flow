import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Modal } from 'react-bootstrap';

function SideBarItem({ icon, name, onClick = undefined }) {
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
        <motion.div>
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
          <div className='btn btn-outline-danger' onClick={handleConfirmLogout}>
            {!isLoading ? (
              `Log out`
            ) : (
              <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
                <span className='spinner-border spinner-border-sm' role='status' aria-hidden='true' />
                Logging out
              </div>
            )}
          </div>
          <div className='btn btn-outline-primary' onClick={() => setIsOpen(false)}>
            Cancel
          </div>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default SideBarItem;
