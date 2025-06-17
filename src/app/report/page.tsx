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
          borderBottom: '1px solid #e5e7eb',
        }}
      >
        <Header />
      </Box>

      <Box
        sx={{
          minHeight: '200vh',
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
            zIndex: -1,
          },
        }}
      >
        {/* Hero Section */}
        <Box
          className="pt-12 pb-24"
          sx={{
            backgroundColor: '#d6d1d9',
            minHeight: '200px',
            display: 'flex',
            alignItems: 'center',
            paddingLeft: { xs: 2, sm: 4, md: 0 },
            paddingRight: { xs: 2, sm: 4, md: 0 },
          }}
        >
          <Container maxWidth="lg" className="px-4 md:px-0">
            <Typography
              variant="overline"
              className="text-blue-500 block mb-4 text-sm md:text-base"
              sx={{ letterSpacing: '0.1em' }}
            >
              REPORT | Building HR Capability
            </Typography>
           <Typography
  variant="h2"
  className="text-blue-400 text-xl md:text-5xl font-bold mb-6"
  sx={{
    fontSize: {
      xs: '2rem',     // Mobile
      sm: '2.75rem',  // Small screens
      md: '3.5rem',   // Medium screens
      lg: '4.25rem',  // Large screens
      xl: '6rem',     // Extra large screens (optional)
    },
    lineHeight: 1.2,
  }}
>
  Enhancing Human Resource Competencies
</Typography>

          
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
                <Box className="prose max-w-none mb-12">
                  <Typography variant="body1" className="text-lg mb-8" sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}>
                    Enhancing Human Resource Competencies means developing the skills and knowledge HR professionals
                    need to support business goals effectively. This includes improving areas like recruitment,
                    performance management, and HR technology.
                  </Typography>
                </Box>

                {/* Sections */}
                {[
  {
    title: 'Developing Core HR Skills for Modern Workplaces',
    content:
      "Equipping HR professionals with essential skills in fast-changing work environments. Key Focus Areas:",
    image: '/images/fil4.jpg',
    list: [
      'Foundational HR Knowledge',
      'Tech and Data Proficiency',
      'Communication and Emotional Intelligence',
      'Change Management and Agility',
    ],
  },
  {
    title: 'Leveraging Technology in HR Practices',
    content:
      'Using digital tools and systems to improve recruitment, performance management, and engagement.',
    image: '/images/fil2.jpg',
    list: [],
  },
  {
    title: 'Building Competencies for Talent Management',
    content: 'Key Areas:',
    image: '',
    list: [
      'Talent Acquisition – Hiring the right people',
      'Performance Management – Tracking goals',
      'Succession Planning – Preparing leaders',
      'Employee Development – Growth support',
    ],
  },
  {
    title: 'Strengthening Communication and Influence in HR',
    content: 'Improving how HR shares ideas and builds trust. Key Focus Areas:',
    image: '',
    list: [
      'Active Listening',
      'Clear and Persuasive Messaging',
      'Building Trust with Stakeholders',
      'Influencing Organizational Change',
    ],
  },
].map((section, index) => (
  <Box
    key={index}
    className="mb-16 px-4 py-6 bg-white rounded-xl shadow-md border border-gray-200"
  >
    <Typography
      variant="h2"
      className="text-2xl md:text-3xl font-bold mb-4 text-blue-900"
      sx={{ fontSize: { xs: '1.6rem', sm: '2rem', md: '2.25rem' } }}
    >
      {section.title}
    </Typography>

    <Typography
      variant="body1"
      className="mb-4 text-gray-700 leading-relaxed"
      sx={{ fontSize: { xs: '1rem', sm: '1.125rem' } }}
    >
      {section.content}
    </Typography>

    {section.list.length > 0 && (
      <ul className="list-disc pl-6 mb-6 text-gray-800 space-y-2 text-[1rem]">
        {section.list.map((item, idx) => (
          <li key={idx}>{item}</li>
        ))}
      </ul>
    )}

    {section.image && (
      <Box
        className="relative w-full aspect-[16/9] mb-4 overflow-hidden"
        sx={{ borderRadius: { xs: 2, sm: 3 } }}
      >
        <Image
          src={section.image}
          alt="Visual"
          fill
          className="rounded-lg object-cover"
          sizes="(max-width: 600px) 100vw, 600px"
        />
      </Box>
    )}
  </Box>
))}


                {/* Outlook */}
                <Box className="mb-12">
  <Typography
    variant="h2"
    className="text-2xl font-bold mb-6"
    sx={{ fontSize: { xs: '1.6rem', sm: '2rem' } }}
  >
    Outlook
  </Typography>

  <div className="grid gap-4 sm:grid-cols-2">
    {[
      {
        text: 'HR is becoming more strategic',
        icon: '📈',
      },
      {
        text: 'Continuous learning is essential',
        icon: '📚',
      },
      {
        text: 'Tech and data skills are key',
        icon: '💻',
      },
      {
        text: 'Soft skills like communication matter more',
        icon: '🗣️',
      },
    ].map((item, index) => (
      <div
        key={index}
        className="flex items-start gap-3 bg-blue-50 border border-blue-200 rounded-lg p-4 shadow-sm hover:shadow-md transition-shadow"
      >
        <span className="text-2xl">{item.icon}</span>
        <p className="text-gray-800 text-base">{item.text}</p>
      </div>
    ))}
  </div>
</Box>


                {/* References */}
                <Box className="mb-12">
                <Typography
                  variant="h2"
                  className="font-bold mb-6"
                  sx={{ fontSize: { xs: '1.6rem', sm: '2rem' } }}
                >
                  References
                </Typography>
                {/* Responsive grid layout with enhanced card design */}
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-4">
  {[
    'Ulrich, D. et al. (2008)',
    'SHRM (2024)',
    'CIPD (2023)',
    'World Economic Forum (2023)',
    'Harvard Business Review (2021)',
    'Academy of Management Perspectives (2015)',
  ].map((ref, i) => (
    <div
      key={i}
      className="bg-[#00aaff] text-white px-4 py-3 rounded-lg text-sm shadow-md hover:shadow-lg transition-shadow transform hover:scale-105"
    >
      <div className="flex items-center">
        {/* Optional: Add an icon here */}
        
        <span>{ref}</span>
      </div>
    </div>
  ))}
</div>


              </Box>

              </div>

              {/* Sidebar Form */}
              <div
                className="lg:col-span-4"
                style={{
                  position: 'static',
                  top: 'auto',
                  marginTop: '32px',
                }}
              >
                <Box
                  className="bg-gray-50 p-6 rounded-lg"
                  sx={{
                    position: { xs: 'static', lg: 'sticky' },
                    top: { xs: 'auto', lg: 24 },
                    maxWidth: '100%',
                    boxShadow: { xs: 'none', lg: '0 4px 12px rgba(0,0,0,0.1)' },
                  }}
                >
                  <Typography variant="h5" className="text-xl font-bold mb-6" sx={{ fontSize: { xs: '1.25rem', sm: '1.375rem' } }}>
                    Complete the form to download the report
                  </Typography>
                  <form className="space-y-4">
                    {[
                      { label: 'First Name', type: 'text' },
                      { label: 'Last Name', type: 'text' },
                      { label: 'Business Email', type: 'email' },
                      { label: 'Company Name', type: 'text' },
                      { label: 'Job Title', type: 'text' },
                    ].map((field, i) => (
                      <div key={i}>
                        <label className="block text-sm font-medium text-gray-700 mb-1">
                          {field.label}:<span className="text-red-500">*</span>
                        </label>
                        <input
                          type={field.type}
                          placeholder={field.label}
                          className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                      </div>
                    ))}
                    
                    <Typography variant="body2" className="text-sm text-gray-600" mb={4}>
                      Read our global{' '}
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
                      Protected by reCAPTCHA and Google{' '}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Privacy Policy
                      </Link>{' '}
                      and{' '}
                      <Link href="#" className="text-blue-600 hover:underline">
                        Terms of Service
                      </Link>
                      .
                    </Typography>
                  </form>
                </Box>
              </div>
            </div>

            {/* Related Contents */}
            <Box className="py-12" sx={{ paddingLeft: { xs: 2, sm: 4, md: 0 }, paddingRight: { xs: 2, sm: 4, md: 0 } }}>
              <Typography variant="h2" className="text-3xl font-bold mb-8" sx={{ fontSize: { xs: '1.8rem', sm: '2.5rem' } }}>
                Related Contents
              </Typography>
              <Box className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
              </Box>
            </Box>
          </Container>
        </Box>
      </Box>

      <Footer />
    </Box>
  );
}

