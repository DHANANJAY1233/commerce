import Footer from 'components/layout/footer';
import AboutUs from './about-us';
import Carousel from './carousel';
import Form from './form';
import HeroBanner from './hero-banner';
import OurServices from './our-services';
import Testimonial from './testimonial';

const bannerContent = {
  imageSrc: 'https://images.unsplash.com/photo-1543168256-418811576931?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
  title: 'Your Grocery, Your Way.',
  description: 'Discover a world of convenience, choice and customization. Handpick groceries from fresh produce to specialty items from your favourite local marches to supermarkets for all in a single order. Why go outside when you can have everything delivered to your home with just a button press?'
}

const serviceList = [
  {
    imageSrc: 'https://images.unsplash.com/photo-1604742760814-ef2860cc702d?q=80&w=2887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Convenient Grocery Delivery',
    subText: 'Get food, groceries, pet supplies, fruits and vegetables, meat and fish, health and wellness delivered anywhere in the city.'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Fresh and Quality Products',
    subText: 'We ensure that all our products are fresh, high-quality, and handpicked just for you.'
  },
  {
    imageSrc: 'https://images.unsplash.com/photo-1570913196444-6f013e478152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw3M3x8R3JvY2VyeSUyMERlbGl2ZXJ5fGVufDB8fHx8MTcwNDk0MTEzOHww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90',
    title: 'Support your Community stores',
    subText: 'By supporting the stores in your community, you are making a positive impact in your neighborhood.'
  }
]

const testimonials:Testimonial[] = [
  {
    name: "Emily",
    message: "UniCarte's grocery delivery service is exceptional! They always deliver fresh and high-quality products right to my doorstep. Their efficient and friendly staff make my shopping experience hassle-free. Thank you, Unikarte, for making my life easier!",
  },
  {
    name: "Sophie",
    message: "UniCarte has been a game-changer for me! Their grocery delivery service in Montreal is fast, reliable, and the selection is amazing. Thanks to them, I can now enjoy quality time with my family instead of spending hours at the store. Highly recommended!",
  },
  {
    name: "Jimmy",
    message: "UniCarte has been a lifesaver! Their grocery delivery service in Montreal is prompt and reliable. With their wide selection of fresh produce and pantry staples, I can now enjoy hassle-free shopping from the comfort of my home. Thank you UniCarte for making my life easier!"
  }
]

const Home = () => {
  return (
    <>
      <HeroBanner {...bannerContent}  />
      <OurServices serviceCards={serviceList} />
      <AboutUs />
      <Form />
      <Carousel testimonials={testimonials} />
      <Footer />
    </>
  );
};

export default Home;
