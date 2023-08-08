import React, {useEffect} from 'react';
import { useState } from 'react';

export default function ImageUploader({ onImageSelected }) {
  const [selectedImageUrl, setSelectedImageUrl] = useState(null);
  const [selectedImageFile, setSelectedImageFile] = useState(null);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      setSelectedImageUrl(reader.result);
    };

    if (file) {
      setSelectedImageFile(file);
      reader.readAsDataURL(file);
    }
  };

  useEffect(() => {
    onImageSelected(selectedImageFile);
  },[selectedImageFile, onImageSelected]);

  return (
    <div>
      <input type='file' id='imageURL' name='imageURL' accept='image/*' onChange={handleImageUpload}></input>
      <div style={{ marginTop: '10px' }}>
        {selectedImageUrl && <img src={selectedImageUrl} alt='Preview' style={{ maxWidth: '100px' }} />}
      </div>
    </div>
  );
}
