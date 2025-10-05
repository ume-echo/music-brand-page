import React from 'react';
import { Box, Typography, keyframes } from '@mui/material';

const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const MoviePage: React.FC = () => {
  return (
    <Box
      sx={{
        height: 'calc(100vh - 64px)',
        backgroundImage: `url(${process.env.PUBLIC_URL}/image5.jpeg)`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'white',
        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)',
        overflow: 'hidden',
      }}
    >
      <Typography
        variant="h2"
        component="h1"
        sx={{
          animation: `${fadeIn} 2s ease-out forwards`,
        }}
      >
        Coming Soon...
      </Typography>
    </Box>
  );
};

export default MoviePage;