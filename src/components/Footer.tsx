'use client';

import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box component="footer" className="site-footer  bg-[lightblue] text-white py-8 sm:py-12 px-4 md:px-8 relative">
      <Box className="container mx-auto max-w-7xl">
        {/* Top Section: Logo and Links */}
        <Box className="flex flex-col md:flex-row flex-wrap -mx-4 justify-between">
          {/* Logo and Social Icons Column */}
          <Box className="w-full md:w-3/12 lg:w-2/12 px-4 mb-8 md:mb-0 flex flex-col items-center md:items-start">
            {/* Social Media Links */}
            {/* <Box className="site-footer__social-container flex space-x-4 mt-4 md:mt-70">
              <IconButton 
                rel="noopener noreferrer"
                color="inherit" 
                aria-label="Facebook" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <FacebookIcon className="text-[20px] md:text-[24px]" />
              </IconButton>
              <IconButton 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="LinkedIn" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <LinkedInIcon className="text-[20px] md:text-[24px]" />
              </IconButton>
              <IconButton 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="Instagram" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <InstagramIcon className="text-[20px] md:text-[24px]" />
              </IconButton>
            </Box> */}
            <a href="/" className="cursor-pointer">
                        <Image
                          src="/images/alliance.svg"
                          alt="Alliance Logo"
                          width={120}
                          height={84}
                          priority
                          style={{ objectFit: 'contain' }}
                          className="md:w-[150px] md:h-[105px] ml-20 mb-5"
                        />
                      </a>
          </Box>

          {/* Primary and Secondary Links Container */}
          <Box className="w-full md:w-8/12 lg:w-9/12 px-4 flex flex-wrap items-center">
  <Box className="w-full px-4 mb-6 md:mb-0">
    <ul className="flex flex-wrap gap-x-6 gap-y-2 list-none p-0 m-0">
      {[
        { text: 'About Us', href: '/overview' },
        { text: 'Organizational Development', href: '/survey' },
        { text: 'Building HR Capability', href: '/report' },
        { text: 'Total Reward', href: '/campaign' },
        { text: 'Performance Management' },
      ].map((link, index) => (
        <li key={index}>
          <Link
            href={link.href || '#'}
            className="text-sm font-semibold !text-black hover:text-blue-700 transition-colors duration-300"
            underline="none"
          >
            {link.text}
          </Link>
        </li>
      ))}
    </ul>
  </Box>
</Box>

        </Box>

        {/* Bottom Section: Copyright and Mail Icon */}
        <Box className="flex flex-col md:flex-row flex-wrap -mx-4 mt-3 pt-6 border-t border-black items-center justify-between">
          {/* Copyright */}
          <Box className="w-full md:w-auto px-4 mb-4 md:mb-0 text-center md:text-left">
            <Typography variant="body2" color="Black" className="font-p-xsmall m-0 site-footer__copyright text-xs sm:text-sm opacity-75">
              Copyright © {new Date().getFullYear()} Alliance Atlantic . All rights reserved.
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;