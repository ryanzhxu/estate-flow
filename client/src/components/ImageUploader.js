import React from 'react';
import { useState } from 'react';

export default function ImageUploader({ imageURL, onImageSelected }) {
  const [selectedImage, setSelectedImage] = useState(imageURL);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImage(reader.result);
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type='file' id='imageURL' name='imageURL' accept='image/*' onChange={handleImageUpload}></input>
      <div style={{ marginTop: '10px' }}>
        {selectedImage && <img src={selectedImage} alt='Preview' style={{ maxWidth: '100px' }} />}
      </div>
      <div style={{ marginTop: '10px' }}>{selectedImage && onImageSelected(selectedImage)}</div>
    </div>
  );
}
