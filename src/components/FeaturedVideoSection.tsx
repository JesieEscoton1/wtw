'use client';

import { Box, Typography, Button, IconButton } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ShareIcon from '@mui/icons-material/Share';
import { useState, useRef } from 'react';
import Image from 'next/image';

const FeaturedVideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);

  const handlePlayClick = () => {
    setIsPlaying(true);
    // Use a timeout to ensure the video element is in the DOM before trying to play
    setTimeout(() => {
      if (videoRef.current) {
        videoRef.current.play().catch(error => {
          console.error('Error attempting to play video:', error);
          // Handle autoplay issues, maybe show a message to the user to click play again
        });
      }
    }, 100);
  };

  return (
    <Box className="py-8 md:py-16 px-4 md:px-8 bg-gray-50">
      <Box className="container mx-auto max-w-7xl">
        <Box className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 items-center">
          {/* Video Thumbnail/Player Container */}
          <Box className="relative w-full h-0 pb-[56.25%] md:h-[360px] md:pb-0 overflow-hidden group cursor-pointer">
            {/* Thumbnail with Overlaid Content and Play Button */}
            {!isPlaying && (
              <Box
                className="absolute inset-0"
                onClick={handlePlayClick}
              >
                {/* Background Image */}
                <Image
                  src="https://cf-images.us-east-1.prod.boltdns.net/v1/static/5728959027001/071a239c-7816-48a0-ac31-f833778ca178/c3231194-1c84-4063-8a19-ce86885f6b2a/1280x720/match/image.jpg"
                  alt="Video Thumbnail"
                  layout="fill"
                  objectFit="cover"
                  className="transition-transform duration-300 group-hover:scale-105"
                />

                {/* Overlay with gradient and content */}
                <Box className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent p-4 md:p-6 flex flex-col justify-between">
                  {/* Top Row: Title and Share Icon */}
                  <Box className="flex justify-between items-start">
                    {/* Title and Subtitle */}
                    <Box className="flex flex-col">
                      <Typography variant="h4" component="h3" className="text-white font-serif text-xl md:text-2xl lg:text-3xl">
                        Perspective that moves you
                      </Typography>
                      <Typography variant="body2" className="text-white opacity-90 text-sm md:text-base">
                        We celebrate perspective. Because it allows you t...
                      </Typography>
                    </Box>
                    {/* Share Icon */}
                    <IconButton aria-label="share" size="large" className="text-white opacity-80 hover:opacity-100 transition-opacity">
                      <ShareIcon sx={{ color: 'white', fontSize: { xs: '1.5rem', md: '2rem' } }}/>
                    </IconButton>
                  </Box>

                  {/* Bottom Row: Play Button (positioned bottom left) */}
                   <Box className="flex justify-start items-end">
                     {/* Play Button - Purple Circle with White Triangle */}
                     <Box className="w-14 h-14 md:w-18 md:h-18 rounded-full bg-[#00aaff] flex items-center justify-center opacity-90 group-hover:opacity-100 transition-opacity duration-300">
                       <PlayArrowIcon style={{ fontSize: '40px', color: 'white' }} className="md:text-[60px]" />
                     </Box>
                   </Box>
                </Box>
              </Box>
            )}

            {/* Video Player */}
            {isPlaying && (
              <video 
                ref={videoRef}
                controls 
                autoPlay
                className="absolute inset-0 w-full h-full object-cover"
                onEnded={() => setIsPlaying(false)}
              >
                <source src="/videos/WTW-Perspective.mp4" type="video/mp4" />
                {/* Add more source types here if you have other video formats (e.g., webm, ogv) */}
                Your browser does not support the video tag.
              </video>
            )}
          </Box>

          {/* Video Text Content (Right Side) */}
          <Box className="flex flex-col justify-start items-start mt-6 md:mt-0" >
            <Typography variant="overline" color="black" className="block mb-1" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', md: '25px' } }}>
              FEATURED VIDEO
            </Typography>
            <Button
              variant="text"
              color="primary"
              onClick={() => window.location.href = '/overview'}
              endIcon={<ArrowForwardIcon style={{ fontSize: '1.2rem' }} className="md:text-[1.5rem]" />}
              className="normal-case p-0 ml-0 justify-start text-base md:text-lg font-bold hover:text-blue-900 transition-colors duration-300"
              sx={{ 
                textDecoration: 'none', 
                color: '#00aaff', 
                fontSize: { xs: '18px', md: '20px' }, 
                fontWeight: 'bold', 
                marginTop: '0px' 
              }}
            >
              Learn more about our story
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default FeaturedVideoSection; 