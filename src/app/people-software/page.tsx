"use client";

import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import JobCompensationChart from '@/components/JobCompensationChart'; // Added import for JobCompensationChart
import React from 'react';

export default function PeopleSoftware() {

  return (
    <Box className="w-full min-h-screen bg-white">
      <Box 
        sx={{ 
          position: 'sticky', 
          top: 0, 
          zIndex: 1000, 
          backgroundColor: 'white', 
          borderBottom: '1px solid #e5e7eb' 
        }}
      >
        <Header />
      </Box>
      
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
        {/* <Box className="container mx-auto max-w-4xl px-4 md:px-0 mt-6 mb-8">
          <Typography variant="h4" sx={{ fontWeight: 700, mb: 2, color: '#222' }}>
            What is OpenComp?
          </Typography>
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
        </Box> */}

        <Box sx={{ mt: 2 }}>
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '1fr 1fr' }, 
            gap: 12,
            alignItems: 'start'
          }}>
            {/* Left Column */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              {/* What We Do Section */}
              <Box>
                <Typography variant="h4" sx={{ 
                  fontWeight: 700, 
                  color: '#00aaff', 
                  mb: 3,
                  fontSize: { xs: '1.75rem', md: '2rem' }
                }}>
                  What We Do
                </Typography>
                <Typography variant="body1" sx={{ 
                  color: '#444', 
                  fontSize: '1.1rem', 
                  lineHeight: 1.6,
                  mb: 4
                }}>
                  OpenComp crowd-sources data directly from customers’ salary and equity systems and integrates it into user-friendly decision tools that span the entire comp workflow, giving employers everything they need to plan and communicate their pay. The result is pay that is strategic, objective, unbiased, and well understood by employees.
                </Typography>
              </Box>

              {/* Our Solutions Section */}
              <Box sx={{ 
                background: '#e3f4fb', 
                borderRadius: 3, 
                p: 4,
                border: '1px solid #00aaff'
              }}>
                <Typography variant="h5" sx={{ 
                  fontWeight: 700, 
                  color: '#00aaff', 
                  mb: 1,
                  textTransform: 'uppercase',
                  fontSize: '1.25rem'
                }}>
                  Our Solutions
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#666', 
                  mb: 3,
                  fontSize: '0.95rem'
                }}>
                  (accessible through one simple software subscription)
                </Typography>
                
                {/* Solution Grid */}
                <Box sx={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(2, 1fr)', 
                  gap: 2
                }}>
                  {[
                    'Comp Market Data',
                    'Visual Offer Letters',
                    'Benchmarking',
                    'Total Rewards Statements',
                    'Pay Ranges',
                    'Intelligent Offers',
                    'Headcount Planning',
                    'Comp Consulting'
                  ].map((solution) => (
                    <Box key={solution} sx={{
                      background: 'white',
                      p: 2,
                      borderRadius: 2,
                      textAlign: 'center',
                      border: '1px solid #00aaff',
                      transition: 'all 0.2s',
                      '&:hover': {
                        borderColor: '#00aaff',
                        boxShadow: '0 2px 8px rgba(0,170,255,0.2)',
                        background: '#f0f9ff'
                      }
                    }}>
                      <Typography variant="body2" sx={{ 
                        fontWeight: 600, 
                        color: '#00aaff',
                        fontSize: '0.9rem'
                      }}>
                        {solution}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
            </Box>

            {/* Right Column */}
            <Box>
              <Typography variant="h4" sx={{ 
                fontWeight: 700, 
                color: '#00aaff', 
                mb: 4,
                fontSize: { xs: '1.75rem', md: '2rem' },
                textTransform: 'uppercase'
              }}>
                Why We’re Better
              </Typography>
              
              {/* Benefits List */}
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  'Founded by long-time People Ops and Compensation experts',
                  'Actionable data integrated with state-of-the-art decision tools make it easy to plan and communicate pay',
                  'One simple subscription gives you access to solutions for your entire comp workflow',
                  'Intuitive software and helpful support combine for best-in-class customer experience',
                  'Comp consulting practice helps you plan strategic pay programs'
                ].map((benefit, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{
                      width: 20,
                      height: 20,
                      borderRadius: '50%',
                      background: '#00aaff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: 0.5
                    }}>
                      <Box component="span" sx={{
                        width: 8,
                        height: 8,
                        background: 'white',
                        borderRadius: '50%'
                      }} />
                    </Box>
                    <Typography variant="body1" sx={{ 
                      color: '#444', 
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}>
                      {benefit}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
        
        
        {/* Section 2: Compensation Chart by Experience and Job Position */}
        
        
        {/* Section 2: How Our Process Works Timeline */}
        <Box sx={{ mt: 2 }}>

        <Box sx={{ background: '#f7fafd', borderRadius: 3, p: { xs: 2, md: 4 }, mb: 2 }}>
          <Typography variant="h5" className="font-bold mb-6 text-gray-900 text-lg md:text-xl" sx={{ fontWeight: 'bold', textAlign: 'center', mb: 2}}>
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

        {/* Section 4: Common Client Challenges (redesigned) */}
        {/* <Box>
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
                desc: 'Employees and managers don\'t use existing HR tools.'
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
                desc: 'HR tech doesn\'t support business strategy or growth.'
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
        </Box> */}

        {/* New Section: What We Do & Why We're Better */}
       
       
      </Box>

      {/* OpenComp Section */}
      <Box sx={{ background: '#f7fafd', py: 8, mt: 4 }}>
        <Box className="container mx-auto max-w-7xl px-4 md:px-0">
          <Typography variant="h4" sx={{ 
            fontWeight: 700, 
            textAlign: 'center', 
            mb: 6, 
            color: '#00aaff',
            fontSize: { xs: '1.75rem', md: '2.25rem' }
          }}>
            OpenComp Partnership
          </Typography>
          
          <Box sx={{ 
            display: 'grid', 
            gridTemplateColumns: { xs: '1fr', md: '2fr 1fr' }, 
            gap: 6,
            alignItems: 'start'
          }}>
            {/* Left Column: What You Get With OpenComp */}
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
              <Typography variant="h5" sx={{ 
                fontWeight: 700, 
                color: '#00aaff', 
                mb: 3,
                fontSize: { xs: '1.5rem', md: '1.75rem' }
              }}>
                What You Get With OpenComp
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
                {[
                  'Current market data',
                  'Base salary, bonus, total cash, percentage ownership, and equity value',
                  'Executive and non-exec roles',
                  'Unlimited instant queries and reports filtered by the segments you care about most',
                  'Segments include: level, role (including founder vs. non-founder), location, funding stage, headcount, capital raised, revenue, #employees, and industry',
                  'Downloadable reports',
                  'Effortless implementation - no survey submissions!'
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{
                      width: 8,
                      height: 8,
                      borderRadius: '50%',
                      background: '#00aaff',
                      flexShrink: 0,
                      mt: 1
                    }} />
                    <Typography variant="body1" sx={{ 
                      color: '#444', 
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>

              {/* Call to Action Box */}
              <Box sx={{ 
                background: '#e3f4fb', 
                borderRadius: 3, 
                p: 4,
                border: '2px solid #00aaff',
                mt: 2
              }}>
                <Typography variant="h6" sx={{ 
                  fontWeight: 700, 
                  color: '#00aaff', 
                  mb: 2,
                  textAlign: 'center',
                  fontSize: '1.25rem'
                }}>
                  Provide Data Now For Unlimited Free Access*
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#444', 
                  mb: 2,
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}>
                  No time consuming survey submissions required. Just provide your data in raw form, and we’ll do the rest.
                </Typography>
                <Typography variant="body2" sx={{ 
                  color: '#444', 
                  mb: 2,
                  fontSize: '0.95rem',
                  lineHeight: 1.5
                }}>
                  Ready to join? Contact{' '}
                  <Box component="span" sx={{ 
                    color: '#00aaff', 
                    fontWeight: 600,
                    textDecoration: 'underline',
                    cursor: 'pointer'
                  }}>
                    betterbenchmark@opencomp.com
                  </Box>
                </Typography>
                <Typography variant="caption" sx={{ 
                  color: '#666', 
                  fontSize: '0.8rem',
                  fontStyle: 'italic',
                  display: 'block',
                  textAlign: 'center'
                }}>
                  *18 months free unlimited access for first 500 companies who join with up to 200 employees. Always free for companies with up to 50 employees.
                </Typography>
              </Box>
            </Box>

            {/* Right Column: About OpenComp */}
            <Box>
              <Typography variant="h5" sx={{ 
                fontWeight: 700, 
                color: '#00aaff', 
                mb: 4,
                fontSize: { xs: '1.5rem', md: '1.75rem' }
              }}>
                ABOUT OPENCOMP
              </Typography>
              
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
                {[
                  'Started by Founding VP, HR of Salesforce.com & Principal of Connery Consulting',
                  'Data team lead by 30-year comp practitioner',
                  'Actionable data with best-in-class software make it easy to plan and communicate cash and equity comp',
                  'Consulting practice for those who need expert advice'
                ].map((item, index) => (
                  <Box key={index} sx={{ display: 'flex', alignItems: 'flex-start', gap: 2 }}>
                    <Box sx={{
                      width: 24,
                      height: 24,
                      borderRadius: '50%',
                      background: '#00aaff',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      flexShrink: 0,
                      mt: 0.5
                    }}>
                      <Box component="span" sx={{
                        width: 12,
                        height: 12,
                        background: 'white',
                        borderRadius: '50%'
                      }} />
                    </Box>
                    <Typography variant="body1" sx={{ 
                      color: '#444', 
                      fontSize: '1rem',
                      lineHeight: 1.5
                    }}>
                      {item}
                    </Typography>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 