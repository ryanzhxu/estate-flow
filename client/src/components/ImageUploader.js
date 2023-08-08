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

  const handleImageRemove = () => {
    setSelectedImageUrl(null);
    setSelectedImageFile(null);
  }

  useEffect(() => {
    onImageSelected(selectedImageFile);
  },[selectedImageFile, onImageSelected]);

  return (
    <div>
      <input type='file' id='imageURL' name='imageURL' accept='image/*' onChange={handleImageUpload}></input>
      <div style={{ marginTop: '10px', position: 'relative' }}>
        {selectedImageUrl && (
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <img src={selectedImageUrl} alt='Preview' style={{ maxWidth: '100px' }} />
              <div
                  onClick={handleImageRemove}
                  style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '-8px'
                  }}
              >
                <i className="bi bi-x-circle-fill"/>
              </div>
            </div>
        )}
      </div>
    </div>
  );
}
