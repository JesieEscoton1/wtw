"use client";

import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import GroupsIcon from '@mui/icons-material/Groups';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import StarIcon from '@mui/icons-material/Star';
import DevicesIcon from '@mui/icons-material/Devices';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WorkspacePremiumIcon from '@mui/icons-material/WorkspacePremium';
import HubIcon from '@mui/icons-material/Hub';
import TuneIcon from '@mui/icons-material/Tune';
import BarChartIcon from '@mui/icons-material/BarChart';
import AutoGraphIcon from '@mui/icons-material/AutoGraph';

export default function OverviewPage() {

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
             Guiding organizations in navigating people to drive leading businesses toward future growth. This is insight that empowers progress.
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
                src="/images/overview.png"
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
        <Box className="container mx-auto max-w-7xl py-6 px-4 md:px-0">
          <Box className="mb-10 bg-white rounded-xl shadow p-6 md:p-10 text-center">
            <Typography variant="h5" className="font-bold mb-4 text-gray-900 !text-xl md:!text-2xl" sx={{ fontWeight: 'bold' }}>
              Empowering People. Elevating Performance.
            </Typography>
            <Typography variant="body1" className="mb-3 text-gray-800 !text-base md:!text-lg" sx={{ mt: 1 }}>
            At Alliance Atlantic, we believe people are the foundation of every successful organization,
            and our mission is to help you unlock their full potential. Through a collaborative and
            impact-driven approach, we deliver tailored solutions in performance management, job 
            evaluation, HR technology, and talent strategy.By putting people at the center of every
            solution, we help build future-ready teams and cultures rooted in purpose and progress.
            When your people thrive, your business grows.
            </Typography>
          </Box>
        </Box>

        <Box className="container mx-auto max-w-7xl py-0 px-0 md:px-0">
          <Box className="bg-[#d0eafd] rounded-2xl shadow-lg p-8 md:p-12 flex flex-col items-center text-center">
            <Typography variant="h4" className="font-bold mb-6 text-gray-900 !text-2xl md:!text-4xl" sx={{ fontWeight: 'bold' }}>
              Explore Our Expertise
            </Typography>
            <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 w-full mt-4">
              <Box className="bg-white border-2 border-[#00aaff] rounded-xl p-6 shadow flex flex-col items-center">
                <GroupsIcon className="text-[#00aaff] mb-2" style={{ fontSize: 40 }} />
                <Typography variant="h6" className="font-bold mb-2 text-[#00aaff]">Transformative Leadership</Typography>
                <Typography variant="body2" className="text-gray-700">Cultivate leaders who inspire, innovate, and drive change.</Typography>
              </Box>
              <Box className="bg-white border-2 border-[#00aaff] rounded-xl p-6 shadow flex flex-col items-center">
                <TrendingUpIcon className="text-[#00aaff] mb-2" style={{ fontSize: 40 }} />
                <Typography variant="h6" className="font-bold mb-2 text-[#00aaff]">Strategic HR Solutions</Typography>
                <Typography variant="body2" className="text-gray-700">Align people strategies with business goals for measurable impact.</Typography>
              </Box>
              <Box className="bg-white border-2 border-[#00aaff] rounded-xl p-6 shadow flex flex-col items-center">
                <StarIcon className="text-[#00aaff] mb-2" style={{ fontSize: 40 }} />
                <Typography variant="h6" className="font-bold mb-2 text-[#00aaff]">Total Rewards</Typography>
                <Typography variant="body2" className="text-gray-700">Design reward systems that attract and retain top talent.</Typography>
              </Box>
              <Box className="bg-white border-2 border-[#00aaff] rounded-xl p-6 shadow flex flex-col items-center">
                <DevicesIcon className="text-[#00aaff] mb-2" style={{ fontSize: 40 }} />
                <Typography variant="h6" className="font-bold mb-2 text-[#00aaff]">HR Technology</Typography>
                <Typography variant="body2" className="text-gray-700">Leverage modern tools to streamline HR processes.</Typography>
              </Box>
              <Box className="bg-white border-2 border-[#00aaff] rounded-xl p-6 shadow flex flex-col items-center">
                <CheckCircleIcon className="text-[#00aaff] mb-2" style={{ fontSize: 40 }} />
                <Typography variant="h6" className="font-bold mb-2 text-[#00aaff]">Proven Results</Typography>
                <Typography variant="body2" className="text-gray-700">See how our solutions have transformed organizations.</Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        {/* Why Choose Alliance Atlantic Section */}
        <Box className="container mx-auto max-w-7xl py-10 md:py-16 px-2 md:px-4">
          <Box className="bg-white rounded-2xl shadow-lg p-4 md:p-12 flex flex-col items-center text-left">
            <Typography variant="h4" className="font-bold mb-6 md:mb-8 text-gray-900 !text-xl md:!text-2xl lg:!text-4xl">
              Why Choose Alliance Atlantic?
            </Typography>
            <Box className="relative w-full" sx={{ mt: 2 }}>
              {/* Vertical line: left-4 on mobile, left-8 on md+ */}
              <Box className="absolute left-4 md:left-8 top-0 bottom-0 w-1" style={{ background: 'linear-gradient(to bottom, #e04a9b 0%, #00aaff 100%)', borderRadius: 8, zIndex: 0 }} />
              <Box className="flex flex-col gap-6 md:gap-10 pl-6 md:pl-16 relative z-10">
                {/* Step 1 */}
                <Box className="flex flex-row items-start gap-3 md:gap-4 mb-4 md:mb-2 max-w-full md:max-w-3xl">
                  <WorkspacePremiumIcon className="mt-1" style={{ color: '#e04a9b', fontSize: 24, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold mb-1 !text-base md:!text-lg" style={{ color: '#e04a9b' }}>Decades of Expertise</Typography>
                    <Typography variant="body2" className="text-gray-700 !text-sm md:!text-base">
                      Our team has decades of global expertise developing people strategies and a rich
                      legacy in HR consulting. We have established ourselves as reliable consultants in
                      the HR industry by assisting businesses of all sizes with transitions, expansions,
                      and performance issues.</Typography>
                  </Box>
                </Box>
                {/* Step 2 */}
                <Box className="flex flex-row items-start gap-3 md:gap-4 mb-4 md:mb-2 max-w-full md:max-w-3xl">
                  <HubIcon className="mt-1" style={{ color: '#00aaff', fontSize: 24, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold mb-1 !text-base md:!text-lg" style={{ color: '#00aaff' }}>Holistic People Strategy</Typography>
                    <Typography variant="body2" className="text-gray-700 !text-sm md:!text-base">
                      We consider your entire people ecosystem, integrating leadership, culture, talent development,
                      and organizational design into a single, coherent plan. Our objective is to assist you in coordinating
                      all of your employees with your corporate objectives.</Typography>
                  </Box>
                </Box>
                {/* Step 3 */}
                <Box className="flex flex-row items-start gap-3 md:gap-4 mb-4 md:mb-2 max-w-full md:max-w-3xl">
                  <TuneIcon className="mt-1" style={{ color: '#a259e6', fontSize: 24, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold mb-1 !text-base md:!text-lg" style={{ color: '#a259e6' }}>Tailored for You</Typography>
                    <Typography variant="body2" className="text-gray-700 !text-sm md:!text-base">
                      Our solutions and our organizations are not the same.We work directly with your teams
                      to create programs that are highly relevant and impactful, reflecting your own culture,
                      structure, and strategic objectives.</Typography>
                  </Box>
                </Box>
                {/* Step 4 */}
                <Box className="flex flex-row items-start gap-3 md:gap-4 mb-4 md:mb-2 max-w-full md:max-w-3xl">
                  <BarChartIcon className="mt-1" style={{ color: '#ffd600', fontSize: 24, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold mb-1 !text-base md:!text-lg" style={{ color: '#ffd600' }}>Measurable Results</Typography>
                    <Typography variant="body2" className="text-gray-700 !text-sm md:!text-base">
                    Our work produces results rather than just suggestions. To make sure you get genuine,
                    observable return on your investment, we monitor progress, assess efficacy, and continuously
                    enhance using data and analytics.</Typography>
                  </Box>
                </Box>
                {/* Step 5 */}
                <Box className="flex flex-row items-start gap-3 md:gap-4 mb-4 md:mb-2 max-w-full md:max-w-3xl">
                  <AutoGraphIcon className="mt-1" style={{ color: '#00c49a', fontSize: 24, flexShrink: 0 }} />
                  <Box>
                    <Typography variant="h6" className="font-bold mb-1 !text-base md:!text-lg" style={{ color: '#00c49a' }}>Future-Ready Tools</Typography>
                    <Typography variant="body2" className="text-gray-700 !text-sm md:!text-base">
                    We provide you with cutting-edge frameworks, tools, and technologies that help you
                    stay ahead of change and maintain an agile people strategy. With innovative concepts
                    and digital HR technologies, we prepare your team for the future.</Typography>
                  </Box>
                </Box>
              </Box>
            </Box>
            {/* Our Team Highlight remains unchanged */}
            <Box className="mt-8 md:mt-10 bg-[#00aaff] rounded-xl p-4 md:p-6 shadow flex flex-col items-center w-full">
              <Typography variant="overline" className="text-white font-bold tracking-widest !text-xs md:!text-sm mb-1">Team</Typography>
              <Typography variant="h6" className="font-bold mb-2 text-white !text-base md:!text-lg">Our Team</Typography>
              <Typography variant="body2" className="text-white !text-sm md:!text-base">
                Seasoned HR consultants dedicated to building stronger organizations through strategy, systems, and leadership.
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>


      <Footer />
    </Box>
  );
} 