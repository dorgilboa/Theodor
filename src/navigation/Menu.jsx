import * as React from 'react';

import { menuProps } from '../config/config';
import { Box, Divider, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material';
import { cssVar } from '../styles/Themes';

export const toggleMenuOpenContext = React.createContext();

export default function TheodorMenu({children}) {
  const [open, setOpen] = React.useState(false);

  const toggleOpen = (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setOpen(!open)
  };

  const list = () => (
    <Box
      sx={{ width: menuProps.width, background: "var(--primary-dark)" }}
      role="presentation"
      onClick={toggleOpen}
      onKeyDown={toggleOpen}
    >
      <List>
        {menuProps.pages.map((page, index) => (
          <ListItem key={`page_${index}`} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {page.pageIcon}
              </ListItemIcon>
              <ListItemText primary={page.pageName} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider sx={{borderColor: cssVar("--secondary-dark")}}/>
    </Box>
  );

  return (
    <toggleMenuOpenContext.Provider value={toggleOpen}>
      <React.Fragment key={menuProps.side}>
        <Drawer
          anchor={menuProps.side}
          open={open}
          onClose={toggleOpen}
          PaperProps={{sx:{background:"var(--primary-dark)"}}}
        >
          {list()}
        </Drawer>
      </React.Fragment>
      {children}
    </toggleMenuOpenContext.Provider>
  );
}
