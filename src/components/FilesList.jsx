import React, { useState, useEffect } from 'react';
import { firestore } from '../firebase';

const FilesList = () => {
  const [files, setFiles] = useState([]);

  useEffect(() => {
    const unsubscribe = firestore.collection('files')
      .orderBy('createdAt', 'desc')
      .onSnapshot((snapshot) => {
        const filesData = snapshot.docs.map(doc => ({
          id: doc.id,
          ...doc.data()
        }));
        setFiles(filesData);
      });
    
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <h2>Uploaded Files</h2>
      <ul>
        {files.map(file => (
          <li key={file.id}>
            <a href={file.url} target="_blank" rel="noopener noreferrer">{file.name}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FilesList;
