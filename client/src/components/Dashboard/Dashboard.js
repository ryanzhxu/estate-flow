import { motion } from 'framer-motion';
import React from 'react';
import Calendar from './Calendar';
import Calculator from "./Calculator";
import Banner from "./Banner";
const Dashboard = () => {
  return (
    <div className='body_container'>
      <motion.div className='banner_card'>
        <Banner />
      </motion.div>

      <motion.div className='body_card'>
        <Calendar />
      </motion.div>

      <motion.div className='body_card'>
          <Calculator/>
      </motion.div>
    </div>
  );
};

export default Dashboard;
