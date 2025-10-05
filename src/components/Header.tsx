import React from 'react';
import { AppBar, Toolbar, Typography, IconButton } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import TwitterIcon from '@mui/icons-material/Twitter';
import YouTubeIcon from '@mui/icons-material/YouTube';
import ArticleIcon from '@mui/icons-material/Article';
import { Link } from 'react-router-dom';

interface HeaderProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDrawer }) => {
  return (
    <AppBar position="absolute" sx={{ backgroundColor: 'transparent', boxShadow: 'none', top: '15px' }}>
      <Toolbar>
        <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2, color: 'black' }}
          onClick={toggleDrawer(true)}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="h6" component={Link} to="/" sx={{ flexGrow: 1, color: 'black', textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
          <span style={{ fontFamily: 'Noto Serif JP, serif', fontWeight: 700, fontSize: '1.5rem' }}>綴音</span>
          <span style={{ marginLeft: '8px' }}>tsuzuri-ne</span>
        </Typography>
        <IconButton aria-label="twitter" href="https://x.com/hachi_to_koume" target="_blank" sx={{ color: 'black' }}>
          <TwitterIcon />
        </IconButton>
        <IconButton aria-label="youtube" href="https://www.youtube.com/@ume_to_necocha" target="_blank" sx={{ color: 'black' }}>
          <YouTubeIcon />
        </IconButton>
        <IconButton
          aria-label="note"
          href="https://note.com/hachi_to_ume"
          target="_blank"
          sx={{ color: 'black' }}
        >
          <ArticleIcon />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;