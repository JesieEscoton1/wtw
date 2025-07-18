"use client";

import { Box, Typography, Button } from '@mui/material';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function TotalRewards() {
  return (
    <Box className="w-full min-h-screen bg-white">
      <Header />

      {/* Hero Section (Reverted to old version) */}
      <Box className="bg-[lightblue] py-5.5 px-4 md:px-0">
        <Box className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center gap-8 min-h-[440px]">
          {/* Left: Text */}
          <Box className="flex-1 text-white space-y-6 md:pr-8">
            <Typography variant="overline" className="text-blue-500 tracking-widest font-bold !text-base" style={{ letterSpacing: '0.15em', fontWeight: 'bold'}}>
              Total Rewards
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
            We design customized reward programs aligned with your business goals, organizational culture, and talent needs — ensuring fairness, motivation, and retention.
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
      <Box className="container mx-auto max-w-7xl py-10 px-4 md:px-0 grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Main Content Left */}
        <Box className="lg:col-span-8 space-y-8">
          {/* How we can help you */}
          <Box className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-400">
            <Typography variant="h4" className="font-bold mb-2 text-blue-700">How we can help you</Typography>
            <Typography variant="body1" className="text-gray-700">
              We partner with you to create reward programs that align with your business strategy and people priorities. Our approach ensures every element of your total rewards system supports employee engagement, motivation, and retention.
            </Typography>
          </Box>

          {/* Our Services */}
          <Box className="bg-blue-50 shadow rounded-xl p-6">
            <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Services</Typography>
            <Typography variant="body1" className="mb-2">Our total rewards services include:</Typography>
            <ul className="list-none pl-0 mb-0">
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Base Salary and Incentives</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Benefits and Perks</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Recognition Programs</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Career Growth and Development</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Work-Life Balance Initiatives</li>
            </ul>
          </Box>

          {/* Common challenges of clients */}
          <Box className="bg-white shadow rounded-xl p-6 border-l-4 border-blue-400">
            <Typography variant="h4" className="font-bold mb-2 text-blue-700">Common Challenges Our Clients Face</Typography>
            <ul className="list-none pl-0 mb-0">
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Attracting and retaining top talent</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Aligning rewards with business goals</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Managing costs and ROI of rewards</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Communicating value of rewards to employees</li>
              <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Adapting to changing workforce expectations</li>
            </ul>
          </Box>

          {/* Our Process */}
          <Box className="bg-blue-50 shadow rounded-xl p-6">
            <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Process</Typography>
            <div className="flex flex-col md:flex-row gap-4">
              {["Assess current rewards & needs", "Design tailored solutions", "Implement with expert support", "Measure and optimize impact"].map((step, i) => (
                <div key={i} className="flex items-center">
                  <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-2">{i+1}</div>
                  <Typography>{step}</Typography>
                </div>
              ))}
            </div>
          </Box>
        </Box>

        {/* Sidebar: Our Impact and Book a Consultation */}
        <Box className="lg:col-span-4 flex flex-col gap-8 items-center">
          <Box className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl p-6 shadow w-full">
            <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Impact</Typography>
            <Typography variant="body1" className="text-gray-800">
              Our clients experience improved employee engagement, stronger talent retention, and a more compelling employer brand. We deliver measurable results that support your organization’s long-term success.
            </Typography>
          </Box>
          <button
            className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:from-blue-600 hover:to-blue-800 transition-colors w-full"
          >
            Book a Consultation
          </button>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 