"use client";

import { Box, Typography, Button, IconButton, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OverviewPage() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isSecondaryPlaying, setIsSecondaryPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const secondaryVideoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  const handleSecondaryPlayClick = () => {
    setIsSecondaryPlaying(true);
    setTimeout(() => {
      if (secondaryVideoRef.current) {
        secondaryVideoRef.current.play().catch(() => {});
      }
    }, 100);
  };

  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <Box className="bg-[lightblue] py-5.5 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-4 md:gap-8 min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-4 md:space-y-6 md:pr-8">
            <Typography variant="overline" className="text-white tracking-widest font-bold !text-sm md:!text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              ABOUT US
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-4xl md:!text-6xl lg:!text-7xl leading-tight mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Overview
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-6 !text-lg md:!text-xl font-normal">
             Guiding organizations in navigating people, risk, and capital to drive leading businesses toward future growth. This is insight that empowers progress.
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
          <Box className="flex-1 relative w-full h-56 md:h-72 lg:h-96 flex items-center justify-center mt-6 md:mt-0">
            <Box className="relative w-full h-full z-10">
              <Image
                src="/images/overview-manage.png"
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
        <Box className="md:col-span-2 space-y-6 md:space-y-8">
          <Box>
            <Typography variant="h5" className="font-bold mb-0 text-gray-900 !text-xl md:!text-2xl" sx={{ fontWeight: 'bold'}}>
              How do you move from complexity to clarity?
            </Typography>
            <Typography variant="h6" className="font-bold mb-0 text-gray-900 !text-lg md:!text-xl" sx={{ fontWeight: 'bold', mt:1}}>
              From the unknown to the untapped?
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800 !text-base md:!text-lg" sx={{ mt:1}}>
             At Alliance Atlantic, we deliver solutions driven by data and insights across people, risk, and capital helping organizations build resilience, inspire their people,
             and enhance overall performance.
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800 !text-base md:!text-lg" sx={{ mt:1}}>
             We work in true partnership with our clients, bringing together diverse expertise and a steadfast commitment to their success. Through open collaboration and critical
             thinking, we challenge assumptions to uncover the most effective paths forward.
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800 !text-base md:!text-lg" sx={{ mt:1}}>
             Our global experience, combined with local understanding, allows us to deliver tailored solutions that address your unique needs with precision.
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800 !text-base md:!text-lg" sx={{ mt:1}}>
             Together, we broaden perspectives, sharpen strategies, and transform your most complex issues into clear, actionable opportunities paving the way
             for sustainable, long-term growth.
            </Typography>
          </Box>

          {/* Featured Video Section */}
          {/* <Box className="w-full">  
            <Typography variant="subtitle1" className="font-bold mt-4 text-gray-900 !text-xl md:!text-2xl" sx={{ marginTop: '0px', fontWeight: 'bold', marginBottom: '15px'}}>
              This is perspective that moves you.
            </Typography>
            <Box className="relative w-full h-0 pb-[56.25%] bg-black rounded-lg overflow-hidden cursor-pointer">
              {!isPlaying && (
                <Box
                className="absolute inset-0 mt-4"
                onClick={handlePlayClick}
              >
                <Image
                  src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5728959027001/071a239c-7816-48a0-ac31-f833778ca178/c3231194-1c84-4063-8a19-ce86885f6b2a/1280x720/match/image.jpg"
                  alt="Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                <Box className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-between">
                  <Box className="flex justify-between items-start">
                    <Box className="flex flex-col">
                      <Typography variant="h4" component="h3" className="text-white font-serif !text-xl md:!text-2xl lg:!text-3xl">
                        Perspective that moves you
                      </Typography>
                      <Typography variant="body2" className="text-white opacity-90 !text-sm md:!text-base">
                        We celebrate perspective. Because it allows you to embrace diverse ideas and experiences to build something better.
                      </Typography>
                    </Box>
                    <IconButton aria-label="share" size="large" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                      <ShareIcon sx={{ color: 'white' }}/>
                    </IconButton>
                  </Box>

                  <Box className="flex justify-start items-end">
                    <Box className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-[#00aaff] flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                      <PlayArrowIcon style={{ fontSize: '40px', color: 'white' }} className="md:!text-[60px]" />
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
                  <source src="/videos/WTW-Perspective.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
            <Box className="p-2 md:p-4">
                <Typography variant="caption" className="block mt-2 text-gray-700 !text-sm md:!text-base" sx={{ fontWeight: 'bold'}}>
                    Perspective that moves you
                </Typography>
                <Typography variant="caption" className="block mt-2 text-gray-700 !text-xs md:!text-sm">
                    we celebrate perspective. Because it allows you to embrace diverse ideas and experiences to build something better.
                </Typography>
            </Box>
          </Box> */}

          {/* Purpose and Values */}
          {/* <Divider
            sx={{
              my: -2,
              borderColor: '#e5e1ea',
              borderBottomWidth: 3,
              opacity: 1,
              width: '100%',
            }}
          /> */}
          
          <Box className="mt-8 md:mt-12">
            <Typography variant="h5" className="font-bold mb-4 text-gray-900 !text-xl md:!text-2xl" sx={{ fontWeight: 'bold'}}>
              Our purpose and values
            </Typography>
            <Typography variant="body1" className="mb-4 text-gray-800 !text-base md:!text-lg" sx={{ marginTop: '10px' }}>
              At Alliance Atlantic, our purpose defines who we are and why we exist:
            </Typography>
            <Typography variant="body1" className="mb-4 text-gray-800 !text-base md:!text-lg" sx={{ marginTop: '10px'}}>
             Our values are not simply words they are principles that guide every decision, every relationship, and
             every outcome. Grounded in a strong client focus, collaboration, integrity, respect, and a relentless 
             pursuit of excellence, these values are the foundation of our enduring legacy.
            </Typography>
            <Box className="space-y-4">
              <Box>
                <Typography variant="subtitle1" className="font-bold text-gray-900 !text-lg md:!text-2xl" sx={{ fontWeight: 'bold', marginTop: '20px'}}>Client focus</Typography>
                <Typography variant="body2" className="text-gray-800 !text-base md:!text-lg">Our clients' success is our highest priority. In every engagement, we act in their best interests listening carefully, understanding their unique needs, honoring their perspectives, and consistently striving to exceed expectations.</Typography>
              </Box> 
              <Box>
                <Typography variant="subtitle1" className="font-bold text-gray-900 !text-lg md:!text-2xl" sx={{ fontWeight: 'bold', marginTop: '20px'}}>Teamwork</Typography>
                <Typography variant="body2" className="text-gray-800 !text-base md:!text-lg">When you partner with one of us, you benefit from the strength of all of us. We collaborate across disciplines, geographies, and functions to deliver innovative solutions and world-class advice. By supporting one another, we multiply our collective expertise and create greater value for our clients.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" className="font-bold text-gray-900 !text-lg md:!text-2xl" sx={{ fontWeight: 'bold', marginTop: '20px'}}>Integrity</Typography>
                <Typography variant="body2" className="text-gray-800 !text-base md:!text-lg">Trust is the cornerstone of our relationships. We earn that trust daily through professionalism, transparency, accountability, and a steadfast commitment to doing what is right. We hold ourselves accountable to our clients, shareholders, regulators, and each other for both our actions and our results.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" className="font-bold text-gray-900 !text-lg md:!text-2xl" sx={{ fontWeight: 'bold', marginTop: '20px'}}>Respect</Typography>
                <Typography variant="body2" className="text-gray-800 !text-base md:!text-lg">We embrace diversity of thought, background, and experience. Through open dialogue and mutual understanding, we foster an inclusive culture built on fairness, honesty, and genuine care for one another. We manage all our relationships with colleagues, clients, and communities with dignity and responsibility.</Typography>
              </Box>
              <Box>
                <Typography variant="subtitle1" className="font-bold text-gray-900 !text-lg md:!text-2xl" sx={{ fontWeight: 'bold', marginTop: '20px'}}>Excellence</Typography>
                <Typography variant="body2" className="text-gray-800 !text-base md:!text-lg">We are committed to leadership and continuous improvement. This means investing in the personal and professional growth of our people, ensuring they have the tools, resources, and opportunities to advance their expertise. In every aspect of our business, we maintain an uncompromising focus on innovation, quality, and risk management to consistently deliver superior outcomes.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Right Column: Quote and Secondary Video */}
        <Box className="space-y-6 md:space-y-8">
          {/* Quote Box */}
          {/* <Box
            component="blockquote"
            className="quote sr-reveal relative bg-white rounded-lg p-4 md:p-8 my-4 md:my-6 border-l-5"
            sx={{
              borderLeftColor: 'lightblue',
              borderRightColor: 'lightblue',
              boxShadow: '0 5px 0 0 lightblue, 0 8px 24px 0 rgba(44, 62, 80, 0.08)',
              overflow: 'visible',
            }}
          >
            <span
              className="heading-4 quote__icon absolute -left-4 md:-left-8 top-2 text-4xl md:text-5xl"
              style={{
                marginTop: 10,
                marginBottom: 0,
                marginLeft: 30,
                letterSpacing: '-0.4px',
                color: '#212529',
                lineHeight: 1,
                fontFamily: 'serif',
              }}
            >
                &nbsp; &quot;
            </span>
            <Typography variant="h5" component="p" className="heading-4 mb-4 !text-lg md:!text-xl" sx={{ fontStyle: 'italic', color: '#212529', marginTop: '30px' }}>
              Our name and brand reflect the clarity and actionable solutions we bring to today&apos;s challenges.
            </Typography>
            <Box component="cite" className="font-mono-small font-semibold not-italic block text-gray-700 mt-4 !text-sm md:!text-base">
              Carl Hess
              <br />
              <span className="font-bold">CEO</span>
            </Box>
            <span className="quote__block" />
          </Box> */}

          {/* Secondary Video */}
          {/* <Box className="w-full" sx={{ marginTop: { xs: '100%', md: '180%' } }}>
            <Box className="relative w-full h-0 pt-[56.25%] bg-black rounded-lg overflow-hidden cursor-pointer">
              {!isSecondaryPlaying && (
                <>
                  <Image
                    src="/images/centuries.jpg"
                    alt="What will your tomorrow look like?"
                    layout="fill"
                    objectFit="cover"
                  />
                  <Box className="absolute inset-0 flex items-center justify-center" onClick={handleSecondaryPlayClick}>
                    <Box className="w-12 h-12 md:w-14 md:h-14 rounded-full bg-[#00aaff] flex items-center justify-center opacity-90 hover:opacity-100 transition-opacity">
                      <PlayArrowIcon style={{ fontSize: '30px', color: 'white' }} className="md:!text-[40px]" />
                    </Box>
                  </Box>
                </>
              )}
              {isSecondaryPlaying && (
                <video
                  ref={secondaryVideoRef}
                  controls
                  autoPlay
                  className="absolute inset-0 w-full h-full object-cover"
                  onEnded={() => setIsSecondaryPlaying(false)}
                >
                  <source src="/videos/Transforming Tomorrows - WTW.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </Box>
            <Typography variant="caption" className="block mt-2 text-gray-700 !text-sm md:!text-base" sx={{ fontWeight: 'bold', marginTop: '10px'}}>
            What will your tomorrow look like?
            </Typography>
            <Typography variant="caption" className="block mt-2 text-gray-700 !text-xs md:!text-sm" sx={{ marginTop: '5px'}}>
              For almost two centuries, we have helped smart people transform tomorrow and solve their people, risk and capital challenges.
            </Typography>
            <Divider
                sx={{
                my: 2,
                borderColor: '#e5e1ea',
                borderBottomWidth: 3,
                opacity: 1,
                width: '100%',
                }}
            />
          </Box> */}
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 