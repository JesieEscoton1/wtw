'use client';

import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Section = 'About Us' | 'Core Values' | 'Our Vision';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const getBackgroundImage = (section: Section | null) => {
    switch (section) {
      case 'Core Values':
        return '/images/hr-consulting.png';
      default:
        return '/images/hr-consulting.png';
    }
  };

  const handleSectionHover = (section: Section | null) => {
    setActiveSection(section);
  };

  const defaultTitle = 'Empowering People, Transforming Workforces';
  const defaultSubtitle =
    'Unlock your organization’s potential with expert HR consulting and talent solutions';
  const aboutUsTitle = 'About Alliance Atlantic';
  const aboutUsParagraph = `Grow stronger with people strategies and solutions built for change.\nAt Alliance Atlantic, we’ve spent over 25 years helping organizations thrive through people-first strategies, performance systems, and leadership development. Our seasoned consultants bring deep expertise across organizational design, total rewards, HR capability, and job evaluation — always tailored to your structure, culture, and goals. Guided by people-first strategies, driven by data, and committed to results, we’re more than consultants — we’re your partner of choice in building resilient, future-ready organizations.`;
  const coreValuesTitle = 'SERVICE BEYOND BOUNDARIES';
  const coreValuesLines = [
    'Beyond profit...',
    'Beyond ourselves...',
    'Beyond the usual...',
    'Beyond what we can...',
  ];
  const visionParagraph = `To be the Partner of Choice in the development of people strategies, programs and competencies that will help: Create long-term, distinctive capabilities for the business to compete and grow; promote a culture of respect for the dignity of the individual and appreciation for the unique value s/he brings to the organization; and to be the integrating channel of a global network of HR and Management consultants, subscribing to world class standards of professionalism, expertise and services and bound by a common value for people.`;

  return (
    <Box className="relative w-full">
      <header className="relative w-full h-[600px] md:h-[600px] overflow-hidden">
        <Box className="relative z-20 h-full flex flex-col md:flex-row items-stretch justify-between">
          {/* Left Section */}
          <Box className="relative w-full md:w-9/12 h-full md:h-full flex-shrink-0" style={{ minHeight: '300px' }}>
            <Image
              src={getBackgroundImage(activeSection)}
              alt="Background"
              layout="fill"
              objectFit="cover"
              className="absolute inset-0 z-0 transition-all duration-1000 ease-in-out"
              style={{
                opacity: 1,
                transform: 'scale(1)',
                transition: 'opacity 1s ease-in-out, transform 1s ease-in-out',
              }}
            />
          
          <Box
            className={`hero-homepage__title-block bg-white shadow-xl absolute z-10 transition-all duration-500 ease-in-out
              ${activeSection ? 'p-4 md:p-8' : 'p-6 md:p-12'}
              ${activeSection ? 'top-[5%] md:top-[5%]' : 'top-[5%] md:top-[8.5%]'}
              ${activeSection ? 'left-1/2 -translate-x-1/2 md:left-[2%] md:translate-x-0' : 'left-1/2 -translate-x-1/2 md:left-[4%] md:translate-x-0'}
              ${activeSection ? 'w-[95%] sm:w-[85%] md:w-[75%] lg:w-[60%]' : 'w-[90%] sm:w-[80%] md:w-[65%] lg:w-[50%]'}
              xl:max-w-3xl
            `}
          >


              {activeSection === 'About Us' ? (
                <>
                  <Typography
                    variant="h4"
                    component="h1"
                    className="mb-2 md:mb-3 font-serif font-bold"
                    color="text.primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {aboutUsTitle}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="mt-2 md:mt-4 mb-2"
                    color="text.primary"
                    sx={{ fontWeight: '600', fontSize: { xs: '18px', md: '18px' }, mt: 1 }}
                  >
                    {aboutUsParagraph.split('\n')[0]}
                  </Typography>
                  <Typography
                    variant="body1"
                    className="mb-2"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line', fontSize: { xs: '18px', md: '18px' }, mt: .5 }}
                  >
                    {aboutUsParagraph.split('\n').slice(1).join('\n')}
                  </Typography>
                </>
              ) : activeSection === 'Core Values' ? (
                <>
                  <Typography
                    variant="h4"
                    component="h1"
                    className="mb-2 md:mb-3 font-serif font-bold"
                    color="text.primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    {coreValuesTitle}
                  </Typography>
                  <Box className="mt-2 md:mt-3 mb-2">
                    {coreValuesLines.map((line, idx) => (
                      <Typography
                        key={idx}
                        variant="body1"
                        color="text.secondary"
                        sx={{ display: 'block', fontSize: { xs: '18px', md: '18px' } }}
                      >
                        {line}
                      </Typography>
                    ))}
                  </Box>
                </>
              ) : activeSection === 'Our Vision' ? (
                <>
                  <Typography
                    variant="h4"
                    component="h1"
                    className="mb-2 md:mb-3 font-serif font-bold"
                    color="text.primary"
                    sx={{ fontWeight: 'bold' }}
                  >
                    Our Vision
                  </Typography>
                  <Typography
                    variant="body1"
                    className="mt-2 md:mt-3 mb-2"
                    color="text.secondary"
                    sx={{ whiteSpace: 'pre-line', fontSize: { xs: '18px', md: '18px' }, mt: 1 }}
                  >
                    {visionParagraph}
                  </Typography>
                </>
              ) : (
                <>
                  <h1 className="heading-1 m-0 mb-2 md:mb-3 text-gray-900 font-serif leading-tight text-2xl md:text-5xl font-bold">
                    {defaultTitle}
                  </h1>
                  <span className="heading-3 p-0 mt-2 md:mt-3 mb-2 text-black font-serif font-bold text-lg md:text-2xl">
                    {defaultSubtitle}
                  </span>
                  <br />
                  <span className="arrow-link arrow-link--inbody p-0 heading-6 m-0 mt-2 md:mt-3 inline-block">
                    <button
                      onClick={() => (window.location.href = '/overview')}
                      aria-label="Link, Click to visit our Transforming Tomorrows page"
                      className="normal-case p-0 justify-start text-base font-bold hover:text-blue-900 transition-colors duration-300 bg-transparent border-none cursor-pointer text-[18px] md:text-[23px]"
                      style={{
                        textDecoration: 'none',
                        display: 'flex',
                        alignItems: 'center',
                        fontWeight: 'bold',
                        color: '#00aaff',
                      }}
                    >
                      Get Started
                      <FontAwesomeIcon
                        icon={faArrowRight}
                        className="ml-2 md:ml-[10px] mt-[3px] text-[18px] md:text-[22px]"
                      />
                    </button>
                  </span>
                </>
              )}
              </Box>
            
          </Box>

          {/* Right Section (Accordion) */}
          <Box className="w-full md:w-3/12 bg-[#00aaff] text-white flex items-center py-4 md:py-0 flex-shrink-0 min-h-[200px] md:min-h-0">
            <Box className="w-full py-4 md:py-8 px-4 md:px-8 flex flex-col justify-center">
              <Typography
                variant="h5"
                component="div"
                className="font-bold mb-2 md:mb-6 text-base md:text-xl"
                sx={{ fontWeight: 'bold', fontSize: { xs: '20px', md: '25px' } }}
              >
                Discover More
              </Typography>
              <Box className="accordion space-y-0 pt-2 md:pt-4" id="homepage-nav-accordion">
                {(['About Us', 'Core Values', 'Our Vision'] as Section[]).map((section) => (
                  <Box
                    key={section}
                    className="homepage-nav-item"
                    onMouseEnter={() => handleSectionHover(section)}
                    onMouseLeave={() => handleSectionHover(null)}
                  >
                    <Button
                      className="homepage-nav-item__button"
                      sx={{
                        textAlign: 'left',
                        padding: 0,
                        position: 'relative',
                        width: '100%',
                        textTransform: 'none',
                        color: 'white',
                        '&:hover': {
                          backgroundColor: '#0088cc',
                        },
                        transition: 'background-color 300ms ease-in-out',
                      }}
                      aria-label={`Content slider, ${section}, click to explore WTW content related to ${section.toLowerCase()} category`}
                    >
                      <Box className="w-full flex items-center justify-between p-2 md:p-3">
                        <Typography
                          variant="h6"
                          component="div"
                          className="mr-2 font-bold text-white text-base md:text-xl"
                        >
                          {section}
                        </Typography>
                        <ChevronRightIcon
                          className={`homepage-nav-item__caret text-white transition-transform duration-300 ${
                            activeSection === section ? 'rotate-90' : ''
                          } text-base md:text-xl`}
                        />
                      </Box>
                    </Button>
                  </Box>
                ))}
              </Box>
            </Box>
          </Box>
        </Box>
      </header>
    </Box>
  );
};

export default HeroSection;
