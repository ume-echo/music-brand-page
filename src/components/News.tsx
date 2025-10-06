import React, { useState, memo } from 'react';
import { Box, Typography, Link, Paper, Button } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { IMAGE_PATHS } from '../constants/paths';

const News: React.FC = () => {
  const [showAll, setShowAll] = useState(false);

  const newsData = [
    { date: '2025.09.29', title: '楽曲をアップしました フリーBGM/作業用BGM「twinkle」', link: '/music?category=free_bgm' },
    { date: '2025.08.05', title: '楽曲をアップしました フリーBGM/作業用BGM「Parade」', link: '/music?category=free_bgm' },
    { date: '2025.07.30', title: '楽曲をアップしました オリジナル楽曲「小さな隣人」', link: '/music?category=original_song' },
    { date: '2025.07.30', title: '楽曲をアップしました オリジナル楽曲「猫の瞳」', link: '/music?category=original_song' },
    { date: '2025.07.30', title: '楽曲をアップしました オリジナル楽曲「確率」', link: '/music?category=original_song' },
    { date: '2025.07.28', title: '楽曲をアップしました フリーBGM/作業用BGM「入道雲」', link: '/music?category=free_bgm' },
    { date: '2025.07.23', title: '楽曲をアップしました フリーBGM/作業用BGM「Rainy」', link: '/music?category=free_bgm' },
    { date: '2024.07.20', title: 'umeの公式HPをオープンしました。', link: '/blog/1' },
  ];

  const displayedNews = showAll ? newsData : newsData.slice(0, 7);

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
      <Box
        sx={{
          height: { xs: 200, md: 300 },
          backgroundImage: `url(${IMAGE_PATHS.NEWS_IMAGE})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'white',
          textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
          mb: 4,
          flexShrink: 0,
        }}
      >
        <Typography variant="h2" component="h1" gutterBottom>
          News
        </Typography>
      </Box>
      <Paper elevation={0} sx={{ p: 2, border: '1px solid #b2ebf2', flexShrink: 0 }}>
        {displayedNews.map((newsItem, index) => (
          <Box key={index} sx={{ mb: 2 }}>
            <Typography variant="body2" color="text.secondary">{newsItem.date}</Typography>
            <Link component={RouterLink} to={newsItem.link} underline="hover" color="inherit">
              <Typography variant="h6">{newsItem.title}</Typography>
            </Link>
          </Box>
        ))}
        {newsData.length > 7 && !showAll && (
          <Box sx={{ textAlign: 'center', mt: 2 }}>
            <Button onClick={() => setShowAll(true)} variant="outlined">
              もっと見る
            </Button>
          </Box>
        )}
      </Paper>
      <Box sx={{ mt: 2, flexGrow: 1, display: 'flex', flexDirection: 'column', gap: 2 }}>
        <Paper
          elevation={8}
          sx={{
            flexGrow: 1,
            minHeight: '60px',
            p: 2,
            textAlign: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            position: 'relative',
            overflow: 'hidden',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <img
            src={IMAGE_PATHS.NEWS_IMAGE}
            alt="フリーBGM/作業用BGM"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
              zIndex: -1,
            }}
          />
          <Link component={RouterLink} to="/music?category=free_bgm" underline="hover" color="inherit">
            <Typography variant="h6">フリーBGM/作業用BGMはこちら</Typography>
          </Link>
        </Paper>
        <Paper
          elevation={8}
          sx={{
            flexGrow: 1,
            minHeight: '60px',
            p: 2,
            textAlign: 'center',
            backgroundImage: `url(${IMAGE_PATHS.IMAGE_FX_14})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            color: 'white',
            textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          <Link component={RouterLink} to="/music?category=original_song" underline="hover" color="inherit">
            <Typography variant="h6">オリジナル楽曲はこちら</Typography>
          </Link>
        </Paper>
      </Box>
    </Box>
  );
};

export default memo(News);
