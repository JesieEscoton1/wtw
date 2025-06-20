'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { styled } from '@mui/material/styles';
import Image from 'next/image';

const Grid = styled('div')(({ theme }) => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(12, 1fr)',
  gap: theme.spacing(4),
  [theme.breakpoints.up('lg')]: {
    gap: theme.spacing(14),
  },
}));

const GridItem = styled('div')(({ theme }) => ({
  gridColumn: 'span 12',
  [theme.breakpoints.up('lg')]: {
    '&:first-of-type': {
      gridColumn: 'span 6',
    },
    '&:last-of-type': {
      gridColumn: 'span 6',
    },
  },
}));

interface ContentItemProps {
    type: string;
    title: string;
    imageSrc: string;
    imageAlt: string;
    linkHref: string;
    width?: number | string;
    height?: number | string;
    mobileHeight?: number | string;
    mobileWidth?: number | string;
    imageMarginTop?: number | string;
}

const ContentItem: React.FC<ContentItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, width, height, mobileHeight, mobileWidth, imageMarginTop }) => {
  return (
    <a href={linkHref} className="block">
      <Card elevation={0} className="flex flex-col h-full border-none shadow-none">
        <Box
          className="relative w-full overflow-hidden mb-0 transition-transform duration-300 hover:scale-95"
          sx={{
            width: { xs: mobileWidth || '100%', md: width },
            height: { xs: mobileHeight || '250px', md: height },
            marginTop: { xs: 0, md: imageMarginTop }
          }}
        >
          <Image
            src={imageSrc}
            alt={imageAlt}
            layout="fill"
            objectFit="cover"
          />
        </Box>
        <CardContent className="flex flex-col justify-between flex-grow p-4 md:p-0 last:pb-0">
          <Box>
            <Typography 
              variant="overline" 
              color="black" 
              className="block mb-1" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '16px', md: '20px' }
              }}
            >
              {type}
            </Typography>
            <Typography 
              variant="h6" 
              component="h3" 
              className="mb-4 leading-tight" 
              sx={{ 
                fontWeight: 'bold', 
                fontSize: { xs: '18px', md: '20px' }
              }}
            >
              {title}
            </Typography>
          </Box>
          <Typography 
            className="normal-case p-0 justify-start text-sm font-bold hover:text-blue-900 transition-colors duration-300" 
            sx={{ 
              fontWeight: 'bold', 
              display: 'flex', 
              alignItems: 'center', 
              fontSize: { xs: '18px', md: '23px' }, 
              color: '#00aaff' 
            }}
          >
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
      title: 'Total Rewards',
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
    <Box className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <Box className="container mx-auto max-w-12xl">
        <Grid>
          <GridItem>
            <ContentItem {...contentItems[0]} width={600} height={400} mobileHeight={350} mobileWidth={630} />
          </GridItem>
          <GridItem>
            <ContentItem {...contentItems[1]} width={600} height={400} mobileHeight={350} mobileWidth={630} />
          </GridItem>
        </Grid>
      </Box>
    </Box>
  );
};

export default ReportsCampaignsSection; 