import React, { useState } from "react";
import axios from "axios";
import { AddPhotoAlternateRounded } from "@mui/icons-material";
import { Box, IconButton } from "@mui/material";
import "./FabricUpload.css";

const FabricUploadComponent = () => {
  const [imageUrl, setImageUrl] = useState("");

  const uploadImage = async (file: any) => {
    try {
      const formData = new FormData();
      formData.append("fabric_image", file);

      const response = await axios.post(
        "http://127.0.0.1:8000/detect-fabric-defect",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      // Log the response to check if the data is correct
      console.log("Response Data:", response.data);

      // Set the image URL using the base64 string from the response
      setImageUrl(response.data.annotated_image);
    } catch (error) {
      console.error("Error uploading image:", error);
    }
  };

  const handleFileInputChange = (event: any) => {
    const file = event.target.files?.[0];
    if (file) {
      uploadImage(file);
    }
  };

  return (
    
    <div className="fabric-upload-container">
  <div className="content-box"> {/* A new div for better control over the box size and padding */}
    <h2 className="fabric-upload-heading">Upload Your Fabric Image</h2>
    <Box display="flex" justifyContent="center" alignItems="center" mt={2}>
      <input
        accept="image/*"
        className="fabric-upload-input"
        id="media-upload"
        type="file"
        onChange={handleFileInputChange}
      />
      <label htmlFor="media-upload" className="upload-button">
        <IconButton component="span" color="primary">
          <AddPhotoAlternateRounded />
        </IconButton>
        Upload Image
      </label>
    </Box>
    <p className="fabric-upload-instruction">
      Click the button to upload an image.
    </p>
    {imageUrl && (
      <div>
        <h3>Uploaded Image:</h3>
        <img
          src={`data:image/jpeg;base64,${imageUrl}`}
          alt="Uploaded Fabric"
          style={{ maxWidth: '100%' }}
        />
      </div>
    )}
  </div>
</div>

    
 
  );
};

export default FabricUploadComponent;
