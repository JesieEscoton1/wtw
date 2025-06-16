'use client';

import './styles.css';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Avatar, Button } from '@mui/material';
import Image from 'next/image';
import { faChartLine, faUsers, faShieldAlt, faChartBar, faClock, faCamera } from '@fortawesome/free-solid-svg-icons';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function SurveyPage() {
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
            backgroundImage: 'url(/images/OD1.png)',
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
              className="text-blue-400 block mb-4"
              sx={{ letterSpacing: '0.1em' }}
            >
             Organizational Development
            </Typography>
            
            <Box className="max-w-2xl">
              <Typography variant="h3" className="text-2xl mb-4 text-gray-900">
                Adapting to Evolve: The Role of Change Management in Modern Organizational Success
              </Typography>
              <Typography variant="body1" className="text-sm mb-2 text-gray-900">
                June 13, 2025
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
                  In an era defined by rapid technological advancements and shifting market dynamics, organizations must continuously adapt to maintain relevance and achieve long-term success. Change management has become a vital strategic tool that enables businesses to navigate transitions effectively, whether they involve restructuring, digital transformation, or cultural shifts. By implementing structured change processes and fostering a culture of adaptability, organizations can minimize resistance, improve employee engagement, and align their operations with evolving goals. As such, mastering the principles and practices of change management is essential for any organization seeking not only to survive but to thrive in a competitive and constantly changing environment.
                </Typography>

                {/* About Survey Card */}
                <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-8">
                  <Box className="flex justify-between items-center">
                    <Box>
                      
                      <Typography variant="h4" className="text-xl font-bold">
                        About this Organizational Development
                      </Typography>
                    </Box>
                    <Button className="min-w-0 p-2 text-purple-600 hover:bg-purple-50 rounded-full">
                      <span className="text-2xl">+</span>
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body1" className="text-gray-700 mb-8">
                  Effective change management includes controlling people&apos;s attitudes, actions, and expectations in addition to putting new systems or procedures into place. By setting clear objectives, offering assistance, and encouraging a sense of belonging during the transition process, leaders can help their teams navigate through times of uncertainty. Employees are more inclined to accept new directions and positively impact the outcome when they get the rationale behind organizational changes and feel engaged in the process.              
                </Typography>

                <Button
                  variant="contained"
                  className="bg-blue-300 hover:bg-blue-300 rounded-full px-8 py-3 normal-case"
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
                      Enhances Organizational Performance
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Receive a best-in-class personalized scorecard to benchmark your organization&apos;s benefits strategies against your peers.
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
                      Facilitates Change Management
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
                      Promotes Continuous Improvement
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
                       Strengthens Leadership and Employee Engagement
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
                      Aligns Organizational Goals with Employee Goals
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
                      Improves Decision-Making and Problem-Solving
                    </Typography>
                    <Typography variant="body1" className="text-gray-600">
                      Understand how to get more value and better outcomes from your existing benefit spend.
                    </Typography>
                  </Box>
                </Box>

                <Typography variant="h2" className="text-2xl font-bold mb-6">
                Driving Growth from Within: The Impact of Organizational Development on Business Success
              </Typography>
              <List>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-blue-300">•</span>
                  </ListItemIcon>
                  <ListItemText primary="Improves Efficiency and Productivity" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-blue-300">•</span>
                  </ListItemIcon>
                  <ListItemText primary="Supports Effective Change Management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <span className="text-blue-300">•</span>
                  </ListItemIcon>
                  <ListItemText primary="Fosters a Positive Organizational Culture" />
                </ListItem>
              </List>

              {/* Survey Scorecard Sample */}
              <Box className="my-8">
                <Image
                  src="/images/OD2.png"
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
              
              <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-8">
                  <Box className="flex justify-between items-center">
                    <Box>
                      <Typography variant="h5" className="text-xl font-bold text-blue-300">
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
                <Box className="bg-white rounded-lg border-l-4 border-blue-300 border-t border-r border-b p-6 mb-12">
                  <Typography variant="overline" className="text-gray-600 block mb-4">
                    GLOBAL RESEARCH
                  </Typography>
                  <Typography variant="h3" className="text-3xl font-bold mb-4">
                    2025 Benefits Trends Survey
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Track trends around employers&apos; benefit plans and understand how you can improve benefits outcomes
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
                Capabilities related to Organizational Development
              </Typography>
              
              <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Health and Benefits */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                   Strategic Planning Capability
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    The ability to set clear goals, assess internal and external environments, and align organizational initiatives with long-term objectives.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Wellbeing */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                     Change Management Capability
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                   Proficiency in planning, implementing, and supporting change initiatives while managing employee engagement and minimizing resistance.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Global Benefits Management */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                   Leadership Development
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Strengthening leadership at all levels to guide teams, make informed decisions, and champion continuous improvement and innovation.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300  text-xl">→</span>
                  </Box>
                </Box>

                {/* Employee Financial Resilience */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                     Talent and Performance Management
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Building systems that recruit, retain, and develop employees, while also managing performance to meet organizational goals.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300  text-xl">→</span>
                  </Box>
                </Box>

                {/* Diversity, Equity and Inclusion */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                   Communication and Collaboration
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Enhancing open communication channels and fostering teamwork to support transparency, alignment, and shared purpose across departments.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300  text-xl">→</span>
                  </Box>
                </Box>

                {/* Retirement */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Organizational Learning and Innovation
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Promoting a learning culture that encourages knowledge sharing, experimentation, and adaptation in response to challenges and opportunities.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
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