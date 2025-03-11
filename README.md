# 3D CAD Viewer

## Overview
This project is a web-based 3D CAD viewer that allows users to upload and view STL and OBJ files. It features file upload capabilities, real-time rendering using Three.js, and an STL-to-OBJ conversion functionality.

## Features
- Upload and view 3D models in `.stl` and `.obj` formats
- Rotate, zoom, and pan models using interactive controls
- Convert `.stl` files to `.obj` and upload them to the server
- Backend file handling with Express.js and Multer
- Responsive design with React and @react-three/fiber

## Technologies Used
### Frontend
- **React** for UI
- **Three.js & @react-three/fiber** for 3D rendering
- **Axios** for API requests
- **CSS** for styling

### Backend
- **Express.js** for server
- **Multer** for file handling
- **CORS** for cross-origin requests

## Installation & Setup

### Prerequisites
Ensure you have the following installed:
- **Node.js** (v14+ recommended)
- **npm** or **yarn**
- **Express.js**
- **Multer** 
- **CORS** 


### Steps to Run

#### 1. Clone the Repository
```bash
git clone https://github.com/your-repo/cad-viewer.git
cd CAD_PROJECT
```

#### 2. Install Dependencies
**For Frontend:**
```bash
cd cad-viewer
npm install
```
**For Backend:**
```bash
cd backend
npm install
```

#### 3. Run the Backend
```bash
cd backend
node server.js
```
_Backend will start on `http://localhost:4000/`._

#### 4. Run the Frontend
```bash
cd cad-viewer
npm start
```
Frontend will start on `http://localhost:3000/`._

## API Endpoints
| Method | Endpoint        | Description |
|--------|----------------|-------------|
| POST   | `/upload`      | Upload an STL file |
| POST   | `/upload-obj`  | Upload an OBJ file |

## Usage
1. Open the web application.
2. Click "Choose a File" to upload an STL or OBJ model.
3. View and manipulate the 3D model in the viewer.
4. Converts STL to OBJ and upload it.

## Folder Structure
```
cad-viewer/
│── ├── src/
│   │   │── cadview.js
│   │   ├── App.js
│   │   ├── App.css
│── backend/
│   ├── server.js
│   ├── uploads/
```

## Future Enhancements
- Support additional file formats
- Implement cloud storage for file uploads


