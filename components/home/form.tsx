const Form = () => {
  return (
    <div className="bg-[rgb(82,191,141)]">
      <div className="break-word relative flex flex-none flex-shrink-0 items-center">
        <div className="container relative z-10 mx-auto px-[1.5rem] pb-16 pt-16 lg:pb-32 lg:pt-32">
          <div className="flex h-full w-full flex-col gap-10 opacity-100 lg:!flex-row lg:gap-20">
            <div className="w-full lg:mt-10 lg:w-1/2">
              <div className="text-black">
                <h3 className="mb-4 font-work text-[24px] font-normal leading-[32] md:text-[28px] md:leading-[36px] xl:text-[32px] xl:leading-[40px]">
                  Reach Out Today
                </h3>
                <p>
                  Use the contact form below to get in touch with us. We are here to assist you with
                  any questions or inquiries you may have.
                </p>
              </div>
            </div>
            <div className="w-full lg:w-1/2">
              <form noValidate>
                <div className="mb-4 flex flex-col gap-4 lg:flex-row">
                  <div className="flex-1">
                    <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                      Name
                    </label>
                    <input
                      type="text"
                      className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                    />
                  </div>
                  <div className="flex-1">
                    <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                      Email
                    </label>
                    <input
                      type="email"
                      className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                    />
                  </div>
                </div>
                <div className="mb-4">
                  <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
                    Message
                  </label>
                  <textarea
                    rows={5}
                    className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
                  />
                </div>
                <div className="flex flex-col items-start justify-between gap-4 md:flex-row">
                  <div className="max-w-sm text-xs font-light text-black">
                    This site is protected by reCAPTCHA and the Google
                    <a
                      target="_blank"
                      className="font-bold"
                      href="https://policies.google.com/privacy"
                    >
                      {' '}
                      Privacy Policy{' '}
                    </a>
                    and
                    <a
                      target="_blank"
                      className="font-bold"
                      href="https://policies.google.com/terms"
                    >
                      {' '}
                      Terms of Service{' '}
                    </a>
                    apply.
                  </div>
                  <button
                    type="submit"
                    className="button lg mt-2 w-36 truncate rounded-[8px] bg-[#ffe75f] px-[16px] py-[12px] text-black md:mt-0"
                  >
                    Send
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Form;
