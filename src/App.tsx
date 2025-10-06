import React, { useState } from 'react';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import MusicPage from './pages/MusicPage';
import NewsPage from './pages/NewsPage';
import ProfilePage from './pages/ProfilePage';
import MoviePage from './pages/MoviePage';
import DiscoPage from './pages/DiscoPage';
import BlogPage from './pages/BlogPage';
import BlogPostDetail from './pages/BlogPostDetail';
import TermsPage from './pages/TermsPage'; // 新しく追加
import Footer from './components/Footer'; // Footerをインポート

import ContactPage from './pages/ContactPage'; // お問い合わせページをインポート
import Sidebar from './components/Sidebar'; // Sidebarコンポーネントをインポート
import ScrollToTopButton from './components/ScrollToTopButton';
import { createTheme, ThemeProvider, CssBaseline, Drawer, Box } from '@mui/material';

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#000000',
    },
    secondary: {
      main: '#ffffff',
    },
    background: {
      default: '#ffffff',
      paper: '#f5f5f5',
    },
  },
  typography: {
    fontFamily: 'sans-serif',
  },
});

const App: React.FC = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setDrawerOpen(open);
  };

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Header toggleDrawer={toggleDrawer} />
        <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
          <Sidebar toggleDrawer={toggleDrawer} />
        </Drawer>
        <Box component="main" sx={{ flexGrow: 1 }}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/music" element={<MusicPage />} />
            
            <Route path="/news" element={<NewsPage />} />
            <Route path="/profile" element={<ProfilePage />} />
            <Route path="/movie" element={<MoviePage />} />
            <Route path="/disco" element={<DiscoPage />} />
            <Route path="/blog" element={<BlogPage />} />
            <Route path="/blog/:id" element={<BlogPostDetail />} />
            <Route path="/terms" element={<TermsPage />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </Box>
        <ScrollToTopButton />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
