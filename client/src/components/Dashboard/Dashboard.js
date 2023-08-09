import { motion } from 'framer-motion';
import React from 'react';
import Calculator from './calculator/Calculator';
import Banner from './banner/Banner';
import './Dashboard.css';
import Calendar from './calendar/Calendar';

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
        <Calculator />
      </motion.div>
    </div>
  );
};

export default Dashboard;
