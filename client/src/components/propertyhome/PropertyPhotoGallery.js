import React from 'react';
import { useState } from 'react';
import './PropertyPhotoGallery.css';

function PropertyPhotoGallery({ photos }) {
  const [index, setIndex] = useState(0);

  const goToNext = () => setIndex(index < photos.length - 1 ? index + 1 : 0);
  const goToPrev = () => setIndex(index > 0 ? index - 1 : photos.length - 1);

  return (
    <div className='photo-gallery'>
      <div className='photo-arrow' id='left-arrow' onClick={goToPrev}>
        ❰
      </div>
      <div className='photo-arrow' id='right-arrow' onClick={goToNext}>
        ❱
      </div>
      <div className='property-photo' style={{ backgroundImage: `url(${photos[index]})` }}></div>
      <div className='nav-dots'>
        {photos.map((photo, i) => (
          <div className={`nav-dot ${index === i ? 'active' : ''}`} onClick={() => setIndex(i)} key={i}>
            ●
          </div>
        ))}
      </div>
    </div>
  );
}

export default PropertyPhotoGallery;
