import React from 'react';
import { Box, List, ListItem, ListItemButton, ListItemText, Divider } from '@mui/material';
import { Link } from 'react-router-dom';

interface SidebarProps {
  toggleDrawer: (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ toggleDrawer }) => {
  return (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      onClick={toggleDrawer(false)}
      onKeyDown={toggleDrawer(false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/">
            <ListItemText primary="TOP" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/news">
            <ListItemText primary="NEWS" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/profile">
            <ListItemText primary="PROFILE" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/music">
            <ListItemText primary="Music/BGM" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/movie">
            <ListItemText primary="MOVIE" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/disco">
            <ListItemText primary="Disco/Works" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/blog">
            <ListItemText primary="BLOG" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/terms">
            <ListItemText primary="利用規約" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton component={Link} to="/contact">
            <ListItemText primary="お問い合わせ" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      {/* 必要に応じてここに他のメニュー項目を追加 */}
    </Box>
  );
};

export default Sidebar;