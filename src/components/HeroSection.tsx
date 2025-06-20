'use client';

import Image from 'next/image';
import { Box, Typography, Button } from '@mui/material';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

type Section = 'People';

const HeroSection = () => {
  const [activeSection, setActiveSection] = useState<Section | null>(null);

  const getBackgroundImage = (section: Section | null) => {
    switch (section) {
      case 'People':
        return '/images/people1.jpg';
      // case 'Risk':
      //   return '/images/risk1.png';
      // case 'Capital':
      //   return '/images/capital.png';
      default:
        return '/images/hr-consulting.png';
    }
  };

  // const getSvgImage = (section: Section | null) => {
  //   switch (section) {
  //     case 'People':
  //       return '/images/WTWCO_Motifs_Large_FiCo_TL_2.svg';
  //     case 'Risk':
  //       return '/images/WTWCO_Motifs_Large_InSt_TL_1.svg';
  //     case 'Capital':
  //       return '/images/WTWCO_Motifs_Large_SuMa_TL_3.svg';
  //     default:
  //       return '/images/WTWCO_Motifs_Large_SuMa_TL_2.svg';
  //   }
  // };

  const handleSectionHover = (section: Section | null) => {
    setActiveSection(section);
  };

  return (
    <Box className="relative w-full">
      <header className="relative w-full h-[400px] md:h-[600px] overflow-hidden">
        <Box className="absolute top-0 left-0 z-40 transition-opacity duration-[2000ms] ease-in-out">
          {/* <Image
            key={activeSection || 'default'}
            src={getSvgImage(activeSection)}
            alt=""
            width={350}
            height={250}
            className=""
            role="presentation"
            loading="eager"
            fetchPriority="high"
            style={{
              visibility: 'visible',
              opacity: 1,
              transform: 'matrix3d(1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1, 0, 0, 0, 0, 1)',
              transition: 'all, opacity 2s cubic-bezier(0.5, 0, 0, 1) 0.1s, transform 2s cubic-bezier(0.5, 0, 0, 1) 0.1s'
            }}
          /> */}
        </Box>

        <Box className="relative z-20 h-full flex flex-col md:flex-row items-stretch justify-between">
          <Box className="relative w-full md:w-9/12 h-full">
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
            <Box className="hero-homepage__title-block bg-white p-6 md:p-12 shadow-xl w-[90%] md:max-w-xl transform transition-all duration-300 hover:shadow-2xl absolute z-10 top-[10%] left-1/2 -translate-x-1/2 md:top-[8.5%] md:left-[4%] md:translate-x-0">
              <h1 className="heading-1 m-0 mb-2 md:mb-3 text-gray-900 font-serif leading-tight text-2xl md:text-5xl" style={{ textWrap: 'balance', fontWeight: 'bold' }}>
                Empowering People, Transforming Workforces
              </h1>
              <span className="heading-3 p-0 mt-2 md:mt-3 mb-2 text-black font-serif font-bold text-lg md:text-2xl">Unlock your organization's potential with expert HR consulting and talent solutions</span><br/>
               <span className="arrow-link arrow-link--inbody p-0 heading-6 m-0 mt-2 md:mt-3 inline-block"> 
                <button
                  onClick={() => window.location.href = '/transforming-tomorrows'}
                  aria-label="Link, Click to visit our Transforming Tomorrows page"
                  className="normal-case p-0 justify-start text-base font-bold hover:text-blue-900 transition-colors duration-300 bg-transparent border-none cursor-pointer text-[18px] md:text-[23px]"
                  style={{ textDecoration: 'none', display: 'flex', alignItems: 'center', fontWeight: 'bold', color: '#00aaff' }}
                >
                  Get Started
                  <FontAwesomeIcon icon={faArrowRight} className="ml-2 md:ml-[10px] mt-[3px] text-[18px] md:text-[22px]" />
                </button>
              </span>
            </Box>
          </Box>

          <Box className="w-full md:w-3/12 bg-[lightblue] text-white flex items-center py-4 md:py-0">
            <Box className="w-full py-2 md:py-8 px-3 md:px-8 flex flex-col justify-center">
              <Typography variant="h5" component="div" className="font-bold mb-2 md:mb-6 text-base md:text-xl" sx={{ fontWeight: 'bold', fontSize: { xs: '20px', md: '25px' } }}>
                Discover More
              </Typography> 
              <Box className="accordion space-y-0 pt-2 md:pt-4" id="homepage-nav-accordion">
                {(['People'] as Section[]).map((section) => (
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
                          backgroundColor: '#00aaff',
                        },
                        transition: 'background-color 300ms ease-in-out',
                      }}
                      aria-label={`Content slider, ${section}, click to explore WTW content related to ${section.toLowerCase()} category`}
                    >
                      <Box className="w-full flex items-center justify-between p-2 md:p-3">
                        <Typography variant="h6" component="div" className="mr-2 font-bold text-white text-base md:text-xl">
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