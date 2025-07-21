'use client';

import './styles.css';
import { Box, Typography, Container, Avatar, Button } from '@mui/material';
import Header from '@/components/Header';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Footer from '@/components/Footer';

export default function BuildingHrCapability() {
  return (
    <>
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
            backgroundImage: 'url(/images/HR1.png)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            zIndex: -1,
          },
        }}
      >
        <Box
          sx={{
            position: 'sticky',
            top: 0,
            zIndex: 1000,
            backgroundColor: 'white',
            borderBottom: '1px solid #e5e7eb',
          }}
        >
          <Header />
        </Box>

        {/* Hero Section */}
        <Box
          className="pt-12 pb-24"
          sx={{
            backgroundColor: '#d6d1d9',
            minHeight: { xs: '220px', sm: '250px', md: '300px' },
            display: 'flex',
            alignItems: 'center',
            paddingLeft: { xs: 2, sm: 4, md: 0 },
            paddingRight: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Container maxWidth="lg" className="px-4 md:px-0">
            <Typography
              variant="h3"
              className="text-blue-400 block mb-4 text-sm md:text-base"
              sx={{ letterSpacing: '0.1em' }}
            >
             Building HR Capability
            </Typography>
           <Typography
               variant="h6"
               className="text-blue-400 mb-6"
               sx={{ fontSize: { xs: '1rem', sm: '1.125rem' }, lineHeight: 1.5 }}
             >
               We equip people managers and HR leaders with the skills, systems, and tools needed to engage teams, improve performance, and sustain employee growth.
             </Typography>
             <Button
              variant="contained"
              className="bg-[#E04A9B] hover:bg-pink-600 normal-case font-bold rounded-full px-6 md:px-8 py-2 md:py-3 text-base md:text-lg shadow-none"
              style={{ background: '#00aaff', borderRadius: '9999px', fontWeight: 700, marginTop: 20, color: 'white' }}
              endIcon={<ArrowForwardIcon />}
              onClick={() => window.location.href = '/contact-us'}
            >
              Contact Us
            </Button>
          </Container>
        </Box>

        {/* Spacer for background */}
        <Box sx={{ height: '500px' }} />

        {/* Main Content */}
        <Box className="bg-white">
          <Container
            maxWidth="lg"
            className="px-4 md:px-0 py-12"
            sx={{
              paddingLeft: { xs: 2, sm: 4, md: 0 },
              paddingRight: { xs: 2, sm: 4, md: 0 },
              maxWidth: { xs: '100%', sm: '100%', md: '960px', lg: '1280px' },
            }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
              {/* Main Content */}
              <div className="lg:col-span-8">
                {/* Enhanced Sectioned Content */}
                <Box className="space-y-8">
                  {/* How we can help you */}
                  <Box className="bg-white shadow-md rounded-xl p-6 border-l-4 border-blue-400">
                    <Typography variant="h4" className="font-bold mb-2 text-blue-700">How we can help you</Typography>
                    <Typography variant="body1" className="text-gray-700">
                      We help organizations build robust HR capabilities to drive business performance and employee engagement. Our team supports you in developing HR strategies, upskilling your HR team, and implementing best practices for sustainable growth.
                    </Typography>
                  </Box>
                  {/* Our Services */}
                  <Box className="bg-blue-50 shadow rounded-xl p-6">
                    <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Services</Typography>
                    <Typography variant="body1" className="mb-2">We offer a comprehensive suite of HR capability-building services, including:</Typography>
                    <ul className="list-none pl-0 mb-0">
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> HR Strategy Development</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Competency Frameworks</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Talent Management Systems</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> HR Technology Implementation</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">✔</span> Learning & Development Programs</li>
                    </ul>
                  </Box>
                  {/* Common challenges of clients */}
                  <Box className="bg-white shadow rounded-xl p-6 border-l-4 border-blue-400">
                    <Typography variant="h4" className="font-bold mb-2 text-blue-700">Common Challenges Our Clients Face</Typography>
                    <ul className="list-none pl-0 mb-0">
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Adapting to evolving HR technologies</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Aligning HR with business strategy</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Upskilling HR teams for modern challenges</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Managing change and transformation</li>
                      <li className="flex items-center mb-2"><span className="text-blue-500 mr-2">•</span> Measuring HR impact and ROI</li>
                    </ul>
                  </Box>
                  {/* Our Process */}
                  <Box className="bg-blue-50 shadow rounded-xl p-6">
                    <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Process</Typography>
                    <div className="flex flex-col md:flex-row gap-4">
                      {["Assess HR needs and goals", "Design tailored solutions", "Implement with expert support", "Measure and optimize results"].map((step, i) => (
                        <div key={i} className="flex items-center">
                          <div className="w-8 h-8 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold mr-2">{i+1}</div>
                          <Typography>{step}</Typography>
                        </div>
                      ))}
                    </div>
                  </Box>
                </Box>
              </div>

              {/* Sidebar: Our Impact and Book a Consultation */}
              <div
                className="lg:col-span-4"
                style={{
                  position: 'static',
                  top: 'auto',
                  marginTop: '32px',
                }}
              >
                <Box
                  className="bg-gray-50 p-6 rounded-lg flex flex-col gap-8 items-center"
                  sx={{
                    position: { xs: 'static', lg: 'sticky' },
                    top: { xs: 'auto', lg: 24 },
                    maxWidth: '100%',
                    boxShadow: { xs: 'none', lg: '0 4px 12px rgba(0,0,0,0.1)' },
                  }}
                >
                  {/* Our Impact */}
                  <Box className="bg-gradient-to-r from-blue-100 to-blue-300 rounded-xl p-6 shadow w-full">
                    <Typography variant="h4" className="font-bold mb-2 text-blue-700">Our Impact</Typography>
                    <Typography variant="body1" className="text-gray-800">
                      Our clients achieve stronger HR functions, improved talent outcomes, and greater alignment between people and business goals. We deliver measurable results that support your organization’s long-term success.
                    </Typography>
                  </Box>
                  {/* Book a Consultation Button */}
                  {/* <button
                    className="bg-gradient-to-r from-blue-500 to-blue-700 text-white font-bold py-3 px-8 rounded-full shadow-lg text-lg hover:from-blue-600 hover:to-blue-800 transition-colors w-full"
                  >
                    Book a Consultation
                  </button> */}
                  <Box>
                  <Typography variant="h3" className="text-xl font-bold mb-6 ">
                    Contact
                  </Typography>
                  <Box className="space-y-8 mt-6">
                    {/* Contact Person Sample */}
                    {[
                      {
                        src: '/images/contact-avatar.jpg',
                        alt: 'Sandy Togonon',
                        name: 'Sandy Togonon',
                        title: 'Managing Director of Alliance Atlantic',
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
              </div>
            </div>

            {/* Related Contents */}
            {/* <Box className="py-12" sx={{ paddingLeft: { xs: 2, sm: 4, md: 0 }, paddingRight: { xs: 2, sm: 4, md: 0 } }}>
              <Typography variant="h2" className="text-3xl font-bold mb-8" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>
                Related Contents
              </Typography> */}
                {/* <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {[
                    'Talent Acquisition',
                    'Performance Management',
                    'HR Analytics',
                    'Employee Engagement',
                    'Learning and Development',
                    'Change Management',
                  ].map((title, i) => (
                    <Box
                      key={i}
                      className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow"
                    >
                      <Typography variant="h5" className="text-xl font-bold mb-4" sx={{ fontSize: { xs: '1.125rem', sm: '1.25rem' } }}>
                        {title}
                      </Typography>
                      <Typography variant="body1" className="text-gray-600 mb-8" sx={{ fontSize: { xs: '0.9rem', sm: '1rem' } }}>
                        Description of {title.toLowerCase()} strategies.
                      </Typography>
                      <Box className="absolute bottom-6 right-6">
                        <span className="text-[#00aaff] text-xl">→</span>
                      </Box>
                    </Box>
                  ))}
                </Box> */}
              {/* </Box> */}
          </Container>
        </Box>
      </Box>
      <Footer />
    </>
  );
}

