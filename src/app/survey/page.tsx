'use client';

import './styles.css';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Avatar, Button } from '@mui/material';
import Image from 'next/image';
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
            backgroundColor: '#E3E1E6',
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
        <Box sx={{ height: { xs: '300px', sm: '400px', md: '500px' } }} />

        {/* Main Content with white background */}
        <Box className="bg-white">
          <Container maxWidth="lg" className="py-12">
            {/* Description Text and About Survey */}
            <Box 
              className="mb-12"
              sx={{
                display: 'grid',
                gridTemplateColumns: { xs: '1fr', md: '7fr 5fr' },
                gap: 4,
              }}
            >
              {/* Left column for text */}
              <Box>
                <Typography variant="body1" className="text-gray-700 mb-8" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  In an era defined by rapid technological advancements and shifting market dynamics, organizations must continuously adapt to maintain relevance and achieve long-term success. Change management has become a vital strategic tool that enables businesses to navigate transitions effectively, whether they involve restructuring, digital transformation, or cultural shifts. By implementing structured change processes and fostering a culture of adaptability, organizations can minimize resistance, improve employee engagement, and align their operations with evolving goals. As such, mastering the principles and practices of change management is essential for any organization seeking not only to survive but to thrive in a competitive and constantly changing environment.
                </Typography>

                {/* About Survey Card */}
                <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-9 mt-9">
                  <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <Box>
                      <Typography variant="h4" className="text-xl font-bold">
                        About this Organizational Development
                      </Typography>
                    </Box>
                    <Button className="min-w-0 p-2 text-purple-600 hover:bg-purple-50 rounded-full" sx={{ minWidth: 'unset' }}>
                      <span className="text-2xl">+</span>
                    </Button>
                  </Box>
                </Box>

                <Typography variant="body1" className="text-gray-700 mb-8" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                  Effective change management includes controlling people&apos;s attitudes, actions, and expectations in addition to putting new systems or procedures into place. By setting clear objectives, offering assistance, and encouraging a sense of belonging during the transition process, leaders can help their teams navigate through times of uncertainty. Employees are more inclined to accept new directions and positively impact the outcome when they get the rationale behind organizational changes and feel engaged in the process.              
                </Typography>
               <Box className="mt-6 mb-8">
            <Button
              variant="contained"
              className="bg-blue-300 hover:bg-blue-300 rounded-full px-8 py-3 normal-case"
              endIcon={<span>→</span>}
              sx={{ width: { xs: '100%', sm: 'auto' } }}
            >
              Participate now
            </Button>
          </Box>
              
                <Typography variant="h2" className="text-2xl font-bold my-8 mb-10">
                  Top reasons to participate in the 2025 Benefits Trends Survey:
                </Typography>

                <Box className="mt-6 mb-6" sx={{ display: 'grid', gap: 4 }}>
  {/* Each item */}
  {[
    {
      icon: '/images/icons/1.svg',
      title: 'Enhances Organizational Performance',
      description: 'Receive a best-in-class personalized scorecard to benchmark your organization&apos;s benefits strategies against your peers.',
      bgColor: 'bg-teal-50',
    },
    {
      icon: '/images/icons/2.svg',
      title: 'Facilitates Change Management',
      description: 'Gain insights into the business issues shaping benefits strategies, such as aligning with company objectives and market trends.',
      bgColor: 'bg-blue-50',
    },
    {
      icon: '/images/icons/3.svg',
      title: 'Promotes Continuous Improvement',
      description: 'Assess how well your current benefits strategy meets employee needs and addresses challenges like flexible work and talent competition.',
      bgColor: 'bg-purple-50',
    },
    {
      icon: '/images/icons/4.svg',
      title: 'Strengthens Leadership and Employee Engagement',
      description: 'Identify the most pressing challenges in managing benefits costs and risks, including rising expenses and regulatory changes and how to manage them.',
      bgColor: 'bg-teal-50',
    },
    {
      icon: '/images/icons/5.svg',
      title: 'Aligns Organizational Goals with Employee Goals',
      description: 'Discover which benefits are most effective in attracting and retaining talent by understanding what employees value most.',
      bgColor: 'bg-gray-50',
    },
    {
      icon: '/images/icons/6.svg',
      title: 'Improves Decision-Making and Problem-Solving',
      description: 'Understand how to get more value and better outcomes from your existing benefit spend.',
      bgColor: 'bg-blue-50',
    },
  ].map((item, idx) => (
    <Box key={idx} className={`flex gap-6 items-start`}>
      <Box className={`w-24 h-24 ${item.bgColor} p-4 rounded-lg flex-shrink-0`} sx={{ minWidth: '64px', minHeight: '64px' }}>
        <Image
          src={item.icon}
          alt={`${item.title} icon`}
          width={64}
          height={64}
          unoptimized
        />
      </Box>
      <Box sx={{ flex: 1 }}>
        <Typography variant="h6" className="font-bold mb-2">
          {item.title}
        </Typography>
        <Typography variant="body1" className="text-gray-600">
          {item.description}
        </Typography>
      </Box>
    </Box>
  ))}
</Box>


                <Typography variant="h3" className="text-2xl font-bold mt-40 mb-6">
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
                    unoptimized
                  />
                  
                </Box>
                
                <hr />

              <Box className="bg-white shadow-sm rounded-lg border border-gray-200 p-6 mb-8">
  <Box
    sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'flex-start',
      flexDirection: { xs: 'column', md: 'row' },
      gap: 2,
      flexWrap: 'wrap',
    }}
  >
    <Box sx={{ flex: 1, minWidth: '250px' }}>
      <Typography
        variant="h5"
        className="text-xl font-bold text-blue-300 mb-2"
      >
        Available languages
      </Typography>

      <List
        sx={{
          p: 0,
          display: 'grid',
          gridTemplateColumns: {
            xs: 'repeat(1, 1fr)',
            sm: 'repeat(2, 1fr)',
            md: 'repeat(3, 1fr)',
          },
          gap: 1.5,
        }}
      >
        {[
          'Arabic',
          'Bahasa',
          'Chinese (Simplified | Traditional)',
          'Dutch',
          'English (UK | US)',
          'French (Canada | France)',
          'German',
          'Italian',
          'Japanese',
          'Korean',
          'Lithuania',
          'Polish',
          'Portuguese (Brazil | Portugal)',
          'Spanish (South America | Spain)',
          'Thai',
          'Turkish',
          'Vietnamese',
        ].map((lang, idx) => (
          <ListItem key={idx} sx={{ p: 0 }}>
            <ListItemIcon sx={{ minWidth: 'auto', pr: 1 }}>
              <span className="text-black">•</span>
            </ListItemIcon>
            <ListItemText primary={lang} />
          </ListItem>
        ))}
      </List>
    </Box>
  </Box>
</Box>

              </Box>

              {/* Right column for Global Research and Contact */}
              <Box>
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
                    Track trends around employers&apos; benefit plans and understand how you can improve benefits outcomes
                  </Typography>
                  <Button
                   
                    endIcon={<span className="ml-2">→</span>}
                    fullWidth
                    sx={{ maxWidth: { xs: '100%', sm: 'auto' } }}
                  >
                    Participate now
                  </Button>
                </Box>

                {/* Contact Section */}
                <Box>
                  <Typography variant="h3" className="text-xl font-bold mb-6 ">
                    Contact
                  </Typography>
                  <Box className="space-y-8 mt-6">
                    {/* Contact Person Sample */}
                    {[
                      {
                        src: '/images/contact-avatar.jpg',
                        alt: 'Royston Tan',
                        name: 'Jhon Doe',
                        title: 'Head of Health and Benefits, Asia Pacific',
                        email: true,
                        phone: false,
                        emailLabel: 'Email',
                        phoneNumber: '',
                      },
                    
                     
                     
                    ].map((contact, i) => (
                      <Box key={i} className="flex gap-6 flex-col sm:flex-row items-start sm:items-center">
                        <Avatar
                          src={contact.src}
                          alt={contact.alt}
                          sx={{ width: 80, height: 80, flexShrink: 0 }}
                        />
                        <Box sx={{ marginTop: { xs: '12px', sm: '0' } }}>
                          <Typography variant="h6" className="font-bold text-black-600 hover:text-black cursor-pointer">
                            {contact.name}
                          </Typography>
                          <Typography variant="body2" className="text-gray-600 mb-3">
                            {contact.title}
                          </Typography>
                          <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                            
                            
                          </Box>
                        </Box>
                      </Box>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>

            {/* Capabilities Section */}
           <Box className="py-16 px-4 sm:px-8 lg:px-12 w-full bg-gray-50">
  <Typography variant="h2" className="text-3xl font-bold mb-12 text-center">
    Capabilities related to Organizational Development
  </Typography>

  <Box className="relative border-l-4 border-blue-200 pl-10 pr-4 w-full space-y-10">
    {[
      {
        title: 'Strategic Planning Capability',
        description:
          'The ability to set clear goals, assess internal and external environments, and align organizational initiatives with long-term objectives.'
      },
      {
        title: 'Change Management Capability',
        description:
          'Proficiency in planning, implementing, and supporting change initiatives while managing employee engagement and minimizing resistance.'
      },
      {
        title: 'Leadership Development',
        description:
          'Strengthening leadership at all levels to guide teams, make informed decisions, and champion continuous improvement and innovation.'
      },
      {
        title: 'Talent and Performance Management',
        description:
          'Building systems that recruit, retain, and develop employees, while also managing performance to meet organizational goals.'
      },
      {
        title: 'Communication and Collaboration',
        description:
          'Enhancing open communication channels and fostering teamwork to support transparency, alignment, and shared purpose across departments.'
      },
      {
        title: 'Organizational Learning and Innovation',
        description:
          'Promoting a learning culture that encourages knowledge sharing, experimentation, and adaptation in response to challenges and opportunities.'
      }
    ].map((item, i) => (
      <Box key={i} className="relative w-full">
        {/* Step Number Circle */}
        <Box className="absolute -left-[42px] top-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
          {i + 1}
        </Box>

        {/* Content Box */}
        <Box className="bg-white w-full p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
          <Typography variant="h6" className="text-xl font-semibold mb-2">
            {item.title}
          </Typography>
          <Typography variant="body1" className="text-gray-600">
            {item.description}
          </Typography>
        </Box>
      </Box>
    ))}
  </Box>
</Box>


          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

