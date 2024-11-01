import React from 'react';
import Header from "@/sections/Header";
import Footer from '@/sections/Footer';
import Hero from '@/sections/Hero';
import Faq from '@/sections/Faq';
import PhotoSlider from '@/sections/PhotoSlider';
import AboutSb from '@/sections/AboutSb';
import Team from '@/sections/Team';
import AimAndMission from '@/sections/AimAndMission';
import Events from '@/sections/Events';

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <PhotoSlider />
      <AboutSb />
      <AimAndMission />
      <Events/>
      <Team/>
      <Faq/>
      <Footer />
    </>
  );
};

export default Home;
