import React from 'react';
import { Box, Container, Typography, Paper, Button, Grid, Dialog, DialogContent, Card, CardContent, CardMedia, CardActions } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import News from '../components/News';
import MusicSection from '../components/MusicSection';
import SocialLinks from '../components/SocialLinks';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

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
  };

  const images = [
    { src: process.env.PUBLIC_URL + '/確率.png.png', alt: '確率' },
    { src: process.env.PUBLIC_URL + '/小さな隣人.PNG', alt: '小さな隣人' },
    { src: process.env.PUBLIC_URL + '/IMG_8360.PNG', alt: '猫の瞳' },
  ];
  return (
    <>
      <Box sx={{ width: '100%', height: '100vh', position: 'relative' }}>
        <img
          src={process.env.PUBLIC_URL + "/IMG_8987.JPG"}
          alt="Main Visual"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 1,
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
      <Container maxWidth="md">
        <News />
        <Box sx={{ py: 4, backgroundColor: '#f5f5f5', textAlign: 'center' }}>
          <Container maxWidth="md">
            <Typography variant="h4" component="h2" gutterBottom>
              umeの歌詞置き場
            </Typography>
            <Slider {...sliderSettings}>
              {images.map((image, index) => (
                <div key={index} onClick={() => handleClickOpen(image.src)} style={{ padding: '0 10px' }}>
                  <img
                    src={image.src}
                    alt={image.alt}
                    style={{
                      width: 'calc(100% - 20px)',
                      margin: '0 10px',
                      height: 'auto',
                      objectFit: 'cover',
                      cursor: 'pointer',
                    }}
                  />
                </div>
              ))}
            </Slider>
          </Container>
        </Box>
        <MusicSection />
        <Box sx={{ textAlign: 'center', py: 4 }}>
          <Typography variant="h4" component="h2" gutterBottom>
            Movie
          </Typography>
          <Box sx={{ position: 'relative', display: 'inline-block' }}>
            <img src={process.env.PUBLIC_URL + "/image5.jpeg"} alt="Movie Thumbnail" style={{ maxWidth: '100%', height: 'auto', display: 'block' }} />
            <Box
              sx={{
                position: 'absolute',
                top: 0,
                left: 0,
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
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 4, mt: 4, mb: 4 }}>
          <Box sx={{ width: '100%' }}>
            <Card sx={{ display: 'flex', width: '100%' }}>
              <CardMedia
                component="img"
                sx={{ width: 151 }}
                image={process.env.PUBLIC_URL + "/new-profile.jpeg"}
                alt="Profile"
              />
              <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ flex: '1 0 auto' }}>
                  <Typography component="div" variant="h5">
                    Profile
                  </Typography>
                  <Typography variant="subtitle1" color="text.secondary" component="div">
                    AIで楽曲制作を手掛けるクリエイター"ume"<br />
                    作詞はumeのオリジナルで淡い世界観が特徴です<br />
                    ひっそりと心の奥底にしまってある感情を<br />
                    umeがそっと引き出します
                  </Typography>
                </CardContent>
                <CardActions>
                  <Button size="small" component={Link} to="/profile">
                    詳しく見る
                  </Button>
                </CardActions>
              </Box>
            </Card>
          </Box>
          <Box sx={{ width: '100%' }}>
            <Paper elevation={3} sx={{ p: 2, textAlign: 'center' }}>
              <SocialLinks />
            </Paper>
          </Box>
        </Box>
      </Container>
      <Dialog open={open} onClose={handleClose} maxWidth="md" fullWidth>
        <DialogContent>
          <img src={selectedImage} alt="拡大画像" style={{ width: '100%', height: 'auto' }} />
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HomePage;