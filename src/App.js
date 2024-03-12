import React from 'react';
import FileUpload from './components/FileUpload';
import FilesList from './components/FilesList';

function App() {
  return (
    <div>
      <h1>File Upload App</h1>
      <FileUpload />
      <FilesList />
    </div>
  );
}

export default App;
