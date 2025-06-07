'use client';

import { Box, Typography, Grid as MuiGrid, Card, CardContent, Grid } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ContentItemProps {
    type: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    linkHref: string;
    isFirstArticle?: boolean;
    width?: number | string;
    height?: number | string;
    imageMarginTop?: number | string;
}

const ContentItem: React.FC<ContentItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, isFirstArticle, width, height, imageMarginTop }) => {
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
          <Typography className="text-purple-700 normal-case p-0 justify-start text-sm font-bold hover:text-purple-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '23px' }}>
            Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '22px', marginLeft: '6px', marginTop: '4px' }} />
          </Typography>
        </CardContent>
      </Card>
    </a>
  );
};

const ReportsCampaignsSection = () => {
  const contentItems = [
    {
      type: 'SURVEY',
      title: '2025 Benefits Trends Survey',
      imageSrc: '/images/GettyImages-6.jpg',
      imageAlt: 'Benefits Trends Survey',
      linkHref: '#'
    },
    {
      type: 'REPORT',
      title: 'WTW Natural Catastrophe Review July - December 2024',
      imageSrc: '/images/GettyImages-4.jpg',
      imageAlt: 'Natural Catastrophe Review',
      linkHref: '#'
    },
  ];

  return (
    <Box className="py-16 px-4 md:px-8 bg-white">
      <Box className="container mx-auto max-w-12xl">
        <Grid container spacing={14} justifyContent="center">
          <Grid item xs={12} lg={8} key={0}>
            <ContentItem {...contentItems[0]} isFirstArticle={true} width={600} height={400} />
          </Grid>
          <Grid item xs={12} lg={4} key={1}>
            <ContentItem {...contentItems[1]} isFirstArticle={false} width={600} height={330} imageMarginTop="70px" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportsCampaignsSection; 