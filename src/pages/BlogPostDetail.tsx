import React from 'react';
import { useParams, Link as RouterLink } from 'react-router-dom';
import { blogPosts } from '../data/blogPosts';
import { Box, Typography, Chip, Link } from '@mui/material';

const BlogPostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find((p) => p.id === id);

  if (!post) {
    return <Typography variant="h5" sx={{ padding: 3 }}>記事が見つかりませんでした。</Typography>;
  }

  const renderContent = (paragraph: string, index: number) => {
    const linkRegex = /\[(.*?)\]\((.*?)\)/g;
    const parts = [];
    let lastIndex = 0;
    let match;

    while ((match = linkRegex.exec(paragraph)) !== null) {
      const [fullMatch, text, url] = match;
      const matchIndex = match.index;

      if (matchIndex > lastIndex) {
        parts.push(paragraph.substring(lastIndex, matchIndex));
      }

      parts.push(
        <Link component={RouterLink} to={url} key={`${index}-${lastIndex}`}>
          {text}
        </Link>
      );

      lastIndex = matchIndex + fullMatch.length;
    }

    if (lastIndex < paragraph.length) {
      parts.push(paragraph.substring(lastIndex));
    }

    return parts;
  };

  return (
    <Box sx={{ padding: 3 }}>
      <Typography variant="h4" component="h1" gutterBottom>
        {post.title}
      </Typography>
      <Typography variant="subtitle1" color="text.secondary" gutterBottom>
        {post.date}
      </Typography>
      {post.image && (
        <Box
          component="img"
          src={post.image}
          alt={post.title}
          sx={{
            maxWidth: '100%',
            height: 'auto',
            marginBottom: 2,
            borderRadius: '8px',
          }}
        />
      )}
      <Typography variant="body1" component="div">
        {post.content.map((paragraph, index) => {
          if (paragraph.startsWith('//')) {
            return (
              <Typography key={index} variant="body2" color="text.secondary" sx={{ mt: 2, mb: 2 }}>
                {paragraph.substring(2).trim()}
              </Typography>
            );
          } else if (paragraph.startsWith('#')) {
            return <Chip key={index} label={paragraph} sx={{ mr: 1, mt: 1 }} />;
          } else {
            return <p key={index}>{renderContent(paragraph, index)}</p>;
          }
        })}
      </Typography>
    </Box>
  );
};

export default BlogPostDetail;

