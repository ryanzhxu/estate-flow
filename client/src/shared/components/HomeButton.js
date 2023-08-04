import React from 'react';
import { Link } from 'react-router-dom';

const HomeButton = () => {
  return (
    <Link to='/'>
      <div className='btn btn-outline-dark'>
        <i className='bi bi-house' />
      </div>
    </Link>
  );
};

export default HomeButton;
