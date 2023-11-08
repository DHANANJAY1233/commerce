import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import AboutUs from './about-us';
import HeroBanner from './hero-banner';
import Location from './location';
import OurServices from './our-services';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <AboutUs />
      <Location />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
