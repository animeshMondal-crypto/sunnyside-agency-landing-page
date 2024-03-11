function Testimonials() {
  return (
    <div className="px-10 lg:py-28 py-20 flex flex-col gap-20 justify-center items-center">
      <h1 className="font-bold lg:text-3xl text-xl uppercase font-[Fraunces] text-slate-400 lg:tracking-[0.4rem] tracking-widest">
        client testimonials
      </h1>
      <div className="flex lg:flex-row flex-col lg:gap-5 gap-8 w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 lg:w-[30%]">
          <img
            className="h-16 rounded-full w-fit"
            src="/images/image-emily.jpg"
            alt=""
          />
          <p className="text-center font-medium font-[Barlow] w-[70%]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and dedlines were always hit
          </p>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-[Fraunces] font-bold text-lg">Emily R.</h1>
            <p className="font-[Barlow] font-medium text-slate-400">
              Marketing Director
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 lg:w-[30%]">
          <img
            className="h-16 rounded-full w-fit"
            src="/images/image-thomas.jpg"
            alt=""
          />
          <p className="text-center font-medium font-[Barlow] w-[70%]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and dedlines were always hit
          </p>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-[Fraunces] font-bold text-lg">Thomas S.</h1>
            <p className="font-[Barlow] font-medium text-slate-400">
              Cheif Operating Officer
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 lg:w-[30%]">
          <img
            className="h-16 rounded-full w-fit"
            src="/images/image-jennie.jpg"
            alt=""
          />
          <p className="text-center font-medium font-[Barlow] w-[70%]">
            We put our trust in Sunnyside and they delivered, making sure our
            needs were met and dedlines were always hit
          </p>
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="font-[Fraunces] font-bold text-lg">Jennie F.</h1>
            <p className="font-[Barlow] font-medium text-slate-400">
              Buisness Owner
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonials;
