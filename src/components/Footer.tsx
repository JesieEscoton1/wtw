'use client';

import React from 'react';
import { Box, Typography, Link as MuiLink } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  return (
    <Box component="footer" className="site-footer  bg-[lightblue] text-white py-8 sm:py-6 px-4 md:px-8 relative">
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
            <Link href="/" className="cursor-pointer">
              <Image
                src="/images/alliance-bg.png"
                alt="Alliance Logo"
                width={240}
                height={168}
                priority
                style={{ objectFit: 'contain' }}
                className="md:w-[240px] md:h-[168px] mb-5 mt-[-40px]"
              />
            </Link>
          </Box>

          {/* Primary and Secondary Links Container */}
          <Box className="w-full md:w-8/12 lg:w-9/12 px-4 flex flex-col md:flex-row items-stretch gap-y-8 md:gap-y-0 md:gap-x-8">
            {/* Our Services Column */}
            <Box className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <Typography variant="h6" className="font-bold mb-3 !text-black" sx={{ fontWeight: 'bold', color: 'black' }}>
                Our Services
              </Typography>
              <ul className="flex flex-col gap-y-2 list-none p-0 m-0">
                {[
                  { text: 'About Us', href: '/overview' },
                  { text: 'Organizational Development', href: '/survey' },
                  { text: 'Building HR Capability', href: '/report' },
                  { text: 'Total Reward', href: '/campaign' },
                  { text: 'Performance Management' },
                ].map((link, index) => (
                  <li key={index}>
                    <MuiLink
                      href={link.href || '#'}
                      className="text-sm font-semibold !text-black hover:text-blue-700 transition-colors duration-300"
                      underline="none"
                    >
                      {link.text}
                    </MuiLink>
                  </li>
                ))}
              </ul>
            </Box>
            {/* Contact Us Column */}
            <Box className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center md:items-start">
              <Typography variant="h6" className="font-bold mb-3 !text-black" sx={{ fontWeight: 'bold', color: 'black' }}>
                Contact Us
              </Typography>
              <Typography variant="body2" className="!text-black mb-1" sx={{ color: 'black', fontWeight: 500 }}>
                <span style={{ fontWeight: 'bold' }}>Email:</span> <a href="mailto:info@allianceatlantic.net" className="underline hover:text-blue-700">info@allianceatlantic.net</a>
              </Typography>
              <Typography variant="body2" className="!text-black mb-3" sx={{ color: 'black' }}>
                Feel free to let us know how we may be of help.
              </Typography>
              <Typography variant="body2" className="!text-black mb-1" sx={{ color: 'black', fontWeight: 500 }}>
                Alliance Atlantic
              </Typography>
              <Typography variant="body2" className="!text-black mb-1" sx={{ color: 'black', fontWeight: 500 }}>
                <span style={{ fontWeight: 'bold' }}>Business Hours:</span>
              </Typography>
              <Typography variant="body2" className="!text-black mb-1" sx={{ color: 'black' }}>
                Mon–Fri: 9:00 am – 6:00 pm
              </Typography>
              <Typography variant="body2" className="!text-black" sx={{ color: 'black', fontStyle: 'italic' }}>
                Open today
              </Typography>
            </Box>
            {/* Book a Meeting Column */}
            <Box className="w-full md:w-1/3 mb-6 md:mb-0 flex flex-col items-center justify-center">
              <Typography variant="h6" className="font-bold mb-3 !text-black text-center" sx={{ fontWeight: 'bold', color: 'black', textAlign: 'center' }}>
                Book a Meeting
              </Typography>
              <a
                href="https://calendly.com/your-client-link" // TODO: Replace with actual Calendly link
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full flex justify-center"
              >
                <button
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded-full shadow-md transition-colors duration-300 text-base md:text-lg"
                  style={{ minWidth: '200px' }}
                >
                  Book a Meeting With Us
                </button>
              </a>
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