function Services() {
  return (
    <div className="grid lg:grid-cols-2 grid-cols-1">
      <div className="flex justify-center items-center lg:p-32 py-20 px-10">
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-5">
          <h1 className="text-4xl font-bold font-[Fraunces] lg:w-2/3 lg:text-justify text-center">
            Transform your brand
          </h1>
          <p className=" text-slate-600 lg:text-justify text-center font-[Barlow] font-medium">
            We are a fullservice creative agency specializing in helping brands
            grow fast. Engage your clients through compelling visuals that do
            most of the marketing for you.
          </p>
          <button className="group font-[Fraunces] uppercase font-bold relative px-2">
            learn more
            <span className="absolute bottom-0 left-0 p-1 w-full rounded-md -z-20 bg-yellow-100 group-hover:bg-yellow-400"></span>
          </button>
        </div>
      </div>
      <div className="lg:block hidden">
        <img src="/images/desktop/image-transform.jpg" alt="" />
      </div>
      <div className="row-start-1 block lg:hidden">
        <img src="/images/mobile/image-transform.jpg" alt="" />
      </div>
      <div className="lg:block hidden">
        <img src="/images/desktop/image-stand-out.jpg" alt="" />
      </div>
      <div className="block lg:hidden">
        <img src="/images/mobile/image-stand-out.jpg" alt="" />
      </div>
      <div className="flex justify-center items-center lg:p-32 py-20 px-10">
        <div className="flex flex-col lg:justify-start lg:items-start justify-center items-center gap-5">
          <h1 className="text-4xl font-bold lg:text-justify text-center font-[Fraunces]">
            Stand out to the right audience
          </h1>
          <p className=" text-slate-600 lg:text-justify text-center font-[Barlow] font-medium">
            Using a collaborative formula of designers, researchers,
            photographers, videographers, and copywriters, we&apos;ll build and
            extend your brand in digital places.
          </p>
          <button className="group font-[Fraunces] uppercase font-bold relative px-2">
            learn more
            <span className="absolute bottom-0 left-0 p-1 w-full rounded-md -z-20 bg-red-100 group-hover:bg-red-400"></span>
          </button>
        </div>
      </div>
      <div className="lg:bg-[url('/images/desktop/image-graphic-design.jpg')] bg-[url('/images/mobile/image-graphic-design.jpg')] bg-no-repeat bg-contain lg:py-[290px] py-[300px] flex flex-col justify-end items-center relative">
        <div className="absolute lg:w-2/3 flex flex-col justify-center items-center gap-5 lg:pt-52 px-10 bottom-12">
          <h1 className="text-3xl font-bold font-[Fraunces] text-teal-900">
            Graphic Design
          </h1>
          <p className="font-medium text-center font-[Barlow]">
            Great design makes you memorable. We deliver artwork that
            underscores your brand message and captures potential clients
            attention.
          </p>
        </div>
      </div>
      <div className="lg:bg-[url('/images/desktop/image-photography.jpg')] bg-[url('/images/mobile/image-photography.jpg')] bg-no-repeat bg-contain lg:py-[290px] py-[300px] flex flex-col justify-end items-center relative">
        <div className="absolute lg:w-[60%] flex flex-col justify-center items-center gap-5 lg:pt-52 px-10 bottom-14">
          <h1 className="text-3xl font-bold font-[Fraunces] text-blue-900">
            Photography
          </h1>
          <p className="font-medium text-center font-[Barlow]">
            Increase your credibility by getting the most stunning, high-quality
            photos that improve your buisness image.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Services;
