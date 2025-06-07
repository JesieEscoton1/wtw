'use client';

import { Box, Typography, Button, Grid, Card, CardContent } from '@mui/material';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

interface ArticleItemProps {
  type?: string;
  title?: string;
  imageSrc?: string;
  imageAlt?: string;
  linkHref?: string;
  isFirstArticle?: boolean;
  width?: number | string;
  height?: number | string;
  imageMarginTop?: number | string;
  isImage?: boolean;
}

const ArticleItem: React.FC<ArticleItemProps> = ({ type, title, imageSrc, imageAlt, linkHref, isFirstArticle, width, height, imageMarginTop, isImage }) => {
  return (
    <a href={linkHref} className="block" /* Apply styling for d-block */>
      <Card elevation={0} className="flex flex-col h-full border-none shadow-none">
        {!isImage ? (
          <CardContent className="flex flex-col justify-between flex-grow p-0 last:pb-0 mt-60">
            <Box>
              <Typography variant="overline" color="black" className="block mb-1" sx={{ fontWeight: 'bold', fontSize: '20px', }}>
                {type}
              </Typography>
              <Typography variant="h6" component="h3" className="mb-4 leading-tight" sx={{ fontWeight: 'bold', fontSize: '30px', }}>
                {title}
              </Typography>
            </Box>
            <Typography className="text-purple-700 normal-case p-0 justify-start text-sm font-bold hover:text-purple-900 transition-colors duration-300" sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', fontSize: '23px' }}>
              Read more <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '22px', marginLeft: '6px', marginTop: '4px' }} />
            </Typography>
          </CardContent>
        ) : (
          <Box
            className="relative w-full overflow-hidden mb-0 hidden md:block transition-transform duration-300 hover:scale-95" /* Add hover scale and transition */
            sx={width || height || imageMarginTop ? { width, height, marginTop: imageMarginTop } : {}} /* Apply fixed width, height, and conditional top margin to the image */
          >
            {/* Use local image path */}
            <Image
              src={imageSrc!}
              alt={imageAlt!}
              layout="fill"
              objectFit="cover"
            />
          </Box>
        )}
      </Card>
    </a>
  );
};

const CampaignSection = () => {
  const articleItems = [
    {
      type: 'CAMPAIGN',
      title: 'A smarter way to cyber risks in Asia',
      linkHref: '#',
    },
    {
      imageSrc: '/images/GettyImages-3.jpg',
      imageAlt: 'Cyber Risks in Asia',
      linkHref: '#',
      isImage: true,
    },
  ];

  return (
    <Box className="py-8 px-4 md:px-8 bg-white -mt-28">
      <Box className="container mx-auto max-w-12xl">
        <Grid container spacing={14} justifyContent="center">
          <Grid xs={12} lg={8} key={0}>
            <ArticleItem {...articleItems[0]} width={1874} height={400} />
          </Grid>
          <Grid xs={12} lg={4} key={1}>
            <ArticleItem {...articleItems[1]} width={800} height={528} imageMarginTop="74px" />
          </Grid>
        </Grid>
      </Box>
    </Box>
  );
};

export default CampaignSection; 