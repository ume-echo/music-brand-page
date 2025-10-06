import React from 'react';
import { Box, Container, Typography, Paper, Button, Dialog, DialogContent, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import News from '../components/News';
import MusicSection from '../components/MusicSection';
import SocialLinks from '../components/SocialLinks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { IMAGE_PATHS } from '../constants/paths';

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  nextArrow: <ArrowForwardIcon />,
  prevArrow: <ArrowForwardIcon />,
  responsive: [
    { breakpoint: 960, settings: { slidesToShow: 2 } },
    { breakpoint: 600, settings: { slidesToShow: 1 } },
  ],
};

const images = [
  { src: IMAGE_PATHS.KAKURITSU_PNG, alt: '確率' },
  { src: IMAGE_PATHS.CHIISANA_RINJIN_PNG, alt: '小さな隣人' },
  { src: IMAGE_PATHS.IMG_8360, alt: '猫の瞳' },
];

const HomePage: React.FC = () => {
  const [open, setOpen] = React.useState(false);
  const [selectedImage, setSelectedImage] = React.useState('');

  const handleClickOpen = (image: string) => {
    setSelectedImage(image);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box sx={{ width: '100%', height: { xs: '60vh', md: '100vh' }, position: 'relative' }}>
        <Box
          component="img"
          src={IMAGE_PATHS.IMG_8987}
          alt="Main Visual"
          sx={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: -1, // ヘッダーの下になるように調整
          }}
        />
      </Box>

      <Box sx={{ py: 6, backgroundColor: 'background.paper' }}>
        <Container maxWidth="md">
          <Typography variant="h5" component="p" align="center" gutterBottom sx={{ fontFamily: 'serif', fontStyle: 'italic' }}>
            もしも君がただすれ違うだけの誰かだったなら<br />すれ違う可能性ですらなかったのかもしれない
          </Typography>
          <Typography variant="body1" component="p" align="center">
            ume「確率」
          </Typography>
        </Container>
      </Box>

      <Container maxWidth="lg" sx={{ mt: 4 }}>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2, mb: { xs: 4, md: 0 }, display: 'flex' }}>
            <News />
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2, display: 'flex' }}>
            <MusicSection />
          </Box>
        </Box>

        <Box sx={{ py: 4, mt: 4, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
              umeの歌詞置き場
            </Typography>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <Box key={index} onClick={() => handleClickOpen(image.src)} sx={{ padding: '0 10px', cursor: 'pointer' }}>
                  <Box
                    component="img"
                    src={image.src}
                    alt={image.alt}
                    sx={{ width: '100%', height: 'auto', objectFit: 'cover' }}
                  />
                </Box>
              ))}
            </Slider>
          </Container>
        </Box>

        <Box sx={{ display: 'flex', flexWrap: 'wrap', mt: 4, mx: -2 }}>
          <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2, mb: { xs: 4, md: 0 }, display: 'flex' }}>
            <Box sx={{ textAlign: 'center', width: '100%', display: 'flex', flexDirection: 'column' }}>
              <Typography variant="h4" component="h2" gutterBottom>
                Movie
              </Typography>
              <Box sx={{ position: 'relative', flexGrow: 1, minHeight: '200px' }}>
                <Box
                  component="img"
                  src={IMAGE_PATHS.IMAGE_5}
                  alt="Movie Thumbnail"
                  sx={{ width: '100%', height: '100%', objectFit: 'cover', position: 'absolute', top: 0, left: 0 }}
                />
                <Box
                  sx={{
                    position: 'relative',
                    width: '100%',
                    height: '100%',
                    backgroundColor: 'rgba(255, 255, 255, 0.7)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <Typography variant="h5" component="div" sx={{ color: 'black', fontWeight: 'bold' }}>
                    Coming Soon...
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>
          <Box sx={{ width: { xs: '100%', md: '50%' }, px: 2, display: 'flex' }}>
            <Card sx={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
              <CardMedia
                component="img"
                sx={{ height: 140 }}
                image={IMAGE_PATHS.NEW_PROFILE}
                alt="Profile"
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography component="div" variant="h5">
                  Profile
                </Typography>
                <Typography variant="subtitle1" color="text.secondary" component="div" sx={{ mt: 1 }}>
                  AIで楽曲制作を手掛けるクリエイター"ume"<br />
                  作詞はumeのオリジナルで淡い世界観が特徴です。
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" component={Link} to="/profile">
                  詳しく見る
                </Button>
              </CardActions>
            </Card>
          </Box>
        </Box>

        <Box sx={{ width: '100%', mt: 4, mb: 4 }}>
          <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
            <SocialLinks />
          </Paper>
        </Box>
      </Container>

      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <Box
            component="img"
            src={selectedImage}
            alt="拡大画像"
            sx={{ width: '100%', height: 'auto' }}
          />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomePage;