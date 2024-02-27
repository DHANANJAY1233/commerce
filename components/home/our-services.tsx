import ServiceCard from './service-card';

export const OurServices = ({isSeller=false, serviceCards}:{isSeller?: boolean, serviceCards:any[]}) => {
  return (
    <div className="bg-[#ffd161]">
      {!isSeller && <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h2 className="heading-large mb-6 text-center font-work text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
          Your Stores
        </h2>
        <div className="relative flex flex-wrap justify-center gap-[40px]">
          <ServiceCard
            imageSrc={
              'https://images.unsplash.com/photo-1516594798947-e65505dbb29d?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            imageAlt={'Your stores 1'}
            title="Fresh Produce Delivery"
            subText="Get farm-fresh fruits and vegetables delivered to your doorstep."
            ctaText="Explore"
            ctaUrl="/"
          />
          <ServiceCard
            imageSrc={
              'https://images.unsplash.com/photo-1571211905393-6de67ff8fb61?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyMnx8R3JvY2VyeSUyMERlbGl2ZXJ5fGVufDB8fHx8MTcwNDkxNzYyOXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90'
            }
            imageAlt={'Your stores 2'}
            title="Speciality Grocery Items"
            subText="Ready for some delicious food? Try out ingredients from your favorite marches."
            ctaText="Explore"
            ctaUrl="/"
          />
          <ServiceCard
            imageSrc={
              'https://images.unsplash.com/photo-1601598851547-4302969d0614?q=80&w=2864&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
            }
            imageAlt={'Your stores 3'}
            title="Supermarket Deals"
            subText="Take a look at the exciting deals available at your favourite supermarket."
            ctaText="Explore"
            ctaUrl="/"
          />
        </div>
      </div>}

     {serviceCards && <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
        <h2 className="heading-large mb-6 text-center font-work text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
          Our Services
        </h2>
        <div className="relative flex flex-wrap justify-center gap-[40px]">
          {serviceCards.map(card => {
            return <ServiceCard {...card} />
          })}
        </div>
      </div>
     }
    </div>
  );
};

export default OurServices;
