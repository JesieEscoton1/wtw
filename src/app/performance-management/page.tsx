"use client";

import { Box, Typography, Button, Paper, Stack, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function PerformanceManagement() {

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[#00aaff] py-4 px-4 md:py-5.5 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[300px] md:min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-4 md:space-y-6 md:pr-8">
            <Typography variant="overline" className="text-white tracking-widest font-bold !text-sm md:!text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              Peformance Management
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Performance 
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl leading-tight mb-2 md:mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '-15px'}}
            >
             with Purpose
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-4 md:mb-6 !text-lg md:!text-xl font-normal">
             We help you build a high-performance culture that aligns people with purpose.
            </Typography>
            <Button
              variant="contained"
              className="bg-[#E04A9B] hover:bg-pink-600 normal-case font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg shadow-none"
              style={{ background: 'white', borderRadius: '9999px', fontWeight: 700, marginTop: 20, color: '#00aaff' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = '/contact-us'}
            >
              Contact Us
            </Button>
          </Box>
          {/* Right: Image with magenta accent bar */}
          <Box className="flex-1 relative w-full h-56 md:h-96 flex items-center justify-center mt-4 md:mt-0">
            <Box className="relative w-full h-full md:h-96 z-10">
              <Image
                src="/images/bg-performance.png"
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
             At Alliance Atlantic, we use strategic performance management to assist businesses in creating high-performance
             cultures.  At every level of your workforce, our method fosters accountability, integrates employee goals with
             corporate objectives, and fosters continuous improvement.
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
            Our professionals are here to help you develop and execute solutions that have a long-lasting effect, whether your
            goal is to strengthen feedback loops, update your appraisal process, or adopt a goal-setting framework.
            </Typography>

          </Box>

          <Typography variant="h6" className="font-bold mt-4 text-gray-900 text-lg md:text-xl" sx={{ marginBottom: '15px' , fontWeight: 'bold'}}>
           What We Offer:
          </Typography>

          <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
           Our performance management solution is designed to help businesses at every level of their
           human capital development process.  We offer:
          </Typography>

          {/* Performance Management Offerings List - Improved Design */}
          <Paper elevation={2} sx={{ p: 3, mb: 4, background: '#f7fafd', borderRadius: 3, mt: 2 }}>
            <Stack spacing={3} component="ul" sx={{ pl: 0, m: 0, listStyle: 'none' }}>
              {[
                {
                  title: 'Performance Strategy Design',
                  desc: 'Align performance goals with business strategy and values.'
                },
                {
                  title: 'Modern Appraisal Systems',
                  desc: 'Design agile and effective performance review processes (quarterly/biannual/continuous).'
                },
                {
                  title: 'Goal Setting Frameworks',
                  desc: 'Implement OKRs, KPIs, or SMART goals tailored to your organization.'
                },
                {
                  title: '360-Degree Feedback Systems',
                  desc: 'Facilitate peer-to-peer, manager, and self-assessment feedback tools.'
                },
                {
                  title: 'Manager & Leader Enablement',
                  desc: 'Train leaders to manage performance through coaching, not control.'
                },
                {
                  title: 'Performance Metrics & Dashboards',
                  desc: 'Design and deploy tools to monitor performance, engagement, and development.'
                }
              ].map((item) => (
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
                  'Inconsistency between personal performance and organizational objectives',
                  'Performance review procedures that are antiquated or inefficient',
                  'Feedback culture is little or nonexistent.',
                  'Managers who are ill-equipped to mentor or provide insightful criticism',
                  'Employee disengagement as a result of unclear or unacknowledged',
                  'Measuring performance beyond basic indicators can be challenging.',
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

          <Box className="relative w-full h-[300px] my-6">
              <Image
                src="/images/transform-tomorrows.png"
                alt="Transform Tomorrows"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
              />
          </Box>

        </Box>
        
      </Box>

      <Footer />
    </Box>
  );
} 