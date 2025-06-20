"use client";

import { Box, Typography, Button, IconButton, Link, Paper, Divider } from '@mui/material';
import PlayArrowIcon from '@mui/icons-material/PlayArrow';
import ShareIcon from '@mui/icons-material/Share';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import { useState, useRef } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

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
            <Typography variant="overline" className="text-blue-500 tracking-widest font-bold !text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              Total Reward
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-6xl md:!text-6xl leading-tight mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '15px'}}
            >
              Reward Strategy
            </Typography>
            <Typography
              variant="h1"
              className="font-serif font-extrabold !text-6xl md:!text-6xl leading-tight mb-4"
              style={{ fontFamily: 'serif', fontWeight: 800, marginTop: '-15px'}}
            >
             Reward Alignment
            </Typography>
            <Typography variant="h5" className="opacity-90 mb-6 !text-xl md:!text-1xl font-normal">
            Taking a Total Reward perspective and approach.
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
                src="/images/TR1.png"
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
      <Box className="container mx-auto max-w-7xl py-10 px-4 md:px-0 grid grid-cols-1 md:grid-cols-3 gap-16">
        {/* Left/Main Text */}
        <Box className="md:col-span-2 space-y-8">
          <Box>
            <Typography variant="h6" className="font-bold mb-0 text-gray-900" sx={{ fontWeight: 'bold'}}>
            How Do We Design Reward Programs That Truly Support Our Business and People?
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
            By adopting a Total Rewards approach, we go beyond traditional compensation models to develop a
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            comprehensive system that encompasses all aspects of employee value. This includes not just pay and
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            benefits, but also recognition, development opportunities, work-life balance, and a positive workplace
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            experience. Our goal is to ensure that every element of our reward strategy contributes meaningfully to
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            employee engagement, motivation, and retention.
            </Typography>

            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px', mt:1}}>
            Our reward initiatives are carefully crafted to align with the overall business strategy and human capital
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            priorities of the organization. Whether it&apos;s driving high performance, attracting top talent, or supporting
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            workforce transformation, our approach ensures that reward programs reinforce organizational objectives.
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            We also take into account the company&apos;s unique culture and values, making sure that our reward systems
            </Typography>
            <Typography variant="body1" className="mb-2 text-gray-800" sx={{ fontSize: '18px'}}>
            reinforce the behaviors and outcomes that matter most to our success.
            </Typography>
            

            
          </Box>


                                <Box className="flex flex-col  gap-2">
                                  <Box className="w-24 h-24 bg-teal-50 p-4 rounded-lg flex-shrink-0 flex ">
                                    <Image
                                      src="/images/icons/1.svg"
                                      alt="Scorecard icon"
                                      width={64}
                                      height={64}
                                    />
                                  </Box>
                                  <Typography variant="h6" className="font-bold ">
                                    Base salary or hourly wages
                                  </Typography>
                                  <Typography className="text-blue-700 normal-case p-0 justify-start text-sm font-bold hover:text-blue-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                                              Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '20px', marginLeft: '6px', marginTop: '4px' }} />
                                            </Typography>
                                </Box>

                                                <Box className="flex flex-col gap-2">
                                  <Box className="w-24 h-24 bg-blue-50 p-4 rounded-lg flex-shrink-0 flex">
                                    <Image
                                      src="/images/icons/2.svg"
                                      alt="Insights icon"
                                      width={64}
                                      height={64}
                                    />
                                  </Box>
                                  <Typography variant="h6" className="font-bold">
                                    Bonuses
                                  </Typography>
                                    <Typography className="text-blue-700 normal-case p-0 justify-start text-sm font-bold hover:text-blue-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                                              Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '20px', marginLeft: '6px', marginTop: '4px' }} />
                                            </Typography>
                                </Box>

                                <Box className="flex flex-col gap-2 ">
                                <Box className="w-24 h-24 bg-teal-50 p-4 rounded-lg flex-shrink-0 ">
                                <Image
                                   src="/images/icons/3.svg"
                                          alt="Assessment icon"
                                              width={64}
                                                      height={64}
                                                    />
                                                  </Box>
                                                  <Box>
                                                    <Typography variant="h6" className="font-bold ">
                                                     Commission
                                                    </Typography> 
                                                  </Box>
                                                  <Typography className="text-blue-700 normal-case p-0 justify-start text-sm font-bold hover:text-blue-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '20px' }}>
                                                Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '20px', marginLeft: '6px', marginTop: '4px' }} />
                                              </Typography>
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
              boxShadow: '0 5px 0 0 lightblue, 0 8px 24px 0 lightblue',
              overflow: 'visible',
            }}
          >
            
            <Typography variant="h5" component="p" className="heading-4 mb-4" sx={{ fontStyle: 'italic', color: '#212529', marginTop: '30px' }}>
            Taking a Total Reward perspective and approach, we develop various forms of reward programs aligned with the organization&apos;s business and people strategies, its culture and appropriate to the various employee groups.
            </Typography>
           
            <span className="quote__block" />
          </Box>

           {/* Sidebar */}
              <div className="col-span-4">
                <Box className="bg-gray-50 p-6 rounded-lg sticky top-6">
                  <Typography variant="h5" className="text-2xl font-bold mb-6">
                    Complete our form to get a link to download the report and recording
                  </Typography>
                  
                  <form className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        First Name:<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="First Name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Last Name:<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Last Name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Business Email:<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="Business Email"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Company Name:<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Company Name"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">
                        Job Title:<span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Job Title"
                        className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                      />
                    </div>

                    <Typography variant="body2" className="text-sm text-gray-600">
                      For more information on how we handle your personal information, please see our global{' '}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      .
                    </Typography>

                    <button
                      type="submit"
                      className="w-full bg-blue-600 text-white py-3 px-6 rounded-full hover:bg-blue-700 transition-colors"
                    >
                      Submit →
                    </button>
                    {/* Global Research Card */}
                {/* <Box className="bg-white rounded-lg border-l-4 border-blue-300 border-t border-r border-b p-6 mb-12">
                  <Typography variant="overline" className="text-gray-600 block mb-4">
                    TOTAL REWARD
                  </Typography>
                  <Typography variant="h3" className="text-3xl font-bold mb-4">
                    Reward Alignment
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Taking a Total Reward perspective and approach.
                  </Typography>
                  <Button
                    className="text-purple-600 hover:text-purple-700 p-0 normal-case font-bold"
                    endIcon={<span className="ml-2">→</span>}
                  >
                    Participate now
                  </Button>
                  
                </Box> */}
            
                  </form>
                </Box>
              </div>

         
        </Box>
        
      </Box>

<Box className="max-w-7xl mx-auto px-4">
  <Typography variant="h2" className="text-3xl font-bold mb-6">
    Related Contents
  </Typography>

  <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    {/*  Base Pay and Incentives */}
    <Box className="bg-white rounded-lg shadow-sm p-4 relative hover:shadow-md transition-shadow h-72 w-full">
      <Typography variant="h5" className="text-lg font-bold mb-3">
        Base Pay and Incentives
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-8 text-sm">
        Employees receive fixed salaries and performance-based bonuses that reflect their contributions and market value.
      </Typography>
      <Box className="absolute bottom-4 right-4">
        <span className="text-blue-600 text-xl">→</span>
      </Box>
    </Box>

    {/* Benefits and Perks */}
    <Box className="bg-white rounded-lg shadow-sm p-4 relative hover:shadow-md transition-shadow h-72 w-full">
      <Typography variant="h5" className="text-lg font-bold mb-3">
        Benefits and Perks
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-8 text-sm">
        Includes healthcare, retirement plans, paid time off, and other support programs that enhance employee well-being.
      </Typography>
      <Box className="absolute bottom-4 right-4">
        <span className="text-blue-600 text-xl">→</span>
      </Box>
    </Box>

    {/* Career Growth and Recognition */}
    <Box className="bg-white rounded-lg shadow-sm p-4 relative hover:shadow-md transition-shadow h-72 w-full">
      <Typography variant="h5" className="text-lg font-bold mb-3">
        Career Growth and Recognition
      </Typography>
      <Typography variant="body1" className="text-gray-600 mb-8 text-sm">
        Organizations offer training, promotion opportunities, and recognition programs to reward and retain top talent.
      </Typography>
      <Box className="absolute bottom-4 right-4">
        <span className="text-blue-600 text-xl">→</span>
      </Box>
    </Box>
  </Box>
</Box>


      {/* WTW Insights Section */}
      <Box className="w-full bg-[lightblue] py-10 px-4 md:px-0 relative">
        <Box className="container mx-auto max-w-7xl">
          <Box className="flex justify-between items-center mb-8">
            <Typography variant="h4" className="font-bold text-black" sx={{ fontSize: '35px' }}>
             Industry insights
            </Typography>
            <Link href="#" color="inherit" underline="none" className="flex items-center text-white hover:text-gray-300 transition-colors">
              <Typography variant="body1" className="text-blue-700 font-semibold mr-2" sx={{ fontWeight: 'bold' }}>
                See all insights
              </Typography>
              <ArrowForwardIcon sx={{ fontSize: '1.25rem', ml: '2px', color: 'blue', fontWeight: 'bold' }} />
            </Link>
          </Box>

          {/* Insights Carousel/Cards */}
          <Box className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Insight Card 1 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-48">
                <Image
                  src="/images/TR4.png" // Placeholder image
                  alt="AI risk and governance"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE 1
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px' }}>
                Adopting a Total Rewards perspective allows organizations to align reward programs with business goals and employee expectations
                </Typography>
              </Box>
            </Paper>

            {/* Insight Card 2 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-48">
                <Image
                  src="/images/TR5.png" // Placeholder image
                  alt="Pay transparency"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE 2
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px' }}>
                Customized reward solutions address the diverse needs of various employee groups, enhancing engagement and retention.
                </Typography>
              </Box>
            </Paper>

            {/* Insight Card 3 */}
            <Paper elevation={3} className="rounded-lg overflow-hidden flex flex-col">
              <Box className="relative w-full h-48">
                <Image
                  src="/images/TR6.png" // Placeholder image
                  alt="AI governance"
                  layout="fill"
                  objectFit="cover"
                />
              </Box>
              <Box className="p-4 flex flex-col flex-grow">
                <Typography variant="overline" className="text-gray-600 tracking-widest font-bold !text-sm" sx={{ letterSpacing: '0.1em' }}>
                  ARTICLE 3
                </Typography>
                <Typography variant="h6" className="font-bold mt-1 text-gray-900" sx={{ fontSize: '20px' }}>
                Reward strategies that reflect organizational culture help reinforce desired behaviors and strengthen company identity.
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