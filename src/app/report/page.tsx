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
              className="text-blue-500 block mb-4"
              sx={{ letterSpacing: '0.1em' }}
            >
              REPORT | Building HR Capability
            </Typography>
            <Typography variant="h2" className="text-blue-400 text-5xl font-bold mb-6">
             Enhancing Human Resource Competencies
            </Typography>
            <Box className="max-w-2xl">
             
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
                   Enhancing Human Resource Competencies means developing the skills and knowledge HR professionals need to support business goals effectively. This includes improving areas like recruitment, performance management, and HR technology. By building these capabilities, HR can become a strategic partner, driving employee engagement, growth, and organizational success.
                  </Typography>
                </Box>

                {/* Storms Section */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Developing Core HR Skills for Modern Workplaces
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Developing Core HR Skills for Modern Workplaces is about equipping HR professionals with the essential capabilities needed to thrive in today&#39;s fast-changing work environments. As organizations evolve, HR must move beyond traditional tasks and adopt a more strategic, tech-savvy, and people-focused approach. Key Focus Areas:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">Foundational HR Knowledge: Strengthen skills in areas like recruitment, employee relations, and compliance.</li>
                    <li className="mb-2">Tech and Data Proficiency: Use HR software and analytics to improve decision-making and efficiency.</li>
                    <li className="mb-2">Communication and Emotional Intelligence: Build strong relationships and support a positive work culture.</li>
                    <li className="mb-2">Change Management and Agility: Adapt quickly to organizational shifts and lead through transformation.</li>
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
                    Leveraging Technology in HR Practices
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Leveraging Technology in HR Practices means using digital tools and systems to improve HR processes like recruitment, performance management, and employee engagement, making them more efficient, data-driven, and user-friendly.
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
                    Building Competencies for Talent Management
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Building Competencies for Talent Management focuses on developing the skills HR professionals need to attract, develop, and retain top talent effectively. Key Areas:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2"><b>Talent Acquisition</b> – Hiring the right people for the right roles</li>
                    <li className="mb-2"><b>Performance Management</b> – Setting goals and tracking progress</li>
                    <li className="mb-2"><b>Succession Planning </b>– Preparing future leaders</li>
                    <li className="mb-2"><b>Employee Development</b> – Fostering growth through training and support</li>
                  </ul>
                </Box>

                {/* Interconnected Risks */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Strengthening Communication and Influence in HR
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Strengthening Communication and Influence in HR means improving how HR professionals share ideas, build trust, and guide positive change across the organization. Key Focus Areas:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2"><b>Active Listening</b> – Understanding employee needs and concerns</li>
                    <li className="mb-2"><b>Clear and Persuasive Messaging</b> – Communicating policies and initiatives effectively</li>
                    <li className="mb-2"><b>Building Trust with Stakeholders</b> – Establishing credibility and reliability</li>
                    <li className="mb-2"><b>Influencing Organizational Change</b> – Guiding leaders and teams through HR-driven initiatives</li>
                  </ul>
                </Box>

                {/* Outlook Section */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    Outlook
                  </Typography>
                  <Typography variant="body1" className="mb-6">
                    Outlook of Enhancing HR Competencies:
                  </Typography>
                  <ul className="list-disc pl-6 mb-6">
                    <li className="mb-2">HR is becoming more strategic</li>
                    <li className="mb-2">Continuous learning is essential</li>
                    <li className="mb-2">Tech and data skills are key</li>
                    <li className="mb-2">Soft skills like communication matter more</li>
                  </ul>
                </Box>

                {/* References */}
                <Box className="mb-12">
                  <Typography variant="h2" className="text-2xl font-bold mb-6">
                    References
                  </Typography>
                  <div className="flex flex-wrap gap-2">
                    {[
                      ' RUlrich, D. et al. (2008)',
                      'SHRM (2024)',
                      'CIPD (2023)',
                      'World Economic Forum (2023)',
                      'Harvard Business Review (2021)',
                      'Academy of Management Perspectives (2015)'
                    ].map((tag) => (
                      <span key={tag} className="bg-blue-300 text-black px-3 py-1 rounded-full text-sm">
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
                        Yes, I&apos;d also like to receive additional information about WTW offerings.
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
                {/* Talent Acquisition */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Talent Acquisition
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Building skills to attract and hire the right talent.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Performance Management */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Performance Management
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Enhancing abilities to set goals and evaluate employee performance.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* HR Analytics */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    HR Analytics
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Using data to make informed HR decisions.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Employee Engagement */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Employee Engagement
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Developing strategies to improve motivation and retention.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Learning and Development */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Learning and Development
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Creating effective training and upskilling programs.
                  </Typography>
                  <Box className="absolute bottom-6 right-6">
                    <span className="text-blue-300 text-xl">→</span>
                  </Box>
                </Box>

                {/* Change Management */}
                <Box className="bg-white rounded-lg shadow-sm p-6 relative hover:shadow-md transition-shadow">
                  <Typography variant="h5" className="text-xl font-bold mb-4">
                    Change Management
                  </Typography>
                  <Typography variant="body1" className="text-gray-600 mb-8">
                    Building HR&#39;s role in leading and supporting organizational change.
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