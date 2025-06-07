'use client';

import { AppBar, Toolbar, IconButton, Typography, Box, Button, Menu, MenuItem, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import LanguageIcon from '@mui/icons-material/Language';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CloseIcon from '@mui/icons-material/Close';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Image from 'next/image';
import { useState } from 'react';

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [openDrawer, setOpenDrawer] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const toggleDrawer = (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }
    setOpenDrawer(open);
  };

  return (
    <AppBar position="static" color="transparent" elevation={0} className="bg-white">
      {/* Utility Navigation */}
      <Box className="hidden md:flex w-full justify-between items-center px-4 py-2 bg-gray-50 text-sm border-b border-b-[1px] border-gray-300">
        {/* Country Selector */}
        <Box className="flex items-center">
          <Button 
            color="inherit" 
            className="normal-case hover:bg-gray-100"
            onClick={handleMenuClick}
          >
            <LanguageIcon fontSize="small" sx={{ mr: 0.5 }} />
            <Typography variant="body2" component="span" className="font-bold" sx={{ fontWeight: 'bold' }}>PH</Typography>
            <Typography variant="body2" component="span">&nbsp;| EN</Typography>
            <ExpandMoreIcon fontSize="medium" sx={{ ml: 0.5 }} />
          </Button>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
            className="mt-1"
          >
            <MenuItem onClick={handleClose}>English (US)</MenuItem>
            <MenuItem onClick={handleClose}>English (UK)</MenuItem>
            <MenuItem onClick={handleClose}>Español</MenuItem>
          </Menu>
        </Box>

        {/* Utility Links */}
        <Box component="nav" aria-label="Featured Links">
          <ul className="flex space-x-6 list-none p-0 m-0">
            <li>
              <Button color="inherit" href="#" className="normal-case hover:text-purple-700" target="_blank" rel="noopener noreferrer">
                News
              </Button>
            </li>
            <li>
              <Button color="inherit" href="#" className="normal-case hover:text-purple-700" target="_blank" rel="noopener noreferrer">
                Investor Relations
              </Button>
            </li>
            <li>
              <Button color="inherit" href="#" className="normal-case hover:text-purple-700" target="_blank" rel="noopener noreferrer">
                Careers
              </Button>
            </li>
          </ul>
        </Box>
      </Box>

      {/* Main Navigation */}
      <Toolbar className="flex justify-between items-center px-4 py-3">
        {/* Left section: Menu */}
        <Box className="flex items-center border-r border-r-[1px] border-gray-300 pr-10 pl-4 h-[80px] -mt-3 -mb-3">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 1 }}
            className="hover:text-purple-700"
            onClick={toggleDrawer(true)}
          >
            {openDrawer ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography variant="body1" component="div" className="text-gray-700">
            Menu
          </Typography>
        </Box>

        {/* Center section: Logo */}
        <Box className="flex-1 flex justify-center">
          <Image
            src="/images/Logo_Desktop.svg"
            alt="WTW Logo"
            width={150}
            height={70}
            className="cursor-pointer"
          />
        </Box>

        {/* Right section: Search */}
        <Box className="flex items-center border-l border-l-[1px] border-gray-300 pl-10 pr-4 h-[80px] -mt-3 -mb-3">
          <Typography variant="body1" component="div" sx={{ mr: 1 }} className="text-gray-700">
            Search
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
            className="hover:text-purple-700"
          >
            <SearchIcon />
          </IconButton>
        </Box>
      </Toolbar>

      <Drawer
        anchor="left"
        open={openDrawer}
        onClose={toggleDrawer(false)}
      >
        <Box
          sx={{ width: 350 }}
          role="presentation"
          onClick={toggleDrawer(false)}
          onKeyDown={toggleDrawer(false)}
        >
          <Box className="flex items-center border-b border-gray-300 h-[80px] px-4 py-3">
            <Button
              color="inherit"
              className="normal-case hover:bg-gray-100 text-purple-700"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon sx={{ mr: 1 }} />
              <Typography variant="body1" component="div" className="font-bold">
                Menu
              </Typography>
            </Button>
          </Box>
          <List>
            <ListItem onClick={toggleDrawer(false)} className="flex justify-between items-center group">
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#7c3aed', // Purple-700
                  },
                }}
              >
                About Us
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-purple-700 transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem>
            <ListItem onClick={toggleDrawer(false)} className="flex justify-between items-center group">
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#7c3aed', // Purple-700
                  },
                }}
              >
                Solutions
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-purple-700 transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem>
            <ListItem onClick={toggleDrawer(false)} className="flex justify-between items-center group">
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#7c3aed',
                  },
                }}
              >
                Insights
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-purple-700 transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header; 