import Footer from 'components/layout/footer';
import { Suspense } from 'react';
import AboutUs from './about-us';
import Carousel from './carousel';
import Form from './form';
import HeroBanner from './hero-banner';
import OurServices from './our-services';

const Home = () => {
  return (
    <>
      <HeroBanner />
      <OurServices />
      <AboutUs />
      <Form />
      <Carousel />
      <Suspense>
        <Footer />
      </Suspense>
    </>
  );
};

export default Home;
