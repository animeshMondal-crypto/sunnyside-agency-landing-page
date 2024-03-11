function Testimonials() {
  return (
    <div className="px-10 py-28 flex flex-col gap-20 justify-center items-center">
      <h1 className="font-bold text-3xl uppercase font-[Fraunces] text-slate-400 tracking-[0.4rem]">
        client testimonials
      </h1>
      <div className="flex gap-5 w-full justify-center items-center">
        <div className="flex flex-col justify-center items-center gap-10 w-[30%]">
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
        <div className="flex flex-col justify-center items-center gap-10 w-[30%]">
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
        <div className="flex flex-col justify-center items-center gap-10 w-[30%]">
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
