import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import AboutUs from './about-us';
import HeroBanner from './hero-banner';
import OurServices from './our-services';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <AboutUs />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
