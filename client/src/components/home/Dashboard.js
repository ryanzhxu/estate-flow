import { motion } from 'framer-motion';
import React from 'react';

const HomeApplications = () => {
  const whiteHoverStyles = {
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
    backdropFilter: 'blur(5.5px)',
    WebkitBackdropFilter: 'blur(5.5px)',
    border: '1px solid rgba( 255, 255, 255, 0.18 )',
    cursor: 'pointer',
  };

  const transition = {
    type: 'none',
    duration: 0.1,
  };

  return (
    <div className='body_container'>
      <motion.div className='body_card' whileHover={whiteHoverStyles} transition={transition}>
        <motion.div>Bills Tracking{<br />}PDF</motion.div>
      </motion.div>

      <motion.div className='body_card' whileHover={whiteHoverStyles} transition={transition}>
        <motion.div>Lease Tracking{<br />}PDF</motion.div>
      </motion.div>

      <motion.div className='body_card' whileHover={whiteHoverStyles} transition={transition}>
        <motion.div>Calendar/Kanban</motion.div>
      </motion.div>

      <motion.div className='body_card' whileHover={whiteHoverStyles} transition={transition}>
        <motion.div>Calculator</motion.div>
      </motion.div>
    </div>
  );
};

export default HomeApplications;
