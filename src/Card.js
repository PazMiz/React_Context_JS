// src/components/Card.js
import React, { useState } from 'react';
import { Card, CardMedia, CardContent, Typography } from '@mui/material';

const CustomCard = ({ imageUrl, title, author }) => {
  const [selectedPhoto, setSelectedPhoto] = useState('');

  const handlePhotoChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        setSelectedPhoto(reader.result);
      };
    }
  };

  return (
    <Card sx={{ maxWidth: 400, marginBottom: 20 }}>
      <CardMedia
        component="img"
        height="250"
        image={selectedPhoto || imageUrl}
        alt={title}
      />
      <CardContent>
        <Typography variant="h5" component="div">
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Author: {author}
        </Typography>
        {/* select file */}
        <input type="file" onChange={handlePhotoChange} />  
        {/* select file */}
      </CardContent>
    </Card>
  );
};

export default CustomCard;
