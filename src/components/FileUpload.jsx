import React, { useState } from 'react';
import { storage, firestore } from '../firebase';

const FileUpload = () => {
  const [file, setFile] = useState(null);
  const [error, setError] = useState(null);

  const handleChange = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
    } else {
      setError('Please select a file');
    }
  };

  const handleUpload = () => {
    if (file) {
      const storageRef = storage.ref(`uploads/${file.name}`);
      const uploadTask = storageRef.put(file);
      uploadTask.on('state_changed', 
        (snapshot) => {},
        (error) => {
          console.error(error);
          setError(error.message);
        },
        () => {
          uploadTask.snapshot.ref.getDownloadURL().then((downloadURL) => {
            firestore.collection('files').add({
              name: file.name,
              url: downloadURL,
              createdAt: new Date()
            });
          });
        }
      );
    } else {
      setError('Please select a file');
    }
  };

  return (
    <div>
      <input type="file" onChange={handleChange} />
      <button onClick={handleUpload}>Upload</button>
      {error && <div>{error}</div>}
    </div>
  );
};

export default FileUpload;
