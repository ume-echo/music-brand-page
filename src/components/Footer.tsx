import React from 'react';
import { Box, Container, Typography, Link, Divider } from '@mui/material';
import SocialLinks from './SocialLinks';
import { Link as RouterLink } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#f5f5f5',
        color: 'black',
        py: 4,
        mt: 8,
        borderTop: '1px solid #e0e0e0',
      }}
    >
      <Container maxWidth="lg">
        <Box sx={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', mx: -2 }}>
          <Box sx={{ width: { xs: '100%', sm: '33.33%' }, px: 2, mb: { xs: 4, sm: 0 } }}>
            <Typography variant="h6" gutterBottom component={RouterLink} to="/" sx={{ color: 'black', textDecoration: 'none', fontFamily: 'Noto Serif JP, serif', fontWeight: 700 }}>
              綴音 - tsuzuri-ne
            </Typography>
            <Typography variant="body2">
              AIで楽曲制作を手掛けるクリエイター"ume"の公式サイト。
            </Typography>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '33.33%' }, px: 2, mb: { xs: 4, sm: 0 } }}>
            <Typography variant="h6" gutterBottom>
              Sitemap
            </Typography>
            <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
              <Box sx={{ width: '50%' }}>
                <Link component={RouterLink} to="/" color="inherit" display="block">Home</Link>
                <Link component={RouterLink} to="/music" color="inherit" display="block">Music</Link>
                <Link component={RouterLink} to="/news" color="inherit" display="block">News</Link>
                <Link component={RouterLink} to="/blog" color="inherit" display="block">Blog</Link>
              </Box>
              <Box sx={{ width: '50%' }}>
                <Link component={RouterLink} to="/profile" color="inherit" display="block">Profile</Link>
                <Link component={RouterLink} to="/movie" color="inherit" display="block">Movie</Link>
                <Link component={RouterLink} to="/contact" color="inherit" display="block">Contact</Link>
                <Link component={RouterLink} to="/terms" color="inherit" display="block">Terms</Link>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', sm: '33.33%' }, px: 2 }}>
            <SocialLinks showTitle={false} />
          </Box>
        </Box>
        <Divider sx={{ my: 4 }} />
        <Typography variant="body2" color="text.secondary" align="center">
          {'© '}
          {new Date().getFullYear()}
          {' tsuzuri-ne. All Rights Reserved.'}
        </Typography>
      </Container>
    </Box>
  );
};

export default Footer;
