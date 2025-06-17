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

      {/* Main Navigation */}
      <Toolbar className="flex justify-between items-center px-2 md:px-4 py-2 md:py-3">
        {/* Left section: Menu */}
        <Box className="flex items-center border-r border-r-[1px] border-gray-300 pr-4 md:pr-10 pl-2 md:pl-4 h-[80px] md:h-[100px] -mt-3 -mb-3">
          <Button
            color="inherit"
            className="flex items-center normal-case hover:text-blue-600"
            onClick={toggleDrawer(true)}
            sx={{ p: 0, minWidth: 0 }}
          >
            {openDrawer ? <CloseIcon sx={{ mr: 1 }} /> : <MenuIcon sx={{ mr: 1, color: '#00aaff', }} />}
            <Typography variant="body1" component="div" className="text-sm md:text-base" sx={{ fontWeight: 'bold', color: '#00aaff' }}>
              Menu
            </Typography>
          </Button>
        </Box>

        {/* Center section: Alliance Logo */}
        <Box className="flex-2 flex justify-center items-center">
          <Image
            src="/images/alliance.png"
            alt="Alliance Logo"
            width={120}
            height={84}
            priority
            style={{ objectFit: 'contain' }}
            className="md:w-[150px] md:h-[105px]"
          />
        </Box>

        {/* Right section: Search */}
        <Box className="flex items-center border-l border-l-[1px] border-gray-300 pl-4 md:pl-10 pr-2 md:pr-4 h-[80px] md:h-[100px] -mt-3 -mb-3">
          <Typography variant="body1" component="div" sx={{ mr: 1 }} className="text-gray-700 text-sm md:text-base">
            Search
          </Typography>
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="search"
            className="hover:text-blue-600"
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
          <Box className="flex items-center border-b border-gray-300 h-[80px] px-4 py-3 bg-[#00aaff]">
            <Button
              color="inherit"
              className="normal-case text-white"
              onClick={toggleDrawer(false)}
            >
              <CloseIcon sx={{ mr: 1, color: 'white', fontSize: '30px', fontWeight: 'bold' }} />
              <Typography variant="body1" component="div" className="font-bold text-white" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                Menu
              </Typography>
            </Button>
          </Box>
          <List>
            {/* <ListItem 
              onClick={(event) => {
                toggleDrawer(false)(event);
                window.location.href = '/overview';
              }} 
              className="flex justify-between items-center group"
            >
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#00aaff', // Primary blue
                  },
                }}
              >
                About Us
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-[#00aaff] transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem> */}
            {/* <ListItem 
              onClick={(event) => {
                toggleDrawer(false)(event);
                window.location.href = '/survey';
              }} 
              className="flex justify-between items-center group"
            >
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#00aaff', // Primary blue
                  },
                }}
              >
                Organizational Development
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-[#00aaff] transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem> */}
            {/* <ListItem 
              onClick={(event) => {
                toggleDrawer(false)(event);
                window.location.href = '/report';
              }} 
              className="flex justify-between items-center group"
            >
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  fontSize: '32px',
                  color: 'black',
                  '&:hover': {
                    color: '#00aaff',
                  },
                }}
              >
                Building HR Capability
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-[#00aaff] transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem> */}
            <ListItem 
              // onClick={(event) => {
              //   toggleDrawer(false)(event);
              //   window.location.href = '/news';
              // }}
              className="flex justify-between items-center group"
            >
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  '&:hover': {
                    color: '#00aaff',
                  },
                }}
              >
                News
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-[#00aaff] transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem>
            <ListItem 
              // onClick={(event) => {
              //   toggleDrawer(false)(event);
              //   window.location.href = '/careers';
              // }}
              className="flex justify-between items-center group"
            >
              <Typography 
                component="div" 
                className="px-4 py-2 underline-transition"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  '&:hover': {
                    color: '#00aaff',
                  },
                }}
              >
                Careers
              </Typography>
              <ChevronRightIcon className="text-gray-700 opacity-0 group-hover:opacity-100 group-hover:text-[#00aaff] transition-opacity duration-200 mr-4" sx={{ fontSize: '2.5rem', mt: '2.5px', ml: '-3px' }} />
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </AppBar>
  );
};

export default Header; 