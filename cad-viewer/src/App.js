import React, { useState, useRef } from "react";
import CADViewer from "./cadview";
import "./App.css";

function App() {
  const [fileUrl, setFileUrl] = useState(null);
  const [file, setFile] = useState(null);
  const fileInputRef = useRef();
  const handleFileUpload = (event) => {
    const uploadedFile = event.target.files[0];
    if (uploadedFile) {
      setFile(uploadedFile);
      const url = URL.createObjectURL(uploadedFile);
      setFileUrl(url);
    }
  };
  return (
    <div className="app-container">
      <header className="app-header">
        <h1>3D CAD Viewer</h1>
      </header>
      <main className="app-main">
        <section className="upload-section">
          <label className="upload-label" htmlFor="fileUpload">
            Choose a File
          </label>
          <input
            id="fileUpload"
            ref={fileInputRef}
            type="file"
            accept=".stl,.obj"
            onChange={handleFileUpload}
            className="file-input"
          />
        </section>
        <section className="viewer-section">
          {fileUrl ? (
            <>
              <p className="upload-info">File uploaded: {file?.name}</p>
              <CADViewer fileUrl={fileUrl} file={file} />
            </>
          ) : (
            <p className="upload-info">No file uploaded yet.</p>
          )}
        </section>
      </main>
    </div>
  );
}
export default App;


