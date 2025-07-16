"use client";

import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JobEvaluation() {

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[lightblue] py-4 px-4 md:py-5.5 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[300px] md:min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-4 md:space-y-6 md:pr-8">
            <Typography variant="overline" className="text-white tracking-widest font-bold !text-sm md:!text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              Job Evaluation
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Defining roles
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '-15px'}}
            >
             Supporting growth
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-4 md:mb-6 !text-lg md:!text-xl font-normal">
             We assist you in developing transparent, consistent, and equitable role structures that promote fairness and progress.
            </Typography>
            <Button
              variant="contained"
              className="bg-[#E04A9B] hover:bg-pink-600 normal-case font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg shadow-none"
              style={{ background: '#00aaff', borderRadius: '9999px', fontWeight: 700, marginTop: 20, color: 'white' }}
              endIcon={<ArrowForwardIcon />}
            >
              Contact Us
            </Button>
          </Box>
          {/* Right: Image with magenta accent bar */}
          <Box className="flex-1 relative w-full h-56 md:h-96 flex items-center justify-center mt-4 md:mt-0">
            <Box className="relative w-full h-full md:h-96 z-10">
              <Image
                src="/images/complex-landscapte.jpg"
                alt="Hero Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                priority
              />
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="container mx-auto max-w-7xl py-6 md:py-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        {/* Left/Main Text */}
        <Box className="md:col-span-2 space-y-4 md:space-y-5">
          <Box>
            <Typography variant="h6" className="font-bold mb-0 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
             How We Can Help You
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', md: '18px', mt:1}}>
             At Alliance Atlantic, we assist companies in making the value and compensation of jobs more transparent,
             consistent, and equitable. We guarantee that your structure promotes both internal equality and external
             competitiveness with our strategic job evaluation services, providing a solid basis for HR operations
             like performance reviews, career advancement, and remuneration.
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
             Whether you're creating a new structure or improving an old one, we offer the resources, frameworks, and
             know-how to make job value quantifiable, transparent, and consistent with corporate goals.
            </Typography>

          </Box>

          <Typography variant="h6" className="font-bold mt-4 text-gray-900 text-lg md:text-xl" sx={{ marginBottom: '15px' , fontWeight: 'bold'}}>
           What We Offer:
          </Typography>

          <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
           The goal of our job evaluation service is to develop a scalable and transparent method for determining
           a job's value throughout the company. Among our products are:
          </Typography>

          {/* Performance Management Offerings List - Improved Design */}
          <Paper elevation={2} sx={{ p: 3, mb: 4, background: '#f7fafd', borderRadius: 3, mt: 2 }}>
            <Stack spacing={3} component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
              {[
                {
                  title: 'Job Evaluation Framework Design',
                  desc: 'Create or improve job grading schemes that are exclusive to your company and employees.'
                },
                {
                  title: 'Job Analysis & Documentation',
                  desc: 'Perform comprehensive evaluations of job duties, requirements, and outputs.'
                },
                {
                  title: 'Role Benchmarking',
                  desc: 'Examine internal roles in relation to market and industry norms for external equity.'
                },
                {
                  title: 'Pay Structure Alignment',
                  desc: 'For fairness and compliance, match pay scales to work grades and levels.'
                },
                {
                  title: 'Career Pathing Support',
                  desc: 'Establish sensible and inspiring career trajectories for various departments and roles.'
                },
                {
                  title: 'Policy and Governance Tools',
                  desc: 'Clearly define and record the roles, evaluation standards, and compensation governance.'
                }
              ].map((item, idx) => (
                <Stack key={item.title} direction="row" alignItems="flex-start" spacing={2} component="li">
                  <Box sx={{ mt: '4px', color: '#00aaff' }}>
                    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <circle cx="12" cy="12" r="12" fill="#e3f4fb"/>
                      <path d="M9.5 13.5L11.5 15.5L15 11" stroke="#00aaff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </Box>
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0077b6', fontSize: '1.1rem', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#222', fontSize: '1rem' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              ))}
            </Stack>
          </Paper>
         
        </Box>

        {/* Right Column: Quote and Secondary Video */}
        <Box className="space-y-6 md:space-y-8">

          {/* Common Client Challenges Section */}
          <Paper elevation={3} sx={{ p: 0, background: '#00AAFF', color: 'white', borderRadius: 4, boxShadow: 6, display: 'flex', overflow: 'hidden', mb: 2 }}>
            {/* Accent Bar */}
            <Box sx={{ width: '6px', background: '#E04A9B', borderTopLeftRadius: 16, borderBottomLeftRadius: 16 }} />
            <Box sx={{ p: 3, flex: 1 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', letterSpacing: 0.5 }}>
                Performance Challenges
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: 'white', opacity: 0.97 }}>
                Many organizations approach Alliance Atlantic with issues like:
              </Typography>
              <Box component="ul" sx={{ pl: 0, mb: 2, color: 'white', opacity: 0.99, listStyle: 'none' }}>
                {[
                  'Inconsistency in the way roles are awarded and assessed',
                  'Pay disparity or opaqueness in wage determinations',
                  'Job descriptions that are unclear or include overlapping duties',
                  'Supporting professional advancement or internal mobility might be challenging.',
                  'Job level and real contribution are not aligned.',
                  'Not being able to compare roles to market rates',
                ].map((text, idx) => (
                  <Box key={idx} component="li" sx={{ display: 'flex', alignItems: 'flex-start', mb: '10px' }}>
                    <Box sx={{ mt: '7px', mr: 1 }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="4" cy="4" r="4" fill="#E04A9B" />
                      </svg>
                    </Box>
                    <Typography variant="body2" sx={{ color: 'white', opacity: 0.99 }}>
                      {text}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Paper>

          <Box className="relative w-full h-[300px] my-8">
              <Image
                src="/images/transform-tomorrows.png"
                alt="Transform Tomorrows"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
          </Box>

          {/* Alliance Atlantic HR Consulting Description */}
          <Paper elevation={0} sx={{ background: '#e3f4fb', py: 2, px: 2, borderRadius: 2, mt: -2, mb: 2 }}>
            <Typography variant="subtitle1" align="center" sx={{ color: '#0077b6', fontWeight: 600, fontSize: '0.85rem' }}>
             We assist organizations in bringing fairness to decision-making and structure to ambiguity.
            </Typography>
          </Paper>

        </Box>
        
      </Box>

      <Footer />
    </Box>
  );
} 