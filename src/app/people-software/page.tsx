"use client";

import { Box, Typography, Button, Paper, Avatar, Accordion, AccordionSummary, AccordionDetails } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCompensationChart from '@/components/JobCompensationChart'; // Added import for JobCompensationChart
import { styled } from '@mui/material/styles';
import Collapse from '@mui/material/Collapse';
import React from 'react';
import PublicIcon from '@mui/icons-material/Public';
import EqualizerIcon from '@mui/icons-material/Equalizer';
import AssessmentIcon from '@mui/icons-material/Assessment';
import GavelIcon from '@mui/icons-material/Gavel';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';

// Custom styled Accordion for enhanced design
const StyledAccordion = styled(Accordion)(() => ({
  marginBottom: 8, // theme.spacing(1) replaced with 8px
  borderRadius: 12,
  boxShadow: '0 2px 12px 0 rgba(0,170,255,0.06)',
  border: '1.5px solid #e3f4fb',
  '&:before': { display: 'none' },
  transition: 'box-shadow 0.3s',
  '&:hover': {
    boxShadow: '0 4px 20px 0 rgba(0,170,255,0.13)',
    borderColor: '#00aaff',
  },
}));

const StyledAccordionSummary = styled(AccordionSummary)(() => ({
  fontWeight: 700,
  fontSize: '1.1rem',
  color: '#00aaff',
  background: '#f7fafd',
  borderRadius: 10,
  transition: 'background 0.3s, color 0.3s',
  '&.Mui-expanded': {
    color: '#E04A9B',
    background: 'linear-gradient(90deg, #f7fafd 80%, #e3f4fb 100%)',
    fontWeight: 900,
  },
  '& .MuiAccordionSummary-expandIconWrapper': {
    transition: 'transform 0.3s',
  },
  '&.Mui-expanded .MuiAccordionSummary-expandIconWrapper': {
    transform: 'rotate(90deg)',
  },
}));

const StyledAccordionDetails = styled(AccordionDetails)(() => ({
  background: '#fff',
  color: '#444',
  borderRadius: 8,
  fontSize: '1rem',
  // borderLeft: '4px solid #00aaff',
  marginLeft: 0,
  paddingLeft: 20,
  boxShadow: '0 2px 8px 0 rgba(224,74,155,0.07)',
  animation: 'fadeInSlide 0.5s',
  '@keyframes fadeInSlide': {
    from: { opacity: 0, transform: 'translateY(12px)' },
    to: { opacity: 1, transform: 'translateY(0)' },
  },
}));

export default function PeopleSoftware() {
  // Move useState for expanded to top-level
  const [expanded, setExpanded] = React.useState<string | false>(false);

  // Accordion items
  const items = [
    {
      title: 'Global Compensation Insights',
      icon: <PublicIcon sx={{ color: '#00aaff', mr: 1, fontSize: 28 }} />,
      content: 'Access real-time global pay data to make informed, competitive compensation decisions. Our platform provides accurate salary, bonus, and equity benchmarks from trusted HR and payroll sources—helping you build fair and effective pay packages.'
    },
    {
      title: 'Compensation Benchmarking',
      icon: <EqualizerIcon sx={{ color: '#E04A9B', mr: 1, fontSize: 28 }} />,
      content: 'Easily compare your team’s pay to market rates with AI-powered benchmarking. Connect your HRIS, use our rich data or import third-party surveys, and instantly see how employee compensation stacks up—so you can adjust and stay competitive with confidence.'
    },
    {
      title: 'Smart Raise & Bonus Management',
      icon: <AssessmentIcon sx={{ color: '#ffd600', mr: 1, fontSize: 28 }} />,
      content: 'Simplify how you plan and execute raises and bonuses with guided, data-backed workflows. Set budgets, manage approvals, and communicate changes effortlessly—all in one place.'
    },
    {
      title: 'Strategic Pay Planning',
      icon: <GavelIcon sx={{ color: '#7c3aed', mr: 1, fontSize: 28 }} />,
      content: 'Build clear, competitive salary ranges across roles and locations with a scalable, transparent framework. Define and apply your pay philosophy consistently—balancing equity, geography, and remote policies—while spotting and correcting pay gaps proactively.'
    },
    {
      title: 'Pay Equity Insights',
      icon: <PersonOutlineIcon sx={{ color: '#00b894', mr: 1, fontSize: 28 }} />,
      content: 'Identify and address pay gaps across roles and demographics with built-in equity tools. Access detailed DEI metrics and track progress over time—ensuring fairness and objectivity in every compensation decision.'
    },
  ];

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[#00aaff] py-4 px-4 md:py-5.5 md:px-0">
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
        {/* Chart Section Header */}
        <Typography variant="h4" sx={{ fontWeight: 700, textAlign: 'center', mb: 3, color: '#222' }}>
          Empowering Fair and Confident Pay Decisions with Our Compensation Management Solution
        </Typography>
        {/* What is OpenComp Section */}
        <Box className="container mx-auto max-w-4xl px-4 md:px-0 mt-6 mb-8">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
            What is OpenComp?
          </Typography>
          {/* Expandable List using MUI Accordion */}
          {items.map((item, idx) => (
            <StyledAccordion
              key={item.title}
              expanded={expanded === item.title}
              onChange={(_e, isExp) => setExpanded(isExp ? item.title : false)}
            >
              <StyledAccordionSummary expandIcon={<ArrowForwardIcon sx={{ color: expanded === item.title ? '#E04A9B' : '#00aaff' }} />}>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                  {item.icon}
                  <span>{`${idx + 1}. ${item.title}`}</span>
                </Box>
              </StyledAccordionSummary>
              <Collapse in={expanded === item.title} timeout={400}>
                <StyledAccordionDetails>
                  {item.content}
                </StyledAccordionDetails>
              </Collapse>
            </StyledAccordion>
          ))}
        </Box>
        
        
        {/* Section 2: Compensation Chart by Experience and Job Position */}
        
        
        {/* Section 2: How Our Process Works Timeline */}
        <Box>

        <Box sx={{ background: '#f7fafd', borderRadius: 3, p: { xs: 2, md: 4 }, mb: 2 }}>
          <Typography variant="h5" className="font-bold mb-6 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold', textAlign: 'center'}}>
            Compensation Chart
          </Typography>
          {/* Dropdown for job positions */}
          <JobCompensationChart />
        </Box>
          {/* <Typography variant="h6" className="font-bold mb-4 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold'}}>
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
          </Box> */}
        </Box>

        {/* Section 3: Testimonial Box */}
        {/* <Box>
          <Paper elevation={2} sx={{ p: 4, borderRadius: 3, background: '#e3f4fb', border: '1px solid #b2e0f7', maxWidth: 600, mx: 'auto' }}>
            <Typography variant="body1" sx={{ fontStyle: 'italic', color: '#0077b6', mb: 0, textAlign: 'center' }}>
              &quot;Alliance Atlantic helped us modernize our HR systems. The process was smooth, and our team is now more engaged and productive than ever.&quot;
            </Typography>
          </Paper>
        </Box> */}

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