import { motion } from 'framer-motion';
import React from 'react';
import Calendar from './Calendar';
import Calculator from "./Calculator";

const Dashboard = () => {
  return (
    <div className='body_container'>
      <motion.div className='body_card'>
        <motion.div>Bills Tracking{<br />}PDF</motion.div>
      </motion.div>

      <motion.div className='body_card'>
        <motion.div>Lease Tracking{<br />}PDF</motion.div>
      </motion.div>

      <motion.div className='body_card'>
        <Calendar />
      </motion.div>

      <motion.div className='body_card'>
          <motion.div >Calculator</motion.div>
          <Calculator/>
      </motion.div>
    </div>
  );
};

export default Dashboard;
