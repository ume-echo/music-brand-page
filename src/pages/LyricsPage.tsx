import React from 'react';
import { useParams } from 'react-router-dom';
import { musicTracks } from '../data/musicTracks';
import { Box, Typography, Paper } from '@mui/material';

const LyricsPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const track = musicTracks.find(t => t.id === id);

  if (!track || !track.lyrics) {
    return (
      <Box sx={{ padding: 3, paddingTop: '100px' }}>
        <Typography variant="h4">曲が見つからないか、歌詞がありません。</Typography>
      </Box>
    );
  }

  return (
    <Box sx={{ padding: 3, paddingTop: '100px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        {track.title} - 歌詞
      </Typography>
      <Paper elevation={3} sx={{ p: 3 }}>
        <Typography variant="body1" sx={{ whiteSpace: 'pre-wrap' }}>
          {track.lyrics}
        </Typography>
      </Paper>
    </Box>
  );
};

export default LyricsPage;
