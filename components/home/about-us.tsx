import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-[rgb(0,211,245)]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <div className="mb-6 grid grid-cols-1 gap-6 md:mb-10 md:gap-10 lg:grid-cols-3">
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1606237906294-ae86d103d715?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxN3x8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1583922146273-68f11083858e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyN3x8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1611059264934-dfc78da7dc26?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxOXx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />
            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1582803824122-f25becf36ad8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwxNXx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />

            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1526470498-9ae73c665de8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNnx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />

            <Image
              className="aspect-square rounded-sm object-cover object-center md:rounded-md lg:rounded-lg"
              src="https://images.unsplash.com/photo-1585735633320-d24595a213a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyNHx8Z3JvY2VyeSUyMGRlbGl2ZXJ5JTIwfGVufDB8fHx8MTY5OTMyMDk0NXww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
              alt="our-service-1"
              height={500}
              width={500}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
