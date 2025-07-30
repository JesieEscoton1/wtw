"use client";

import { Box, Typography, Button, Paper, Avatar } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function JobEvaluation() {

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[#00aaff] py-4 px-4 md:py-5.5 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[300px] md:min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-4 mds:space-y-6 md:pr-8">
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
      <Box className="w-full bg-[#e3f4fb] py-10 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
          {/* Left/Main Content */}
          <Box className="md:col-span-2 flex flex-col gap-8">
            {/* How We Can Help You */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, background: 'white' }}>
              <Typography variant="h6" className="font-bold mb-2 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
                How We Can Help You
              </Typography>
              <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
                At Alliance Atlantic, we assist companies in making the value and compensation of jobs more transparent, consistent, and equitable. We guarantee that your structure promotes both internal equality and external competitiveness with our strategic job evaluation services, providing a solid basis for HR operations like performance reviews, career advancement, and remuneration.
              </Typography>
              <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
                Whether you&apos;re creating a new structure or improving an old one, we offer the resources, frameworks, and know-how to make job value quantifiable, transparent, and consistent with corporate goals.
              </Typography>
            </Paper>

            {/* Job Evaluation Process Timeline */}
            <Paper elevation={0} sx={{ p: 4, borderRadius: 3, background: 'white' }}>
              <Typography variant="h6" className="font-bold mb-4 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
                Our Job Evaluation Process
              </Typography>
              <Box className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-0" sx={{ mt: 2}}>
                {[
                  { label: 'Job Analysis', icon: '/images/icons/1.svg' },
                  { label: 'Role Benchmarking', icon: '/images/icons/2.svg' },
                  { label: 'Framework Design', icon: '/images/icons/3.svg' },
                  { label: 'Pay Alignment', icon: '/images/icons/4.svg' },
                  { label: 'Career Pathing', icon: '/images/icons/5.svg' },
                  { label: 'Governance', icon: '/images/icons/6.svg' },
                ].map((step, idx, arr) => (
                  <Box key={step.label} className="flex flex-col items-center flex-1 min-w-[90px]">
                    <Box className="w-14 h-14 mb-2 flex items-center justify-center bg-[#e3f4fb] rounded-full border-2 border-[#00aaff]">
                      <Image src={step.icon} alt={step.label} width={36} height={36} />
                    </Box>
                    <Typography variant="caption" align="center" sx={{ fontWeight: 600, color: '#0077b6', fontSize: '1rem' }}>{step.label}</Typography>
                    {/* Connector: horizontal for desktop, vertical for mobile */}
                    {idx < arr.length - 1 && (
                      <>
                        {/* Desktop: horizontal bar */}
                        <Box className="hidden md:block w-12 h-1 bg-[#00aaff] mt-2 mb-2" />
                        {/* Mobile: vertical bar */}
                        <Box className="block md:hidden w-1 h-8 bg-[#00aaff] my-2" />
                      </>
                    )}
                  </Box>
                ))}
              </Box>
            </Paper>

            {/* What We Offer - Card Grid */}
            <Box>
              <Typography variant="h6" className="font-bold mb-4 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
                What We Offer
              </Typography>
              <Box className="grid grid-cols-1 sm:grid-cols-2 gap-6" sx={{ mt: 2}}>
                {[
                  {
                    title: 'Job Evaluation Framework Design',
                    desc: 'Create or improve job grading schemes that are exclusive to your company and employees.',
                    icon: '/images/icons/1.svg',
                  },
                  {
                    title: 'Job Analysis & Documentation',
                    desc: 'Perform comprehensive evaluations of job duties, requirements, and outputs.',
                    icon: '/images/icons/2.svg',
                  },
                  {
                    title: 'Role Benchmarking',
                    desc: 'Examine internal roles in relation to market and industry norms for external equity.',
                    icon: '/images/icons/3.svg',
                  },
                  {
                    title: 'Pay Structure Alignment',
                    desc: 'For fairness and compliance, match pay scales to work grades and levels.',
                    icon: '/images/icons/4.svg',
                  },
                  {
                    title: 'Career Pathing Support',
                    desc: 'Establish sensible and inspiring career trajectories for various departments and roles.',
                    icon: '/images/icons/5.svg',
                  },
                  {
                    title: 'Policy and Governance Tools',
                    desc: 'Clearly define and record the roles, evaluation standards, and compensation governance.',
                    icon: '/images/icons/6.svg',
                  },
                ].map((item) => {
                  return (
                    <Paper key={item.title} elevation={2} sx={{ p: 3, borderRadius: 3, background: 'white', display: 'flex', alignItems: 'flex-start', gap: 2, transition: 'box-shadow 0.2s', '&:hover': { boxShadow: 8 } }}>
                      <Box className="w-12 h-12 flex items-center justify-center bg-[#e3f4fb] rounded-full border-2 border-[#00aaff] mr-3">
                        <Image src={item.icon} alt={item.title} width={32} height={32} />
                      </Box>
                      <Box>
                        <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#0077b6', fontSize: '1.1rem', mb: 0.5 }}>
                          {item.title}
                        </Typography>
                        <Typography variant="body2" sx={{ color: '#222', fontSize: '1rem' }}>
                          {item.desc}
                        </Typography>
                      </Box>
                    </Paper>
                  );
                })}
              </Box>
            </Box>

            {/* Call to Action Card */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 3, background: '#00aaff', color: 'white', mt: 1, textAlign: 'center' }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: 'white', letterSpacing: 0.5 }}>
                Ready to Build a Fairer Organization?
              </Typography>
              <Typography variant="body1" sx={{ mb: 2, color: 'white', opacity: 0.97 }}>
                Get a custom job evaluation framework tailored to your needs.
              </Typography>
              <Button
                variant="contained"
                className="bg-white hover:bg-gray-100 normal-case font-bold rounded-full px-8 py-3 text-base md:text-lg shadow-none"
                sx={{ color: '#00aaff', fontWeight: 700, borderRadius: '9999px', mt: 2 }}
                href="/overview"
              >
                Get Started
              </Button>
            </Paper>
          </Box>

          {/* Right Column: Testimonial and Challenges */}
          <Box className="flex flex-col gap-8">
            {/* Testimonial/Case Study Card */}
            <Paper elevation={3} sx={{ p: 4, borderRadius: 4, background: '#fff7fa', color: '#E04A9B', boxShadow: 6, mb: 2 }}>
              <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#E04A9B', letterSpacing: 0.5 }}>
                Why Job Evaluation Matters
              </Typography>
              <Typography variant="body2" sx={{ mb: 2, color: '#E04A9B', opacity: 0.97 }}>
                &quot;Transparent job evaluation is the foundation of fair pay, employee trust, and organizational growth. When roles are clearly defined and valued, everyone wins.&quot;
              </Typography>
              <Typography variant="subtitle2" sx={{ color: '#E04A9B', fontWeight: 600 }}>
                — Alliance Atlantic Insights
              </Typography>
            </Paper>

            {/* Common Client Challenges Section */}
            <Paper elevation={3} sx={{ display: 'flex', background: 'white', borderRadius: 4, boxShadow: 6, overflow: 'hidden', mb: 2 }}>
              {/* Blue Accent Bar */}
              <Box sx={{ width: '5px', background: '#00AAFF', borderTopLeftRadius: 12, borderBottomLeftRadius: 12 }} />
              <Box sx={{ p: 3, flex: 1 }}>
                <Typography variant="h6" sx={{ fontWeight: 700, mb: 1, color: '#0090e3', letterSpacing: 0.5 }}>
                  Featured: Performance Challenges
                </Typography>
                <Typography variant="body2" sx={{ mb: 2, color: '#222', opacity: 0.97 }}>
                  Many organizations approach Alliance Atlantic with issues like:
                </Typography>
                <Box component="ul" sx={{ pl: 0, mb: 2, color: '#222', opacity: 0.99, listStyle: 'none' }}>
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
                          <circle cx="4" cy="4" r="4" fill="#00AAFF" />
                        </svg>
                      </Box>
                      <Typography variant="body2" sx={{ color: '#222', opacity: 0.99 }}>
                        {text}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Paper>

          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 