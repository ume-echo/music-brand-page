import React, { useState, useEffect } from 'react';
import { Box, Typography, Paper, Chip, Button } from '@mui/material';
import { musicTracks } from '../data/musicTracks';
import { useLocation, Link } from 'react-router-dom';

const useQuery = () => {
  return new URLSearchParams(useLocation().search);
}

const MusicPage: React.FC = () => {
  const query = useQuery();
  const categoryFromQuery = query.get('category');

  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedCategory, setSelectedCategory] = useState<'free_bgm' | 'original_song' | 'all'>('all');
  const [filteredTracks, setFilteredTracks] = useState(musicTracks);

  useEffect(() => {
    if (categoryFromQuery === 'free_bgm' || categoryFromQuery === 'original_song') {
      setSelectedCategory(categoryFromQuery);
    }
  }, [categoryFromQuery]);

  const allTags = Array.from(new Set(musicTracks.flatMap(track =>
    track.content.filter(block => block.startsWith('#'))
  )));

  useEffect(() => {
    let tracksToFilter = [...musicTracks].sort((a, b) => a.order - b.order);

    if (selectedCategory !== 'all') {
      tracksToFilter = tracksToFilter.filter(track => track.category === selectedCategory);
    }

    if (selectedTags.length > 0) {
      tracksToFilter = tracksToFilter.filter(track =>
        selectedTags.every(tag => track.content.includes(tag))
      );
    }
    setFilteredTracks(tracksToFilter);
  }, [selectedTags, selectedCategory]);

  const handleTagClick = (tag: string) => {
    setSelectedTags(prevSelectedTags =>
      prevSelectedTags.includes(tag)
        ? prevSelectedTags.filter(t => t !== tag)
        : [...prevSelectedTags, tag]
    );
  };

  const handleClearFilters = () => {
    setSelectedTags([]);
  };

  return (
    <Box sx={{ padding: 3, paddingTop: '100px' }}>
      <Typography variant="h2" component="h1" gutterBottom>
        Music
      </Typography>
      <Box sx={{ mb: 3 }}>
        <Button
          variant={selectedCategory === 'free_bgm' ? 'contained' : 'outlined'}
          onClick={() => setSelectedCategory('free_bgm')}
          sx={{ mr: 1 }}
        >
          フリーBGM/作業用BGM
        </Button>
        <Button
          variant={selectedCategory === 'original_song' ? 'contained' : 'outlined'}
          onClick={() => setSelectedCategory('original_song')}
          sx={{ mr: 1 }}
        >
          オリジナル楽曲
        </Button>
        <Button
          variant={selectedCategory === 'all' ? 'contained' : 'outlined'}
          onClick={() => setSelectedCategory('all')}
        >
          すべて
        </Button>
      </Box>
      <Box sx={{ mb: 3 }}>
        {allTags.map((tag) => (
          <Chip
            key={tag}
            label={tag}
            onClick={() => handleTagClick(tag)}
            color={selectedTags.includes(tag) ? 'primary' : 'default'}
            sx={{ mr: 1, mb: 1 }}
          />
        ))}
        {selectedTags.length > 0 && (
          <Chip
            label="フィルターをクリア"
            onClick={handleClearFilters}
            onDelete={handleClearFilters}
            color="secondary"
            sx={{ mr: 1, mb: 1 }}
          />
        )}
      </Box>
      {filteredTracks.map((track) => (
        <Paper key={track.id} elevation={3} sx={{ my: 4, p: 2, display: 'flex', alignItems: 'flex-start' }}>
          <Box sx={{ width: 100, height: 100, mr: 2, flexShrink: 0 }}>
            <img src={track.image} alt={track.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          </Box>
          <Box sx={{ width: '30%', mr: 2, flexShrink: 0 }}>
            <Typography variant="h5" component="h2" gutterBottom>
              {track.title}
            </Typography>
            <audio controls src={track.audio} style={{ width: '100%' }}>
              お使いのブラウザは音声要素をサポートしていません。
            </audio>
          </Box>
          <Box sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
            <Box>
              {track.content
                .filter((p) => p.startsWith('//'))
                .map((paragraph, index) => (
                  <Typography key={index} variant="body2" color="text.secondary" sx={{ textAlign: 'left' }}>
                    {paragraph.substring(2).trim()}
                  </Typography>
                ))}
            </Box>
            <Box sx={{ mt: 1 }}>
              {track.content
                .filter((p) => p.startsWith('#'))
                .map((tag, index) => (
                  <Chip key={index} label={tag} sx={{ mr: 1, mt: 1 }} />
                ))}
            </Box>
            {track.category === 'original_song' && track.lyrics && (
              <Box sx={{ mt: 2 }}>
                <Button component={Link} to={`/music/${track.id}/lyrics`} variant="contained">
                  歌詞を見る
                </Button>
              </Box>
            )}
          </Box>
        </Paper>
      ))}
    </Box>
  );
};

export default MusicPage;
