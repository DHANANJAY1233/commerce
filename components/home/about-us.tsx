import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="bg-[linear-gradient(rgb(255,209,97),rgb(82,191,141))]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <div className="flex w-full flex-col-reverse  items-center gap-10 opacity-100 duration-500 ease-in-out lg:flex-row-reverse lg:gap-20">
            <div className="max-w-240 flex flex-1 flex-col items-center lg:items-start">
              <h2 className="heading-large mb-[24px] text-center font-work text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
                Who are we?
              </h2>
              <p className="mb-[20px] text-black">
                Our Goal at UniCarte is to simplify people's lives, help them save time, and
                increase the effectiveness of grocery shopping.
              </p>
              <p className="text-black">
                Our Mission at UniCarte is to revolutionize how consumers shop for essentials and
                deliver the most incredible convenience straight to their front door.
              </p>
            </div>
            <div className="flex h-full w-full flex-1 justify-center lg:justify-start">
              <Image
                src="https://images.unsplash.com/photo-1583922146273-68f11083858e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wyNjI5NjF8MHwxfHNlYXJjaHwyN3x8R3JvY2VyeSUyMERlbGl2ZXJ5fGVufDB8fHx8MTcwMzEwMjk0Nnww&ixlib=rb-4.0.3&q=80&w=1080&w=1920&q=90"
                alt="about-us"
                width={704}
                height={470}
                className="aspect-[3/2] object-cover object-center"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
