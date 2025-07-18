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
      <Box className="container mx-auto max-w-7xl py-6 md:py-10 px-4 md:px-0 flex flex-col gap-12">
        {/* Section 1: What We Offer as Timeline/Stepper */}
        <Box sx={{ background: '#f7fafd', borderRadius: 3, p: { xs: 2, md: 4 }, mb: 2 }}>
          <Typography variant="h6" className="font-bold mb-6 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
            What We Offer
          </Typography>
          <Box sx={{ position: 'relative', ml: { xs: 2, md: 4 } }}>
            {/* Vertical accent line */}
            <Box sx={{
              position: 'absolute',
              left: 12,
              top: 0,
              bottom: 0,
              width: 4,
              background: 'linear-gradient(to bottom, #E04A9B 0%, #00aaff 100%)',
              borderRadius: 2,
              zIndex: 0,
              display: { xs: 'none', sm: 'block' },
            }} />
            <Stack spacing={5}>
              {[
                { color: '#E04A9B', title: 'HRIS/HRMS Selection', desc: 'Guidance for platform selection and implementation.' },
                { color: '#00aaff', title: 'People Analytics', desc: 'Transform data into actionable insights.' },
                { color: '#7c3aed', title: 'Digital Experience', desc: 'Enhance onboarding and engagement digitally.' },
                { color: '#ffd600', title: 'Process Automation', desc: 'Automate payroll, leave, and reviews.' },
                { color: '#00b894', title: 'System Integration', desc: 'Connect HR with finance, ops, and more.' },
                { color: '#ff5252', title: 'Change Management', desc: 'Training and communication for smooth adoption.' }
              ].map((item) => (
                <Box key={item.title} sx={{ display: 'flex', alignItems: 'flex-start', position: 'relative', zIndex: 1 }}>
                  {/* Dot Icon */}
                  <Box sx={{
                    mr: 3,
                    mt: 0.5,
                    zIndex: 2,
                    width: 20,
                    height: 20,
                    borderRadius: '50%',
                    background: item.color,
                    boxShadow: '0 0 0 4px #fff',
                    border: '2px solid #fff',
                  }} />
                  {/* Content */}
                  <Box>
                    <Typography variant="subtitle1" sx={{ fontWeight: 700, color: item.color, fontSize: '1.1rem', mb: 0.5 }}>
                      {item.title}
                    </Typography>
                    <Typography variant="body2" sx={{ color: '#444', fontSize: '1rem' }}>
                      {item.desc}
                    </Typography>
                  </Box>
                </Box>
              ))}
            </Stack>
          </Box>
        </Box>

        {/* Section 2: How Our Process Works Timeline */}
        <Box>
          <Typography variant="h6" className="font-bold mb-4 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
            How Our Process Works
          </Typography>
          <Box className="flex flex-col md:flex-row gap-6 items-center justify-between" sx={{ mt: 2}}>
            {[
              { step: '1', label: 'Discovery', color: '#00aaff', desc: 'We assess your current HR tech and needs.' },
              { step: '2', label: 'Strategy', color: '#E04A9B', desc: 'We design a tailored digital HR roadmap.' },
              { step: '3', label: 'Implementation', color: '#7c3aed', desc: 'We deploy, integrate, and train your team.' },
              { step: '4', label: 'Support', color: '#00b894', desc: 'We provide ongoing support and optimization.' },
            ].map((item, idx) => (
              <Box key={item.step} className="flex flex-col items-center text-center relative">
                <Box sx={{ width: 48, height: 48, borderRadius: '50%', background: item.color, color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 700, fontSize: 24, mb: 1, zIndex: 1 }}>
                  {item.step}
                </Box>
                <Typography variant="subtitle2" sx={{ fontWeight: 700, color: item.color, mb: 0.5 }}>
                  {item.label}
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', fontSize: '0.98rem', maxWidth: 180 }}>
                  {item.desc}
                </Typography>
                {idx < 3 && (
                  <Box sx={{ position: 'absolute', right: -32, top: 24, width: 64, height: 2, background: item.color, opacity: 0.3, zIndex: 0, display: { xs: 'none', md: 'block' } }} />
                )}
              </Box>
            ))}
          </Box>
        </Box>

        {/* Section 3: Testimonial Box */}
        <Box>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, background: '#e3f4fb', border: '1px solid #b2e0f7', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#0077b6', mb: 0, textAlign: 'center' }}>
              &quot;Alliance Atlantic helped us modernize our HR systems. The process was smooth, and our team is now more engaged and productive than ever.&quot;
            </Typography>
          </Paper>
        </Box>

        {/* Section 4: Common Client Challenges (redesigned) */}
        <Box>
          <Typography variant="h6" className="font-bold mb-4 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
           Performance Challenges
          </Typography>
          <Box
            sx={{
              display: { xs: 'flex', md: 'grid' },
              flexDirection: { xs: 'column', md: 'unset' },
              gridTemplateColumns: { md: 'repeat(3, 1fr)' },
              gap: 2,
              overflowX: 'unset',
              pb: 2,
              mt: 4,
              '&::-webkit-scrollbar': { display: 'none' },
              msOverflowStyle: 'none',
              scrollbarWidth: 'none',
            }}
          >
            {[
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e3f4fb"/><path d="M8 12h8" stroke="#00aaff" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Outdated HR Systems',
                desc: 'Legacy or disconnected platforms hinder efficiency and data flow.'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#ffe3e3"/><path d="M12 8v8" stroke="#ff5252" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Manual Processes',
                desc: 'Time-consuming, error-prone HR tasks slow down operations.'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#fffbe3"/><path d="M8 16l4-8 4 8" stroke="#ffd600" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Lack of Data Visibility',
                desc: 'No real-time reporting or analytics for decision-making.'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e3ffe3"/><path d="M9.5 13.5L11.5 15.5L15 11" stroke="#00b894" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Low Platform Adoption',
                desc: 'Employees and managers don’t use existing HR tools.'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#e3e3ff"/><path d="M12 8v8M8 12h8" stroke="#7c3aed" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Employee Dissatisfaction',
                desc: 'Digital workflows frustrate rather than empower staff.'
              },
              {
                icon: (
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="12" fill="#ffe3f4"/><path d="M6 12h12" stroke="#E04A9B" strokeWidth="2" strokeLinecap="round"/></svg>
                ),
                title: 'Misaligned Software',
                desc: 'HR tech doesn’t support business strategy or growth.'
              }
            ].map((item) => (
              <Paper key={item.title} elevation={1} sx={{
                width: { xs: '100%', md: 'auto' },
                minWidth: { xs: 'unset', md: 260 },
                p: 3,
                borderRadius: 3,
                background: '#f7fafd',
                border: '1px solid #e3f4fb',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: 1,
                flex: { xs: 'unset', md: '0 0 auto' },
                mb: { xs: 2, md: 0 },
              }}>
                <Box sx={{ mb: 1 }}>{item.icon}</Box>
                <Typography variant="subtitle1" sx={{ fontWeight: 700, color: '#00aaff', fontSize: '1.05rem', mb: 0.5, textAlign: 'center' }}>
                  {item.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#444', fontSize: '0.98rem', textAlign: 'center' }}>
                  {item.desc}
                </Typography>
              </Paper>
            ))}
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 