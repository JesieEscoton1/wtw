'use client';

import React from 'react';
import { Box, Typography, Link, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailIcon from '@mui/icons-material/Mail';
import Image from 'next/image';

const Footer = () => {
  return (
    <Box component="footer" className="site-footer bg-black text-white py-12 px-4 md:px-8 relative">
      <Box className="container mx-auto max-w-7xl">
        {/* Top Section: Logo and Links */}
        <Box className="flex flex-wrap -mx-4 justify-between">
          {/* Logo and Social Icons Column */}
          <Box className="w-full md:w-3/12 lg:w-2/12 px-4 mb-8 md:mb-0 flex flex-col">
            <Link href="#" className="d-block site-footer__logo mb-6" underline="none">
              <Image
                src="https://media.wtwco.com/-/media/WTW/Logo/Footer-Willis-Towers-Watson_Text.svg?modified=20220110040900&amp;imgeng=meta_true&amp;la=en-PH&amp;hash=88937A3511E4345AF772FF97942936E9"
                loading="lazy"
                alt="Willis Towers Watson logo"
                width={120}
                height={48}
                className="hover:opacity-90 transition-opacity duration-300"
              />
            </Link>
            {/* Social Media Links */}
            <Box className="site-footer__social-container flex space-x-4 mt-70">
              <IconButton 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="Facebook" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <FacebookIcon style={{ fontSize: '24px' }} />
              </IconButton>
              <IconButton 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="LinkedIn" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <LinkedInIcon style={{ fontSize: '24px' }} />
              </IconButton>
              <IconButton 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                color="inherit" 
                aria-label="Instagram" 
                className="p-0 text-white opacity-75 hover:opacity-100 transition-opacity hover:scale-110 transform duration-300"
              >
                <InstagramIcon style={{ fontSize: '24px' }} />
              </IconButton>
            </Box>
          </Box>

          {/* Primary and Secondary Links Container */}
          <Box className="w-full md:w-8/12 lg:w-9/12 px-4 flex flex-wrap -mx-4">
            {/* Primary Links Columns (Split into two) */}
            <Box className="w-full md:w-6/12 px-4 mb-8 md:mb-0">
              <ul className="site-footer__primary list-none p-0 m-0 flex flex-wrap -mx-2">
                {[
                  { text: 'About Us', href: '#' },
                  { text: 'Investor Relations', href: '#', external: true },
                  { text: 'People', href: '#' },
                  { text: 'Careers', href: '#', external: true },
                  { text: 'Risk', href: '#' },
                  { text: 'Office Locations', href: '#' },
                  { text: 'Capital', href: '#' },
                  { text: 'Social Media', href: '#' },
                  { text: 'News', href: '#' },
                  { text: 'Contact Us', href: '#' },
                  { text: 'Insights', href: '#' },
                  { text: 'Sitemap', href: '#' }
                ].map((link, index) => (
                  <li key={index} className="w-1/2 px-2 mb-3">
                    <Link 
                      href={link.href} 
                      className="font-bold text-white text-sm hover:text-purple-400 transition-colors duration-300" 
                      underline="none"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                    >
                      {link.text}
                    </Link>
                  </li>
                ))}
              </ul>
            </Box>

            {/* Secondary Links Column */}
            <Box className="w-full md:w-6/12 px-4">
              <ul className="site-footer__secondary list-none p-0 m-0">
                {[
                  { text: 'Global Website Privacy Notice', href: '#' },
                  { text: 'Terms of Use', href: '#' },
                  { text: 'Accessibility Statement', href: '#' },
                  { text: 'Cookie Notice', href: '#' },
                  { text: 'Cookie Settings', href: '#', className: 'ot-sdk-show-settings' },
                  { text: 'Code of Conduct', href: '#', external: true },
                  { text: 'Philippines Privacy Notice', href: '#' },
                  { text: 'Philippines Complaints Handling', href: '#' },
                  { text: 'WTW Trademarks', href: '#' }
                ].map((link, index) => (
                  <li key={index} className="mb-3">
                    <Link 
                      href={link.href} 
                      className={`font-bold text-white text-xs hover:text-purple-400 transition-colors duration-300 ${link.className || ''}`}
                      underline="none"
                      target={link.external ? "_blank" : undefined}
                      rel={link.external ? "noopener noreferrer" : undefined}
                      aria-haspopup={link.className === 'ot-sdk-show-settings' ? "true" : undefined}
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
        <Box className="flex flex-wrap -mx-4 mt-3 pt-6 border-t border-white items-center justify-between">
          {/* Copyright */}
          <Box className="w-full md:w-auto px-4 mb-4 md:mb-0">
            <Typography variant="body2" color="inherit" className="font-p-xsmall m-0 site-footer__copyright text-sm opacity-75">
              Copyright © {new Date().getFullYear()} WTW. All rights reserved.
            </Typography>
          </Box>

          {/* Circular Mail Icon */}
          <Box className="absolute bottom-6 right-6 bg-purple-700 p-3 rounded-full cursor-pointer flex items-center justify-center hover:bg-purple-600 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
            <MailIcon style={{ fontSize: '24px' }} />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;