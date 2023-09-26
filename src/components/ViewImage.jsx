import React, { useState, useEffect } from 'react';

function ViewImage() {
  const [imageData, setImageData] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedCaption, setEditedCaption] = useState('');

  useEffect(() => {
    const imageDataJSON = localStorage.getItem('uploadedImage');

    if (imageDataJSON) {
      const parsedImageData = JSON.parse(imageDataJSON);
      setImageData(parsedImageData);
      setEditedCaption(parsedImageData.caption);
    }
  }, []);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    // Save the edited caption to local storage
    if (imageData) {
      const updatedImageData = {
        ...imageData,
        caption: editedCaption,
      };
      localStorage.setItem('uploadedImage', JSON.stringify(updatedImageData));
      setIsEditing(false);
    }
  };

  const handleCancel = () => {
    // Reset the edited caption and exit edit mode
    setEditedCaption(imageData ? imageData.caption : '');
    setIsEditing(false);
  };

  const handleDelete = () => {
    localStorage.removeItem('uploadedImage');
    setImageData(null);
  };

  return (
    <div>
      <h2>View Uploaded Image</h2>
      {imageData ? (
        <div>
          <img
            src={imageData.image}
            alt="Selected"
            style={{ maxWidth: '20%' }}
          />
          {isEditing ? (
            <div>
              <textarea
                value={editedCaption}
                onChange={(e) => setEditedCaption(e.target.value)}
              />
              <button onClick={handleSave}>Save</button>
              <button onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <div>
              <p>{imageData.caption}</p>
              <div>
                <button onClick={handleEdit}>Edit</button>
                <button onClick={handleDelete}>Delete</button>
              </div>
            </div>
          )}
        </div>
      ) : (
        <p>No image data found.</p>
      )}
    </div>
  );
}

export default ViewImage;
