import React, { useState } from 'react'
import './UseState.css'

const UseState = () => {
    const [file, setFile] = useState({});
    const [imagePreview, setImagePreview] = useState("");

    const handleUpload = (e) => {
        let reader = new FileReader();
        let file = e.target.files[0];
        reader.onload = () => {
          setFile(file);
          setImagePreview(reader.result);
        };
        if (file) {
          reader.readAsDataURL(file);
        }
      };
      
  return (
    <div className="img-container">
        <h2>UseState</h2>
    <input type="file" onChange={handleUpload} />
    <img src={imagePreview} alt="" className="img" />
    {imagePreview ? (
      <span>
        <p>Type:{file.type}</p>
        <p>Name: {file.name}</p>
        <p>Size: {file.size}</p>
      </span>
    ) : (
      "Upload Image"
    )}
  </div>
  )
}

export default UseState
