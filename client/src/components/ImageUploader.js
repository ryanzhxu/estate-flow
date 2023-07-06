import React from 'react';
import { useState } from 'react';

export default function ImageUploader({imageURL, onImageSelected }) {
  const [selectedImage, setSelectedImage] = useState(imageURL);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
  
    reader.onloadend = () => {
      const imageData = reader.result;
      setSelectedImage(imageData);
    };
  
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <div>
      <input type="file" id="imageURL" name="imageURL" accept="image/*" onChange={handleImageChange}></input>
      {selectedImage && <img src={selectedImage} alt="Preview" style={{ maxWidth: '200px' }} />}
      <div>{selectedImage && onImageSelected(selectedImage)}</div>
    </div>
  );
}
