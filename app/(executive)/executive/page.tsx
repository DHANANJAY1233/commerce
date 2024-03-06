import AboutUs from 'components/home/about-us';
import Carousel from 'components/home/carousel';
import HeroBanner from 'components/home/hero-banner';
import OurServices from 'components/home/our-services';
import Testimonial from 'components/home/testimonial';
import Footer from 'components/layout/footer';

export const runtime = 'edge';

export const metadata = {
  description: 'High-performance ecommerce store built with Next.js, Vercel, and Shopify.',
  openGraph: {
    type: 'website'
  }
};

const bannerContent = {
    imageSrc: 'https://images.unsplash.com/photo-1621503234646-417b8af30619?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Deliver Groceries with Unikart',
    description: "Stand tall. Become a delivery partner for Quebec's fastest growing grocery delivery network. Let’s grow together!"
}

const serviceList = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1628527304948-06157ee3c8a6?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Get Paid Weekly',
      subText: 'Get weekly payment directly in your bank account without any wait.'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1604742760814-ef2860cc702d?q=80&w=2587&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Flexible Working Hours',
      subText: 'Choose your delivery work hours according to your convenience.'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1695653422715-991ec3a0db7a?q=80&w=2574&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Insurance Coverage',
      subText: 'Deliver safe with our accidental and medical insurance.'
    }
]

const testimonials:Testimonial[] = [
    {
      name: "John",
      message: "Ever since I joined Unikart, I can only see progress in my life.",
    },
    {
      name: "Bess",
      message: "Unikart has provided me opportunity to earn while I am studying.",
    },
    {
      name: "Peter",
      message: "Unikart has given me a lot. Within 8 months I have bought a new bike."
    }
  ]

export default async function HomePage() {
  return <>
  <HeroBanner {...bannerContent} />
  <OurServices isSeller serviceCards={serviceList} />
  <AboutUs />
  <Carousel testimonials={testimonials} />
  <Footer />
</>
}
