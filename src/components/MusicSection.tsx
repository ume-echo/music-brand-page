import { memo } from 'react';
import { Box, Container, Typography, Chip, Card, CardContent, CardMedia, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { musicTracks } from '../data/musicTracks';

const MusicSection: React.FC = () => {

  return (
    <Box sx={{ height: '100%', display: 'flex', flexDirection: 'column', py: 4 }}>
      <Container maxWidth="md" sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
        <Typography variant="h5" component="h2" gutterBottom align="center" sx={{ mb: 4 }}>
          music picup!
        </Typography>
        <Box sx={{ display: 'block', flexGrow: 1 }}>
          {musicTracks.slice(0, 3).map((track) => (
            <Card key={track.id} sx={{ maxWidth: 600, m: 'auto', mb: 4, display: 'flex' }}>
              <CardMedia
                component="img"
                sx={{ width: 150, flexShrink: 0 }}
                image={track.image}
                alt={track.title}
              />
              <CardContent sx={{ flexGrow: 1 }}>
                <Typography gutterBottom variant="h5" component="div">
                  {track.title}
                </Typography>
                <audio controls src={track.audio} style={{ width: '100%' }}>
                  お使いのブラウザは音声要素をサポートしていません。
                </audio>
                <Box sx={{ mt: 2 }}>
                  {track.content.map((paragraph, index) => {
                    if (paragraph.startsWith('//')) {
                      return (
                        <Typography key={index} variant="body2" color="text.secondary" sx={{ mt: 1, mb: 1 }}>
                          {paragraph.substring(2).trim()}
                        </Typography>
                      );
                    } else if (paragraph.startsWith('#')) {
                      return <Chip key={index} label={paragraph} sx={{ mr: 1, mt: 1 }} />;
                    } else {
                      return <Typography key={index} variant="body1" sx={{ mt: 1, mb: 1 }}>{paragraph}</Typography>;
                    }
                  })}
                </Box>
              </CardContent>
            </Card>
          ))}
        </Box>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button
            variant="contained"
            color="primary"
            endIcon={<ArrowForwardIcon />}
            component={Link}
            to="/music"
          >
            More
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default memo(MusicSection);