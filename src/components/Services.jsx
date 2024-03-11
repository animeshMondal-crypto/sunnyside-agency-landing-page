function Services() {
  return (
    <div className="grid lg:grid-cols-2">
      <div className="flex justify-center items-center p-32">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="text-4xl font-bold font-[Fraunces] w-3/4">
            Transform your brand
          </h1>
          <p className=" text-slate-600 text-justify font-[Barlow] font-medium">
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
      <div>
        <img src="/images/desktop/image-transform.jpg" alt="" />
      </div>
      <div>
        <img src="/images/desktop/image-stand-out.jpg" alt="" />
      </div>
      <div className="flex justify-center items-center p-32">
        <div className="flex flex-col justify-start items-start gap-5">
          <h1 className="text-4xl font-bold font-[Fraunces]">
            Stand out to the right audience
          </h1>
          <p className=" text-slate-600 text-justify font-[Barlow] font-medium">
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
      <div className="bg-[url('/images/desktop/image-graphic-design.jpg')] bg-no-repeat py-[280px] flex flex-col justify-end items-center relative">
        <div className="absolute w-2/3 flex flex-col justify-center items-center gap-5 pt-52 px-10 bottom-12">
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
      <div className="bg-[url('/images/desktop/image-photography.jpg')] bg-no-repeat py-[100px] flex flex-col justify-end items-center relative">
        <div className="absolute w-[60%] flex flex-col justify-center items-center gap-5 pt-52 px-10 bottom-14">
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
