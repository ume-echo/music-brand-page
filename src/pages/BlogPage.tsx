import React from 'react';
import { Link } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import { styled } from '@mui/material/styles';

const BlogHeader = styled(Box)(({ theme }) => ({
  height: 300,
  backgroundImage: 'url(/rainy-image.jpg)',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: 'white',
  textShadow: '2px 2px 4px rgba(0, 0, 0, 0.6)',
  marginBottom: theme.spacing(4),
}));

const BlogPage: React.FC = () => {
  return (
    <Box sx={{ padding: 3 }}>
      <BlogHeader>
        <Typography variant="h2" component="h1" gutterBottom>
          Blog
        </Typography>
      </BlogHeader>
      <List>
        {blogPosts
          .slice()
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
          .map((post) => (
          <React.Fragment key={post.id}>
            <ListItem component={Link} to={`/blog/${post.id}`} sx={{ '&:hover': { backgroundColor: '#f0f0f0' } }}>
              <ListItemText
                primary={post.title}
                secondary={post.date}
                primaryTypographyProps={{ variant: 'h6' }}
                secondaryTypographyProps={{ variant: 'body2', color: 'text.secondary' }}
              />
            </ListItem>
            <Divider component="li" />
          </React.Fragment>
        ))}
      </List>
    </Box>
  );
};

export default BlogPage;