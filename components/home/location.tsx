const Location = () => {
  return (
    <div className="bg-[rgb(0,203,236)]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <div className="flex h-full w-full translate-y-0  flex-col gap-10 opacity-100 transition-all transition-all duration-500 ease-in-out lg:!flex-row-reverse lg:gap-20">
            <div>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d178787.81912808729!2d-73.71187334999999!3d45.5591827!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91a541c64b70d%3A0x654e3138211fefef!2sMontreal%2C%20QC%2C%20Canada!5e0!3m2!1sen!2sin!4v1699459830075!5m2!1sen!2sin"
                width="600"
                height="450"
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
            <div className="flex w-full flex-col justify-center gap-4 md:w-1/2">
              <div>
                <p className="heading-large mb-2 text-left text-[30px] font-normal text-[rgb(17,24,39)] lg:text-[35px] xl:text-[48px]">
                  Location
                </p>
                <pre className="body-normal">Montreal, QC</pre>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Location;
