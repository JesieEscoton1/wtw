"use client";

import { Box, Typography, Button, Paper, Stack } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PeopleSoftware() {

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[lightblue] py-4 px-4 md:py-5.5 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[300px] md:min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-4 md:space-y-6 md:pr-8">
            <Typography variant="overline" className="text-white tracking-widest font-bold !text-sm md:!text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              People Software
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Transforming 
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '-15px'}}
            >
             People Operations.
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-4 md:mb-6 !text-lg md:!text-xl font-normal">
             We help you put in place user-friendly, data-driven HR platforms that improve openness, expedite
             procedures, and foster significant staff advancement.
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
                src="/images/bg-software.png"
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
             Through intelligent, scalable, and people-first software solutions, Alliance Atlantic assists businesses
             in modernizing their HR operations. Whether you're improving your current tech stack, digitizing HR procedures,
             or putting a new system into place, our specialists make sure your technologies complement your strategy and put
             people at the heart of every choice.
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
             In addition to software deployment, we create digital ecosystems that empower HR departments, improve employee
             experiences, and facilitate improved decision-making.
            </Typography>

          </Box>

          <Typography variant="h6" className="font-bold mt-4 text-gray-900 text-lg md:text-xl" sx={{ marginBottom: '15px' , fontWeight: 'bold'}}>
           What We Offer:
          </Typography>

          <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
           Our consulting services for People Software help businesses at every step of the HR technology
           revolution. Among the services are:
          </Typography>

          {/* Performance Management Offerings List - Improved Design */}
          <Paper elevation={2} sx={{ p: 3, mb: 4, background: '#f7fafd', borderRadius: 3, mt: 2 }}>
            <Stack spacing={3} component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
              {[
                {
                  title: 'HRIS/HRMS Selection & Implementation',
                  desc: 'Determine the platforms to use, evaluate the needs, and provide guidance for a successful implementation.'
                },
                {
                  title: 'People Analytics & Dashboards',
                  desc: 'Use integrated analytics technologies to transform worker data into strategic insights.'
                },
                {
                  title: 'Digital Employee Experience',
                  desc: 'Improve self-service, engagement, and onboarding through smooth digital touchpoints.'
                },
                {
                  title: 'Process Automation',
                  desc: 'Automate payroll, leave administration, and performance evaluation.'
                },
                {
                  title: 'System Integration',
                  desc: 'For a cohesive experience, integrate HR systems with platforms for operations, finance, and other areas.'
                },
                {
                  title: 'Change Management & Training',
                  desc: 'Clear communication and user training will guarantee a seamless adoption and long-term success.'
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
                  'HR systems that are outdated or disjointed',
                  'Time-consuming, manual HR procedures',
                  'Absence of reporting tools or data visibility',
                  'Existing HR platforms are not widely used.',
                  'Employee dissatisfaction with digital workflows',
                  'Software alignment challenges with strategic objectives',
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
             We help bridge the gap between HR strategy and technology.
            </Typography>
          </Paper>

        </Box>
        
      </Box>

      <Footer />
    </Box>
  );
} 