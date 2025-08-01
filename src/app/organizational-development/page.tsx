'use client';

import './styles.css';
import { Box, Typography, Container, List, ListItem, ListItemIcon, ListItemText, Button } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function OrganizationalDevelopment() {
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
            backgroundColor: '#00aaff',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center'
          }}
        >
          <Container maxWidth="lg">
            <Typography 
              variant="h3" 
              className="text-white block mb-4"
              fontFamily={'serif'}
              fontWeight={'800'}
              sx={{ letterSpacing: '0.1em' }}
            >
             Organizational Development
            </Typography>
            
            <Box className="max-w-2xl">
              <Typography variant="h6" className="text-2xl mb-4 text-white">
              We help strengthen your organization through structure reviews, culture development, competency frameworks, and strategic planning — all designed to build resilience and readiness for growth.
              </Typography>
            </Box>
            <Button
              variant="contained"
              className="bg-[#E04A9B] hover:bg-pink-600 normal-case font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg shadow-none"
              style={{ background: 'white', borderRadius: '9999px', fontWeight: 700, marginTop: 20, color: '#00aaff' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = '/contact-us'}
            >
              Contact Us
            </Button>
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

              {/* Left column for new content */}
              <Box className="space-y-8">
                {/* How we can help you */}
                <Box className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-400">
                  <Typography variant="h4" className="font-bold mb-2 text-blue-700">How we can help you</Typography>
                  <Typography variant="body1" className="text-gray-700">
                    We partner with organizations to drive sustainable growth and transformation through tailored organizational development solutions. Our team helps you navigate change, build leadership capability, and foster a culture of continuous improvement.
                  </Typography>
                </Box>

                {/* Our Services */}
                <Box className="bg-blue-50 shadow rounded-xl p-6">
                  <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Services</Typography>
                  <Typography variant="body1" className="mb-2">We offer a comprehensive suite of services, including:</Typography>
                  <List>
                    {["Change Management", "Leadership Development", "Talent and Performance Management", "Strategic Planning", "Culture and Engagement Initiatives"].map((service, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <CheckCircleIcon sx={{ color: '#3b82f6' }} /> {/* Tailwind blue-500 */}
                        </ListItemIcon>
                        <ListItemText primary={service} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Common Challenges */}
                <Box className="bg-white shadow rounded-xl p-6 border-l-4 border-blue-400">
                  <Typography variant="h4" className="font-bold mb-2 text-blue-700">Common Challenges Our Clients Face</Typography>
                  <List>
                    {["Adapting to rapid market and technology changes", "Managing resistance to organizational change", "Aligning leadership and teams with new strategies", "Building a culture of engagement and accountability", "Developing future-ready leaders"].map((challenge, i) => (
                      <ListItem key={i}>
                        <ListItemIcon>
                          <ArrowForwardIosIcon color="primary" fontSize="small" />
                        </ListItemIcon>
                        <ListItemText primary={challenge} />
                      </ListItem>
                    ))}
                  </List>
                </Box>

                {/* Our Process */}
                <Box className="bg-blue-50 shadow rounded-xl p-6">
                  <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Process</Typography>
                  <Box className="flex flex-col md:flex-row gap-4">
                    {[
                      "Assess organizational needs and goals",
                      "Co-create a tailored development plan",
                      "Implement solutions with ongoing support",
                      "Measure impact and refine strategies"
                    ].map((step, i) => (
                      <Box key={i} className="flex items-center mb-2 md:mb-0">
                        <Box className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-2">{i+1}</Box>
                        <Typography>{step}</Typography>
                      </Box>
                    ))}
                  </Box>
                </Box>

               
              </Box>

              {/* Right column for Global Research and Contact */}
              <Box>
                {/* Our Impact */}
                <Box className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl p-6 shadow">
                  <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Impact</Typography>
                  <Typography variant="body1" className="text-gray-800">
                    Our clients experience measurable improvements in employee engagement, leadership effectiveness, and organizational agility. We are committed to delivering results that drive long-term business success.
                  </Typography>
                </Box>

                {/* Call to Action */}
                {/* <Box className="flex justify-center mt-6">
                  <Button
                    variant="contained"
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg"
                    size="large"
                  >
                    Book a Consultation
                  </Button>
                </Box> */}
                {/* Contact Section */}
               
              </Box>
            </Box>

            {/* Capabilities Section */}
           {/* <Box className="py-16 px-4 sm:px-8 lg:px-12 w-full bg-gray-50">
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
        {/* <Box className="absolute -left-[42px] top-2 w-8 h-8 rounded-full bg-blue-500 text-white flex items-center justify-center font-bold text-sm">
          {i + 1}
        </Box> */} 

        {/* Content Box */}
        {/* <Box className="bg-white w-full p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
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
</Box> */}


          </Container>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

