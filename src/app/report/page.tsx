'use client';

import './styles.css';
import { Box, Typography, Container } from '@mui/material';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ReportPage() {
  return (
    <Box>
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
      
      <Box 
        sx={{
          minHeight: '100vh',
          position: 'relative',
          '&::before': {
            content: '""',
            position: 'fixed',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: 'url(/images/fil3.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1
          }
        }}
      >
        {/* Hero Content */}
        <Box 
          className="pt-12 pb-24"
          sx={{
            backgroundColor: '#d6d1d9', // Dark overlay
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="overline" 
              className="text-blue-600 block mb-4"
              sx={{ letterSpacing: '0.1em' }}
            >
              REPORT | RESEARCH NETWORK NEWSLETTER
            </Typography>
            <Typography variant="h2" className="text-blue-400 text-5xl font-bold mb-6">
             Natural Catastrophe Review July - December 2024
            </Typography>
            <Box className="max-w-2xl">
              <Typography className="text-black opacity-90 mb-4">
                January 28, 2025
              </Typography>
              <Typography className="text-black opacity-90 text-xl mb-8">
                This edition presents insights and lessons learned from major natural disasters in the second half of 2024, explores key themes of the year, and offers an outlook for early 2025.
              </Typography>
              <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors">
                Subscribe →
              </button>
            </Box>
          </Container>
        </Box>

        {/* Space to show background image */}
        <Box sx={{ height: '500px' }} />

        {/* Main Content */}
        <Box className="bg-white">
          <Container maxWidth="lg" className="py-12">
            <div className="grid grid-cols-12 gap-8">
              {/* Main Content Column */}
              <div className="col-span-8">
                {/* Introduction */}
                <Box className="prose max-w-none mb-12">
                  <Typography variant="body1" className="text-lg mb-8">
                    Catastrophes are having a growing impact on society, with climate change and other factors increasing both their frequency and severity. This report examines the major natural catastrophe events that occurred in the second half of 2024, their impacts on communities and businesses, and the implications for risk management and insurance.
                  </Typography>
                </Box>

                {/* Storms Section */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Storms, flooding and drought since 2024
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    The second half of 2024 saw several significant natural catastrophes, including:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Hurricane Laura in the Gulf of Mexico</li>
                    <li className="mb-2">Severe flooding in Central Europe</li>
                    <li className="mb-2">Extended drought conditions in Western United States</li>
                    <li className="mb-2">Typhoon Haishen in East Asia</li>
                  </ul>
                  <Box className="relative h-[400px] w-full mb-8">
                    <Image
                      src="/images/fil4.jpg"
                      alt="Global catastrophe map"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </Box>
                </Box>

                {/* Economic Impact Section */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    2024 becomes the first year to exceed $1.5T
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Total economic losses from natural catastrophes in 2024 exceeded $1.5 trillion, marking a historic high. Insurance covered approximately 40% of these losses, highlighting the ongoing protection gap in catastrophe risk transfer.
                  </Typography>
                  <Box className="relative h-[300px] w-full mb-8">
                    <Image
                      src="/images/fil2.jpg"
                      alt="Economic losses chart"
                      layout="fill"
                      objectFit="contain"
                      className="rounded-lg"
                    />
                  </Box>
                </Box>

                {/* Climate Change Impact */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    The growing influence of climate change
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Climate change continues to amplify natural catastrophe risks through:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Increased frequency of extreme weather events</li>
                    <li className="mb-2">Greater intensity of storms and precipitation</li>
                    <li className="mb-2">Rising sea levels affecting coastal regions</li>
                    <li className="mb-2">Extended periods of drought and heat waves</li>
                  </ul>
                </Box>

                {/* Interconnected Risks */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Interconnected and compounding risks
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Natural catastrophes in 2024 demonstrated the complex interconnections between physical risks and their cascading impacts on:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Supply chain disruptions</li>
                    <li className="mb-2">Infrastructure resilience</li>
                    <li className="mb-2">Business continuity</li>
                    <li className="mb-2">Community vulnerability</li>
                  </ul>
                </Box>

                {/* Outlook Section */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Outlook
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Looking ahead, organizations need to:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Enhance risk assessment capabilities</li>
                    <li className="mb-2">Develop comprehensive resilience strategies</li>
                    <li className="mb-2">Invest in risk mitigation measures</li>
                    <li className="mb-2">Review insurance coverage adequacy</li>
                  </ul>
                </Box>

                {/* References */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    References
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ' Research',
                      'IPCC Reports',
                      'Global Cat Database',
                      'Insurance Industry Data',
                      'Climate Science',
                      'Economic Analysis'
                    ].map((tag) => (
                      <span key={tag} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                </Box>
              </div>

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

                    <div className="flex items-start gap-2">
                      <input
                        type="checkbox"
                        className="mt-1"
                      />
                      <label className="text-sm text-gray-600">
                        Yes, I'd also like to receive additional information about WTW offerings.
                      </label>
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

                    <Typography variant="body2" className="text-xs text-gray-500">
                      This site is protected by reCAPTCHA and the Google{' '}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>
                      {' '}and{' '}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>
                      {' '}apply.
                    </Typography>
                  </form>
                </Box>
              </div>
            </div>
            <Box className="py-12">
              <Typography variant="h2" className="text-3xl font-bold mb-8">
                Related Contents
              </Typography>
              
              <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Health and Benefits */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Health and Benefits
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    We partner with you to build an effective employee benefits program that sustains a healthy, high-performing workforce.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>

                {/* Wellbeing */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Wellbeing
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    We unlock the business value of employee wellbeing, boosting the effectiveness of total rewards, increasing employee engagement, and improving outcomes.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>

                {/* Global Benefits Management */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Global Benefits Management
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    WTW's Global Benefits Management solutions empower employers, employees and retirees to better navigate the changing benefits landscape.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>

                {/* Employee Financial Resilience */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Employee Financial Resilience
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    We can help you build a financially resilient workforce to improve engagement and retention for better business outcomes.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>

                {/* Diversity, Equity and Inclusion */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Diversity, Equity and Inclusion
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    We provide data-driven diversity, equity and inclusion (DEI) solutions to support the people and risk strategies that enable your employees to thrive.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>

                {/* Retirement */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Retirement
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    We partner with organizations to help with retirement plan set up, actuarial valuations, plan governance and administration services, employee communications and more.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-purple-600 text-xl">→</span>
                  </Box>
                </Box>
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
} 