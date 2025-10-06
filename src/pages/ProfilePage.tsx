import React from 'react';
import { Box, Container, Typography } from '@mui/material';
import { IMAGE_PATHS } from '../constants/paths';

const ProfilePage: React.FC = () => {
  return (
    <Container maxWidth="md" sx={{ textAlign: 'center', py: { xs: 8, md: 4 } }}>
      <Typography variant="h4" component="h1" gutterBottom>
        Profile
      </Typography>
      <Box
        component="img"
        sx={{
          height: { xs: 150, md: 200 },
          width: { xs: 150, md: 200 },
          borderRadius: '50%',
          objectFit: 'cover',
          mb: 2,
          border: '3px solid #add8e6'
        }}
        alt="Profile Image"
        src={IMAGE_PATHS.NEW_PROFILE}
      />
      
      <Typography variant="h6" component="h2">
        ume
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        フリーBGM、作業用BGMとして楽曲をアップします。<br />
        楽曲はAIで作成しています。<br />
        作詞はumeのオリジナルです。<br />
        AI楽曲も一期一会。<br />
        世界にひとつだけの音楽で日常を彩ります。
      </Typography>
      <Typography variant="h6" component="h2" sx={{ mt: 4, fontWeight: 'bold' }}>
        umeの足跡
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        Ｘ（旧ツイッター）：umeのつぶやきを垣間見れます
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        youtube：umeの制作活動を追うことが出来ます
      </Typography>
      <Typography variant="body1" color="text.secondary" sx={{ mt: 1 }}>
        note：umeの記録のすべてがここに
      </Typography>
    </Container>
  );
};

export default ProfilePage;