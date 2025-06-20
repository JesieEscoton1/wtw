'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ReportsCampaignsSection from '../components/ReportsCampaignsSection';
import ArticlesSection from '../components/ArticlesSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import CampaignSection from '../components/CampaignSection';
import Footer from '../components/Footer';
import { Box } from '@mui/material';

export default function Home() {
  return (
    <Box className="min-h-screen flex flex-col">
      <Header />
      <Box className="flex-grow">
        <HeroSection />
        <Box className="px-4 md:px-8 lg:px-16 max-w-[1920px] mx-auto">
          <ReportsCampaignsSection />
          <CampaignSection />
          <ArticlesSection />
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}
