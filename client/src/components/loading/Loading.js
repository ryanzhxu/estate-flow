import React from 'react';
import Lottie from 'lottie-react';
import './Loading.css';

const Loading = ({ animationData }) => {
  const loadingStyle = {
    height: '190px',
    marginBottom: '-50px',
  };

  return (
    <div className='loading-div'>
      <div className='loading'>
        <Lottie animationData={animationData} className='loading' style={loadingStyle} />
        <div className='loading-heading'>We&apos;re working on it ...</div>
        <div className='loading-text'>
          Your result will appear momentarily. This page
          <br /> will automatically refresh every 5 seconds
        </div>
      </div>
    </div>
  );
};

export default Loading;
