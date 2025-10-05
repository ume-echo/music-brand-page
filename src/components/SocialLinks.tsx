import React from 'react';
import { Box, IconButton, Typography } from '@mui/material';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article'; // note用のアイコンをインポート

const SocialLinks: React.FC = () => {
  return (
    <Box sx={{ my: 4 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Follow Us
      </Typography>
      {/* X (Twitter) のリンクを更新 */}
      <IconButton aria-label="twitter" href="https://x.com/hachi_to_koume" target="_blank">
        <TwitterIcon />
      </IconButton>
      <IconButton aria-label="youtube" href="https://www.youtube.com/@ume_to_necocha" target="_blank">
        <YouTubeIcon />
      </IconButton>
      {/* note のリンクを追加 */}
      <IconButton
        aria-label="note"
        href="https://note.com/hachi_to_ume"
        target="_blank"
      >
        <ArticleIcon />
      </IconButton>
    </Box>
  );
};

export default SocialLinks;