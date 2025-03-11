import React from "react";
import axios from "axios";
import * as THREE from "three";
import { Canvas, useLoader } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { STLLoader } from "three/examples/jsm/loaders/STLLoader";
import { OBJExporter } from "three/examples/jsm/exporters/OBJExporter";

// Model component that loads and displays an STL file
function Model({ fileUrl }) {
  const geometry = useLoader(STLLoader, fileUrl);
  return (
    <mesh geometry={geometry}>
      <meshStandardMaterial color="orange" />
    </mesh>
  );
}
function CADViewer({ fileUrl, file }) {
  const handleConvertToObj = async () => {
    if (!file) return;

    try
     {
      const loader = new STLLoader();
      loader.load(fileUrl, (geometry) => {
        const mesh = new THREE.Mesh(geometry);
        const exporter = new OBJExporter();
        const objData = exporter.parse(mesh);
        const blob = new Blob([objData], { type: "text/plain" });
        const formData = new FormData();
        const objFileName = file.name.toLowerCase().endsWith(".stl")
          ? file.name.replace(/\.stl$/i, ".obj")
          : file.name + ".obj";
        formData.append("file", blob, objFileName);
        axios
          .post("http://localhost:4000/upload-obj", formData, {
            headers: { "Content-Type": "multipart/form-data" },
          })
          .then((response) => {
            alert("OBJ file uploaded successfully: " + response.data.filePath);
          })
          .catch((error) => {
            console.error("Failed to upload OBJ:", error);
          });
      });
    } catch (error) {
      console.error("Failed to convert or upload OBJ:", error);
    }
  };
  return (
    <div style={{ width: "100%", marginTop: "20px" }}>
      <div style={{ width: "80vw", height: "70vh", border: "1px solid #ccc" }}>
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <directionalLight position={[2, 2, 2]} />
          <OrbitControls />
          {fileUrl ? (
            <Model fileUrl={fileUrl} />
          ) : (
            <mesh rotation={[0.5, 0.5, 0]}>
              <boxGeometry args={[2, 2, 2]} />
              <meshStandardMaterial color="gray" />
            </mesh>
          )}
        </Canvas>
      </div>
      {file && (
        <button
          className="convert-button"
          style={{
            marginTop: "10px",
            padding: "8px 16px",
            backgroundColor: "#4a90e2",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
          onClick={handleConvertToObj}
        >
          Convert to OBJ and Upload
        </button>
      )}
    </div>
  );
}

export default CADViewer;



