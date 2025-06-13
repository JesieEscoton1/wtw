'use client';

import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import ReportsCampaignsSection from '../components/ReportsCampaignsSection';
import ArticlesSection from '../components/ArticlesSection';
import FeaturedVideoSection from '../components/FeaturedVideoSection';
import CampaignSection from '../components/CampaignSection';
import Footer from '../components/Footer';

export default function Home() {
  return (
    <>
      <Header />
      <HeroSection />
      <ReportsCampaignsSection />
      <CampaignSection />
      <ArticlesSection />
      <FeaturedVideoSection />
      <Footer />
    </>
  );
}
