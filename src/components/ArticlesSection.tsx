'use client';

import { Box, Typography, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ArticleItemProps {
  type: string;
  title: string;
  imageSrc: string;
  imageAlt: string;
  linkHref: string;
  width?: number | string;
  height?: number | string;
  imageMarginTop?: number | string;
  mobileHeight?: number | string;
  mobileWidth?: number | string;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, width, height, imageMarginTop,  mobileHeight, mobileWidth, }) => {
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
        <CardContent className="flex flex-col justify-between flex-grow p-0 last:pb-0">
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

const ArticlesSection = () => {
  const articleItems = [
    {
      type: '',
      title: 'Job Evaluation',
      imageSrc: '/images/job-fair.jpg',
      imageAlt: 'Employee Pay Trends',
      linkHref: '#'
    },
    {
      type: '',
      title: 'People Software',
      imageSrc: '/images/People-Software.png',
      imageAlt: 'Complex World',
      linkHref: '#'
    },
  ];

  return (
    <Box className="py-8 md:py-16 px-4 md:px-8 bg-white">
      <Box className="container mx-auto max-w-12xl">
        <Grid container spacing={{ xs: 4, md: 14 }} justifyContent="center">
          <Grid component="div" item xs={12} lg={8}>
            <ArticleItem {...articleItems[0]} isFirstArticle={true} width={674} height={450} mobileHeight={350} mobileWidth={630} />
          </Grid>
          <Grid component="div" item xs={12} lg={4}>
            <ArticleItem {...articleItems[1]} isFirstArticle={false} width={600} height={378} mobileHeight={350} mobileWidth={630} imageMarginTop="74px" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default ArticlesSection; 