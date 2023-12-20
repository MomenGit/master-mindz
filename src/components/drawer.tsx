'use client';
import {
  CheckCircleRounded,
  GroupRounded,
  HomeRounded,
  Message,
} from '@mui/icons-material';
import MenuIcon from '@mui/icons-material/Menu';
import MuiDrawer from '@mui/material/Drawer';
import {
  CSSObject,
  CssBaseline,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Theme,
  styled,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { usePathname } from 'next/navigation';

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
/*const DrawerFooter = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-start',
  padding: theme.spacing(0, 1),
  marginTop: 'auto',
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));
*/
const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',

  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}));

export function MiniDrawer() {
  const theme = useTheme();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const links = [
    {
      name: 'App',
      href: '/app',
      icon: <HomeRounded />,
    },
    {
      name: 'Group',
      href: '/app/groups',
      icon: <GroupRounded />,
    },
    { name: 'TODOs', href: '/app/todos', icon: <CheckCircleRounded /> },
    { name: 'Messages', href: '/app/messages', icon: <Message /> },
  ];
  const handleDrawer = () => {
    setOpen(!open);
  };

  return (
    <>
      <CssBaseline />
      <Drawer
        theme={theme}
        variant="permanent"
        open={open}
        sx={{ bgcolor: 'primary.main' }}
        PaperProps={{
          sx: {
            backgroundColor: 'purple',
            color: 'white',
          },
        }}
      >
        <DrawerHeader>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawer}
          >
            <MenuIcon />
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {links.map((link) => (
            <ListItem key={link?.name} disablePadding sx={{ display: 'block' }}>
              <ListItemButton
                href={link.href}
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  bgcolor: pathname == link.href ? 'white' : '',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                    color: pathname === link.href ? 'primary.main' : 'white',
                  }}
                >
                  {link?.icon}
                </ListItemIcon>
                <ListItemText
                  primary={link?.name}
                  sx={{ opacity: open ? 1 : 0 }}
                />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
      </Drawer>
    </>
  );
}
