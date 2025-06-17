'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ContentItemProps {
    type: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    linkHref: string;
    width?: number | string;
    height?: number | string;
    imageMarginTop?: number | string;
}

const ContentItem: React.FC<ContentItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, width, height, imageMarginTop }) => {
const ContentItem: React.FC<ContentItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, width, height, imageMarginTop }) => {
  return (
    <a href={linkHref} className="block" /* Apply styling for d-block */>
      <Card elevation={0} className="flex flex-col h-full border-none shadow-none">
        <Box
          className="relative w-full overflow-hidden mb-0 hidden md:block transition-transform duration-300 hover:scale-95" /* Add hover scale and transition */
          sx={width || height || imageMarginTop ? { width, height, marginTop: imageMarginTop } : {}} /* Apply fixed width, height, and conditional top margin to the image */
        >
          {/* Use local image path */}
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <CardContent className="flex flex-col justify-between flex-grow p-0 last:pb-0">
          <Box>
            <Typography variant="overline" color="black" className="block mb-1" sx={{ fontWeight: 'bold', fontSize: '20px', }}>
              {type}
            </Typography>
            <Typography variant="h6" component="h3" className="mb-4 leading-tight" sx={{ fontWeight: 'bold', fontSize: '20px', }}>
              {title}
            </Typography>
          </Box>
          <Typography className="normal-case p-0 justify-start text-sm font-bold hover:text-blue-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '23px', color: '#00aaff' }}>
            Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '22px', marginLeft: '6px', marginTop: '4px', color: '#00aaff' }} />
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

const ReportsCampaignsSection = () => {
  const contentItems = [
    {
      type: '',
      title: 'Total Reward',
      imageSrc: '/images/fil3.jpg',
      imageAlt: 'Cyber Risks in Asia',
      linkHref: '/campaign'
    },
    {
      type: '',
      title: 'Performance Management',
      imageSrc: '/images/Performance-Management.png',
      imageAlt: 'Cyber Risks in Asia',
      linkHref: '/campaign',
      isImage: true,
    },
  ];

  return (
    <Box className="py-16 px-4 md:px-8 bg-white">
      <Box className="container mx-auto max-w-12xl">
        <Box sx={{ 
          display: 'grid',
          gridTemplateColumns: { xs: '1fr', lg: '2fr 1fr' },
          gap: '56px',
          justifyContent: 'center'
        }}>
          <Box>
            <ContentItem {...contentItems[0]} width={600} height={400} />
          </Box>
          <Box>
            <ContentItem {...contentItems[1]} width={600} height={330} imageMarginTop="70px" />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default ReportsCampaignsSection; 