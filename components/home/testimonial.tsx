interface Testimonial {
  message: string;
  name: string;
}

const Testimonial = ({ message, name }: Testimonial) => {
  return (
    <div className="my-auto mb-16 flex h-full px-8 md:px-28">
      <div className="break-word ml-0 mr-auto flex flex-col items-center justify-center gap-4 text-left lg:max-w-5xl">
        <h3 className="large whitespace-pre-line text-center text-[24px] lg:text-[28px] xl:text-[32px]">
          {message}
        </h3>
        <p className="large whitespace-pre-line text-[16px] lg:text-[18px] xl:text-[24px]">
          - {name}
        </p>
      </div>
    </div>
  );
};

export default Testimonial;
