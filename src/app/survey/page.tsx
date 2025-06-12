'use client';

import './styles.css';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Avatar, Button } from '@mui/material';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartLine, faUsers, faShieldAlt, faChartBar, faClock, faCamera } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SurveyPage() {
  const reasons = [
    {
      icon: faChartLine,
      title: "Forward-focused",
      description: "Understand how organizations are evolving their benefits strategies to meet changing needs"
    },
    {
      icon: faUsers,
      title: "Insights from leaders",
      description: "Learn from organizations across diverse sectors to understand their benefits and wellbeing priorities"
    },
    {
      icon: faShieldAlt,
      title: "Assess effectiveness",
      description: "Evaluate how your benefits strategy compares with your peers and identify improvement areas"
    },
    {
      icon: faChartBar,
      title: "Benefits challenges",
      description: "Discover key issues that affect your benefits strategy and solutions to address them"
    },
    {
      icon: faClock,
      title: "Future-proof solutions",
      description: "Get insights on emerging trends to help you develop a future-ready benefits strategy"
    },
    {
      icon: faCamera,
      title: "What others get typically",
      description: "Benchmark your benefits against peers to ensure competitiveness"
    }
  ];

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
            backgroundImage: 'url(/images/fil.jpg)',
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
            backgroundColor: '#E3E1E6', // Solid light gray/lavender color without opacity
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="overline" 
              className="text-purple-800 block mb-4"
              sx={{ letterSpacing: '0.1em' }}
            >
             Organizational Development
            </Typography>
            <Typography variant="h2" className="text-4xl font-bold mb-6 text-gray-900">
              2025 Benefits Trends Survey
            </Typography>
            <Box className="max-w-2xl">
              <Typography variant="h3" className="text-2xl mb-4 text-gray-900">
                Fielding now
              </Typography>
              <Typography variant="body1" className="text-sm mb-2 text-gray-900">
                March 3, 2025
              </Typography>
              <Typography variant="body1" className="text-gray-700">
                What challenges, solutions and innovations are shaping today's employee benefits landscape? Take the survey.
              </Typography>
            </Box>
          </Container>
        </Box>

        {/* Space to show background image */}
        <Box sx={{ height: '500px' }} />

        {/* Main Content with white background */}
        <Box className="bg-white">
          <Container maxWidth="lg" className="py-12">
            {/* Description Text and About Survey */}
            <Box className="grid grid-cols-12 gap-8 mb-12">
              {/* Left column for text */}
              <Box className="col-span-7">
                <Typography variant="body1" className="text-gray-700 mb-8">
                  In today's fast-paced business world, staying ahead in benefits management is crucial. Our biennial survey examines the key factors shaping organizations' benefits strategies, the challenges they face and the future changes being planned. It provides actionable insights to help your company thrive by examining the current landscape and offering critical information to get (or keep) you ahead of the curve.
                </Typography>

                {/* About Survey Card */}
                <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-8">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Typography variant="overline" className="text-gray-600 block mb-2">
                        UNLOCK MORE
                      </Typography>
                      <Typography variant="h4" className="text-xl font-bold">
                        About this Survey
                      </Typography>
                    </Box>
                    <Button className="min-w-0 p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                      <span className="text-2xl">+</span>
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body1" className="text-gray-700 mb-8">
                  Our 2025 Benefits Trends Survey, fielding in over 90 markets, offers a comprehensive approach to understanding the future direction of an organization's benefit strategy. This year's survey delves into a wide range of topics, including the role of benefits within the organization, planned spending, priorities and effectiveness. It also explores communication and engagement strategies, the use of technology, financial management, vendor management and emerging trends such as AI in benefits support and support for specific employee groups.
                </Typography>

                <Button
                  variant="contained"
                  className="bg-purple-600 hover:bg-purple-700 rounded-full px-8 py-3 normal-case"
                  endIcon={<span>→</span>}
                >
                  Participate now
                </Button>

              <Typography variant="h2" className="text-2xl font-bold mb-8">
                Top reasons to participate in the 2025 Benefits Trends Survey:
              </Typography>

              <Box className="grid grid-cols-1 gap-8">
                {/* Personalized scorecard */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-teal-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/1.svg"
                      alt="Scorecard icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Personalized scorecard
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Receive a best-in-class personalized scorecard to benchmark your organization's benefits strategies against your peers.
                    </Typography>
                  </Box>
                </Box>

                {/* Insights into business issues */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-blue-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/2.svg"
                      alt="Insights icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Insights into business issues
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Gain insights into the business issues shaping benefits strategies, such as aligning with company objectives and market trends.
                    </Typography>
                  </Box>
                </Box>

                {/* Assess effectiveness */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-purple-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/3.svg"
                      alt="Assessment icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Assess effectiveness
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Assess how well your current benefits strategy meets employee needs and addresses challenges like flexible work and talent competition.
                    </Typography>
                  </Box>
                </Box>

                {/* Identify challenges */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-teal-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/4.svg"
                      alt="Challenges icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Identify challenges
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Identify the most pressing challenges in managing benefits costs and risks, including rising expenses and regulatory changes and how to manage them.
                    </Typography>
                  </Box>
                </Box>

                {/* Attract and retain talent */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-gray-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/5.svg"
                      alt="Talent icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Attract and retain talent
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Discover which benefits are most effective in attracting and retaining talent by understanding what employees value most.
                    </Typography>
                  </Box>
                </Box>

                {/* Drive value from your benefits */}
                <Box className="flex gap-6 items-start">
                  <Box className="w-24 h-24 bg-blue-50 p-4 rounded-lg flex-shrink-0">
                    <Image
                      src="/images/icons/6.svg"
                      alt="Value icon"
                      width={64}
                      height={64}
                    />
                  </Box>
                  <Box>
                    <Typography variant="h6" className="font-bold mb-2">
                      Drive value from your benefits
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Understand how to get more value and better outcomes from your existing benefit spend.
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h2" className="text-2xl font-bold mb-6">
                Participants of the 2025 Benefits Trends Survey will receive:
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-purple-600">•</span>
                  </ListItemIcon>
                  <ListItemText primary="Early access to the global findings" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-purple-600">•</span>
                  </ListItemIcon>
                  <ListItemText primary="A personalized scorecard to help benchmark against peers" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-purple-600">•</span>
                  </ListItemIcon>
                  <ListItemText primary="The opportunity to meet with WTW to talk through your results and identify areas of development" />
                </ListItem>
              </List>

              {/* Survey Scorecard Sample */}
              <Box className="my-8">
                <Image
                  src="/images/fil2.jpg"
                  alt="Sample of a Benefits Trends Survey scorecard"
                  width={800}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
                <Typography variant="caption" className="text-gray-600 block mt-2">
                  Sample of a Benefits Trends Survey scorecard
                </Typography>
              </Box>
               <hr></hr>
              <Typography variant="body1" className="text-gray-600 mb-8">
                Participation and results are complimentary.
              </Typography>

              <Typography variant="h2" className="text-2xl font-bold mb-6">
                How to take the 2025 Benefits Trends Survey
              </Typography>
              <Typography variant="body1" className="text-gray-700 mb-4">
                The questionnaire is intended primarily for benefits, compensation and benefits, HR and Total Rewards professionals. It will take about 30 minutes to complete and is available in the following languages.
              </Typography>

              <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-8">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Typography variant="h5" className="text-xl font-bold">
                        Available languages
                      </Typography>
                    
                    <List className="grid grid-cols-2 gap-2">
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Arabic</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Bahasa</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Chinese (<span className="text-black">Simplified</span>
                      <span> | </span>
                      <span className="text-black">Traditional</span>
                      <span>)</span></span></ListItemIcon>
                    <ListItemText>
                      
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Dutch</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• English ( <span className="text-black">UK</span>
                      <span> | </span>
                      <span className="text-black">US</span>
                      <span>)</span></span></ListItemIcon>
                    <ListItemText>
                      
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• French (<span className="text-black">Canada</span>
                      <span> | </span>
                      <span className="text-black">France</span>
                      <span>)</span></span></ListItemIcon>
                    <ListItemText>
                      
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• German</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Italian</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Japanese</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Korean</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Lithuania</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Polish</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Portuguese  ( <span className="text-black">Brazil</span>
                      <span> | </span>
                      <span className="text-black">Portugal</span>
                      <span>)</span></span></ListItemIcon>
                    <ListItemText>
                    
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Spanish (<span className="text-black">South America</span>
                      <span> | </span>
                      <span className="text-black">Spain</span>
                      <span>)</span></span></ListItemIcon>
                    <ListItemText>
                      
                    </ListItemText>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Thai</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Turkish</span></ListItemIcon>
                  </ListItem>
                  <ListItem>
                    <ListItemIcon><span className="text-black">• Vietnamese</span></ListItemIcon>
                  </ListItem>
                </List>
                </Box>
                  </Box>
                </Box>
              </Box>
              </Box>

              {/* Right column for Global Research and Contact */}
              <Box className="col-span-5">
                {/* Global Research Card */}
                <Box className="bg-white rounded-lg border-l-4 border-pink-500 border-t border-r border-b p-6 mb-12">
                  <Typography variant="overline" className="text-gray-600 block mb-4">
                    GLOBAL RESEARCH
                  </Typography>
                  <Typography variant="h3" className="text-3xl font-bold mb-4">
                    2025 Benefits Trends Survey
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Track trends around employers' benefit plans and understand how you can improve benefits outcomes
                  </Typography>
                  <Button
                    className="text-purple-600 hover:text-purple-700 p-0 normal-case font-bold"
                    endIcon={<span className="ml-2">→</span>}
                  >
                    Participate now
                  </Button>
                  
                </Box>

                {/* Contact Section */}
                <Box>
                  <Typography variant="h3" className="text-xl font-bold mb-6">
                    Contact
                  </Typography>
                  <Box className="space-y-8">
                    {/* First Contact */}
                    <Box className="flex gap-6">
                      <Avatar
                        src="/images/contact-avatar.jpg"
                        alt="Royston Tan"
                        sx={{ width: 80, height: 80 }}
                      />
                      <Box>
                        <Typography variant="h6" className="font-bold text-black-600 hover:text-black cursor-pointer">
                          Royston Tan
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 mb-3">
                          Head of Health and Benefits, Asia Pacific
                        </Typography>
                        <Button
                          startIcon={<span className="text-text-black">✉</span>}
                          className="text-black-600 hover:text-black normal-case p-0"
                        >
                          Email
                        </Button>
                      </Box>
                    </Box>

                    {/* Second Contact */}
                    <Box className="flex gap-6">
                      <Avatar
                        src="/images/contact-avatar-2.jpg"
                        alt="Jean Baptiste Kullmann"
                        sx={{ width: 80, height: 80 }}
                      />
                      <Box>
                        <Typography variant="h6" className="font-bold text-black-600 hover:text-black cursor-pointer">
                          Jean Baptiste Kullmann
                        </Typography>
                        <Typography variant="body2" className="text-gray-600 mb-3">
                          Commercial Director, Health and Benefits, France
                        </Typography>
                        <Box className="flex gap-6">
                          <Button
                            startIcon={<span className="text-text-black">✉</span>}
                            className="text-black-600 hover:text-text-black normal-case p-0"
                          >
                            Email
                          </Button>
                          <Button
                            startIcon={<span className="text-text-black">📞</span>}
                            className="text-black-600 hover:text-text-black normal-case p-0"
                          >
                            + 33 1 41 43 65 10
                          </Button>
                        </Box>
                      </Box>
                    </Box>

                    <Box className="flex gap-6 mb-8">
                <Avatar
                  src="/images/contacts/alexandra.jpg"
                  alt="Alexandra Lyner"
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="h6" className="font-bold text-black-600 hover:text-black cursor-pointer">
                    Alexandra Lyner
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-3">
                    Health and Benefits, Great Britain and Western Europe
                  </Typography>
                  <Box className="flex gap-6">
                    <Button
                      startIcon={<span className="text-text-black">✉</span>}
                      className="text-black-600 hover:text-black normal-case p-0"
                    >
                      Email
                    </Button>
                    <Button
                      startIcon={<span className="text-text-black">📞</span>}
                      className="text-black-600 hover:text-blacknormal-case p-0"
                    >
                      +41 44 804 20 72
                    </Button>
                  </Box>
                </Box>
              </Box>

              {/* Courtney Stubblefield */}
              <Box className="flex gap-6">
                <Avatar
                  src="/images/contacts/courtney.jpg"
                  alt="Courtney Stubblefield"
                  sx={{ width: 80, height: 80 }}
                />
                <Box>
                  <Typography variant="h6" className="font-bold text-black-600 hover:text-text-black cursor-pointer">
                    Courtney Stubblefield, ASA MAAA
                  </Typography>
                  <Typography variant="body2" className="text-gray-600 mb-3">
                    Health and Benefits, North America
                  </Typography>
                  <Button
                    startIcon={<span className="text-black">✉</span>}
                    className="text-black-600 hover:text-black normal-case p-0"
                  >
                    Email
                  </Button>
                </Box>
              </Box>
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* What Participants Will Receive Section */}


            {/* Capabilities Section */}
            <Box className="py-12">
              <Typography variant="h2" className="text-3xl font-bold mb-8">
                Capabilities related to benefits trends
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