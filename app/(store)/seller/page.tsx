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
    imageSrc: 'https://images.unsplash.com/photo-1521566652839-697aa473761a?q=80&w=2671&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    title: 'Reach more. Sell more.',
    description: 'Our sellers and their amazing products help make Unikart one of the fastest-growing eCommerce platforms in Quebec. Whether you’re a small business or global brand, our solution simplify the selling experience and help deliver growth at scale. Let’s grow together!'
}

const serviceList = [
    {
      imageSrc: 'https://images.unsplash.com/photo-1604742760814-ef2860cc702d?q=80&w=2887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Expanded Customer Reach',
      subText: 'Our platform brings your store to a wider audience, increasing visibility and sales opportunities without the need for additional marketing efforts.'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1511688878353-3a2f5be94cd7?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      title: 'Hassle-Free Listing & Management',
      subText: 'Effortlessly list your grocery items on our platform and manage your inventory with ease.'
    },
    {
      imageSrc: 'https://images.unsplash.com/photo-1570913196444-6f013e478152?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHw3M3x8R3JvY2VyeSUyMERlbGl2ZXJ5fGVufDB8fHx8MTcwNDk0MTEzOHww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90',
      title: 'Reliable Payment & Support',
      subText: 'We handle all payment processes and offer robust logistics support, ensuring timely and hassle-free delivery of your products.'
    }
]

const testimonials:Testimonial[] = [
    {
      name: "Alex",
      message: "Joining this platform was the best decision I made for my grocery store. The listing process was incredibly simple, and I've seen a significant increase in sales. Their customer support team is always there when I need them. Highly recommended!",
    },
    {
      name: "Sarah",
      message: "I was amazed at how quickly my local grocery store expanded its reach. The platform not only connected me to a larger customer base but also made managing my inventory a breeze. The logistic support is top-notch, ensuring timely deliveries every time.",
    },
    {
      name: "Mike",
      message: "This platform transformed the way I do business. The payment process is secure and swift, and the operational ease it offers is unparalleled. My earnings have increased, and my customers are delighted with the service. A win-win!"
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
