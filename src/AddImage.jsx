import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function AddImage() {
    const [selectedImage, setSelectedImage] = useState(null);
    const [caption, setCaption] = useState('');
    const navigate = useNavigate(); // Get the navigation function
  
    const handleImageChange = (e) => {
      const file = e.target.files[0];
      setSelectedImage(URL.createObjectURL(file));
    };
  
    const handleCaptionChange = (e) => {
      setCaption(e.target.value);
    };
  
    const handleUpload = () => {
      if (selectedImage && caption) {
        // Create an object to store image and caption
        const imageData = {
          image: selectedImage,
          caption: caption,
        };
  
        // Convert the object to a JSON string
        const imageDataJSON = JSON.stringify(imageData);
  
        // Store the JSON string in local storage
        localStorage.setItem('uploadedImage', imageDataJSON);
  
        // Use navigate to redirect to the View Image page
        navigate('/view-image');
      } else {
        // Handle case where image or caption is missing
        console.error('Please select an image and provide a caption.');
      }
    };
  
    return (
      <div>
        <h2>Upload Image</h2>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
        />
        {selectedImage && (
          <div>
            <h3>Selected Image:</h3>
            <img
              src={selectedImage}
              alt="Selected"
              style={{ maxWidth: '100%' }}
            />
          </div>
        )}
        <div>
          <label htmlFor="caption">Caption:</label>
          <input
            type="text"
            id="caption"
            value={caption}
            onChange={handleCaptionChange}
          />
        </div>
        <div>
          <button onClick={handleUpload}>Upload</button>
        </div>
      </div>
    );
  }
  

export default AddImage;
