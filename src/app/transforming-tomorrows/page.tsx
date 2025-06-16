"use client";

import { Box, Typography, Button, IconButton, Link, Paper, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TransformingTomorrows() {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[lightblue] py-5.5 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8 min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-6 md:pr-8">
            <Typography variant="overline" className="text-white tracking-widest font-bold !text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              ABOUT US
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-6xl md:!text-6xl leading-tight mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Transforming
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-6xl md:!text-6xl leading-tight mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '-15px'}}
            >
             Tomorrows
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-6 !text-xl md:!text-1xl font-normal">
            We help you achieve your boldest ambitions
            </Typography>
            <Button
              variant="contained"
              className="bg-[#E04A9B] hover:bg-pink-600 normal-case font-bold rounded-full px-8 py-3 text-lg shadow-none"
              style={{ background: '#4E71FF', borderRadius: '9999px', fontWeight: 700, marginTop: 20, color: 'white', fontSize: '18px' }}
              endIcon={<ArrowForwardIcon />}
            >
              Contact Us
            </Button>
          </Box>
          {/* Right: Image with magenta accent bar */}
          <Box className="flex-1 relative w-full h-72 md:h-96 flex items-center justify-center">
            {/* Magenta Accent Bar */}
            
            {/* Main Image */}
            <Box className="relative w-full h-2 md:h-96 z-10">
              <Image
                src="/images/transform.jpg"
                alt="Hero Overview"
                layout="fill"
                objectFit="cover"
                className="rounded-lg shadow-lg"
                priority
              />
              {/* <img
              src="/images/WTWCO_Motifs_Large_FiCo_BR_1.svg"
              alt=""
              style={{
                position: 'absolute',
                right: '-182px',
                bottom: '-50px',
                width: '100%',
                height: '90%',
                zIndex: 0,
                pointerEvents: 'none',
                userSelect: 'none',
                display: 'block'
              }}
            /> */}
            </Box>
          </Box>
        </Box>
      </Box>

      {/* Main Content */}
      <Box className="container mx-auto max-w-7xl py-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left/Main Text */}
        <Box className="md:col-span-2 space-y-5">
          <Box>
            <Typography variant="h6" className="font-bold mb-0 text-gray-900" sx={{ fontWeight: 'bold'}}>
                What will your tomorrow look like?
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
             Will it be smarter? More agile? Will it set you firmly on the path to sustained success? Will
          
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             it empower your people to thrive today and for years to come? Will you embrace calculated
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             risks and seize new opportunities?
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
             These are the questions that inspire us every day. For nearly two centuries, we have 
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             partnered with organizations to help them creatively address their most complex challenges  
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             across people, risk, and capital. Because with the right perspective and partnership, the 
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             possibilities for tomorrow are limitless.
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
             As your trusted advisor, Alliance Atlantic works side by side with you gaining a deep 
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             understanding of your business, aligning with your goals, and developing solutions that
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             go beyond the expected. Together, we create the momentum that drives your organization
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
             toward a stronger, more resilient future.
            </Typography>
            
          </Box>

          {/* Featured Video Section */}
          <Box className="w-full">
            <Typography variant="h6" className="font-bold mt-4 text-gray-900" sx={{ marginBottom: '15px' , fontWeight: 'bold'}}>
                Together we transform tomorrows.
            </Typography>
            <Box className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden cursor-pointer">
              {!isPlaying && (
                <Box
                className="absolute inset-0"
                onClick={handlePlayClick}
              >
                {/* Background Image */}
                <Image
                  src="/images/centuries.jpg"
                  alt="Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay with gradient and content */}
                <Box className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-6 flex flex-col justify-between">
                  {/* Top Row: Title and Share Icon */}
                  <Box className="flex justify-between items-start">
                    {/* Title and Subtitle */}
                    <Box className="flex flex-col">
                      <Typography variant="h4" component="h3" className="text-white font-serif">
                        What will your tomorrow look like?
                      </Typography>
                       {/* Adding the smaller text based on the image */}
                      <Typography variant="body2" className="text-white opacity-90">
                        For almost two centuries, Smart people transform tomorrows and solve their people, risk and capital challenges.
                      </Typography>
                    </Box>
                    {/* Share Icon */}
                    <IconButton aria-label="share" size="large" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                      <ShareIcon sx={{ color: 'white' }}/>
                    </IconButton>
                  </Box>

                  {/* Bottom Row: Play Button (positioned bottom left) */}
                   <Box className="flex justify-start items-end">
                     {/* Play Button - Purple Circle with White Triangle */}
                     <Box className="w-18 h-18 rounded-full bg-[#4E71FF] flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                       <PlayArrowIcon style={{ fontSize: '60px', color: 'white' }} />
                     </Box>
                   </Box>
                </Box>
              </Box>
              )}
              {isPlaying && (
                <video
                  ref={videoRef}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                  onEnded={() => setIsPlaying(false)}
                >
                  <source src="/videos/Transforming Tomorrows - WTW.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
            <Box className="p-4">
                <Typography variant="caption" className="block mt-2 text-gray-700" sx={{ fontWeight: 'bold', fontSize: '15px'}}>
                    What will your tomorrow look like?
                </Typography>
                <Typography variant="caption" className="block mt-2 text-gray-700" sx={{ fontSize: '14px'}}>
                    For almost two centuries, Smart people transform tomorrows and solve their people, risk and capital challenges.
                </Typography>
            </Box>
          </Box>

          {/* Purpose and Values */}
          <Divider
            sx={{
              my: -2,
              borderColor: '#e5e1ea',
              borderBottomWidth: 3,
              opacity: 1,
              width: '100%',
            }}
          />
         
        </Box>

        {/* Right Column: Quote and Secondary Video */}
        <Box className="space-y-8">
          {/* Quote Box */}
          <Box
            component="blockquote"
            className="quote sr-reveal relative bg-white rounded-lg p-8 my-6 border-l-5"
            sx={{
              borderLeftColor: 'lightblue',
              borderRightColor: 'lightblue',
              boxShadow: '0 5px 0 0 lightblue, 0 8px 24px 0 rgba(44, 62, 80, 0.08)',
              overflow: 'visible',
            }}
          >
            <span
              className="heading-4 quote__icon absolute -left-8 top-2 text-5xl"
              style={{
                marginTop: 10,
                marginBottom: 0,
                marginLeft: 65,
                letterSpacing: '-0.4px',
                color: '#212529',
                fontSize: '3.5rem',
                lineHeight: 1,
                fontFamily: 'serif',
              }}
            >
              &quot;
            </span>
            <Typography variant="h5" component="p" className="heading-4 mb-4" sx={{ fontStyle: 'italic', color: '#212529', marginTop: '30px' }}>
             At Alliance Atlantic, we guide our clients through the complexities of people, capital, and risk helping them turn today&apos;s challenges into tomorrow&apos;s opportunities and achieve their long-term vision.&quot;
            </Typography>
            <Box component="cite" className="font-mono-small font-semibold not-italic block text-gray-700 mt-4">
              Carl Hess
              <br />
              <span className="font-bold">CEO</span>
            </Box>
            <span className="quote__block" />
          </Box>

          {/* How we help: Section */}
          <Box className="border border-[#5409DA] p-8 rounded-sm space-y-4 mt-8">
            <Typography variant="h5" className="font-bold text-gray-900" sx={{ fontWeight: 'bold', marginBottom: '10px' }}>
              How we help:
            </Typography>
            <Link href="#" color="inherit" underline="none" className="group flex items-center text-[#5409DA] hover:text-[#4E71FF] transition-colors">
              <Box className="relative">
                <Typography variant="body1" className="font-semibold text-blue-700 mr-2" sx={{ fontWeight: 'bold' }}>
                  People solutions
                </Typography>
                <Box className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0e2aff] group-hover:w-full transition-all duration-300"></Box>
              </Box>
              <ArrowForwardIcon sx={{ fontSize: '1.25rem', ml:.5, color: '#0e2aff' }} />
            </Link>
            <Link href="#" color="inherit" underline="none" className="group flex items-center text-[#5409DA] hover:text-[#4E71FF] transition-colors">
              <Box className="relative mt-1">
                <Typography variant="body1" className="font-semibold text-blue-700 mr-2" sx={{ fontWeight: 'bold' }}>
                  Risk solutions
                </Typography>
                <Box className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0e2aff] group-hover:w-full transition-all duration-300"></Box>
              </Box>
              <ArrowForwardIcon sx={{ fontSize: '1.25rem', ml:.5, color: '#0e2aff' }} />
            </Link>
            <Link href="#" color="inherit" underline="none" className="group flex items-center text-[#5409DA] hover:text-[#4E71FF] transition-colors">
              <Box className="relative mt-1">
                <Typography variant="body1" className="font-semibold text-blue-700 mr-2" sx={{ fontWeight: 'bold' }}>
                  Capital solutions
                </Typography>
                <Box className="absolute bottom-0 left-0 h-[2px] w-0 bg-[#0e2aff] group-hover:w-full transition-all duration-300"></Box>
              </Box>
              <ArrowForwardIcon sx={{ fontSize: '1.25rem', ml:.5, color: '#0e2aff' }} />
            </Link>
          </Box>

          {/* Featured Section */}
          <Paper elevation={3} className="rounded-lg overflow-hidden mt-8">
            <Box className="relative w-full h-56">
              <Image
                src="/images/smarter.jpg" // Reusing an existing image for now
                alt="Featured Image"
                layout="fill"
                objectFit="cover"
              />
            </Box>
            <Box className="p-4">
              <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                FEATURED
              </Typography>
              <Typography variant="h6" className="font-bold mt-1 text-gray-900">
                A smarter way to risk
              </Typography>
            </Box>
          </Paper>
        </Box>
        
      </Box>

      {/* Client Success Stories Section */}
      <Box className="w-full bg-gray-100 py-10 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl">
          <Typography variant="h4" className="font-bold mb-4 text-gray-900" sx={{ fontSize: '35px', fontWeight: 'bold' }}>
            Client success stories
          </Typography>
          <Typography variant="body1" className="mb-10 text-gray-800" sx={{ fontSize: '18px', mt:2 }}>
            Partnering closely with our clients, we uncover new opportunities,
          </Typography> 
          <Typography variant="body1" className="mb-10 text-gray-800" sx={{ fontSize: '18px' }}>
            solve complex challenges, and shape a stronger tomorrow.
          </Typography>

          <Box className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-4">
            {/* Card 1 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-64">
                <Image
                  src="/images/high-tech.jpg" // Placeholder image
                  alt="Client Story 1"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-6 flex flex-col justify-between flex-grow">
                <Typography variant="h5" className="font-bold mb-4 text-gray-900" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                 Transforming Workforce Strategy for a Global Manufacturer
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-4" sx={{ fontSize: '16px', mt:1 }}>
                A leading global manufacturing company was facing growing challenges in attracting and retaining top talent across multiple regions...
                </Typography>   
                <Link href="#" color="inherit" underline="none" className="flex items-center text-[#5409DA] hover:text-[#4E71FF] transition-colors self-end">
                  <ArrowForwardIcon sx={{ fontSize: '2rem', color: '#0e2aff' }} />
                </Link>
              </Box>
            </Paper>

            {/* Card 2 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-64">
                <Image
                  src="/images/empower.jpg" // Placeholder image
                  alt="Client Story 2"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-6 flex flex-col justify-between flex-grow">
                <Typography variant="h5" className="font-bold mb-4 text-gray-900" sx={{ fontSize: '24px', fontWeight: 'bold' }}>
                 Managing Complex Risk for a Financial Services Leader
                </Typography>
                <Typography variant="body2" className="text-gray-700 mb-4" sx={{ fontSize: '16px', mt:1 }}>
                 A multinational financial institution was facing increasing regulatory demands, complex market volatility, and a rapidly evolving risk landscape...
                </Typography>
                <Link href="#" color="inherit" underline="none" className="flex items-center text-[#5409DA] hover:text-[#4E71FF] transition-colors self-end">
                  <ArrowForwardIcon sx={{ fontSize: '2rem', color: '#0e2aff' }} />
                </Link>
              </Box>
            </Paper>
          </Box>
        </Box>
      </Box>

      {/* WTW Insights Section */}
      <Box className="w-full bg-[lightblue] py-10 px-4 md:px-0 relative">
        <Box className="container mx-auto max-w-7xl">
          <Box className="flex justify-between items-center mb-8">
            <Typography variant="h4" className="font-bold text-white" sx={{ fontSize: '35px' }}>
             Industry insights
            </Typography>
            <Link href="#" color="inherit" underline="none" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <Typography variant="body1" className="text-white font-semibold mr-2" sx={{ fontWeight: 'bold' }}>
                See all insights
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: '1.25rem', ml: '2px', color: 'white', fontWeight: 'bold' }} />
            </Link>
          </Box>

          {/* Insights Carousel/Cards */}
          <Box className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Insight Card 1 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-64">
                <Image
                  src="/images/ai-risk.jpg" // Placeholder image
                  alt="AI risk and governance"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                 Navigating Global Workforce Transformation
                </Typography>
              </Box>
            </Paper>

            {/* Insight Card 2 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-64">
                <Image
                  src="/images/transparency.jpg" // Placeholder image
                  alt="Pay transparency"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                 Strengthening Risk Resilience in Uncertain Markets
                </Typography>
              </Box>
            </Paper>

            {/* Insight Card 3 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-64">
                <Image
                  src="/images/complex-landscapte.jpg" // Placeholder image
                  alt="AI governance"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px', fontWeight: 'bold' }}>
                 Unlocking Capital Efficiency for Sustainable Growth
                </Typography>
              </Box>
            </Paper>
          </Box>
    
        </Box>
      </Box>    

      <Footer />
    </Box>
  );
} 