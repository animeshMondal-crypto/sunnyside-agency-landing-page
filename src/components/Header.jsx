import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="flex flex-col lg:bg-[url('/images/desktop/image-header.jpg')] 
    bg-[url('/images/mobile/image-header.jpg')]
    lg:w-full lg:h-screen lg:bg-contain bg-cover bg-no-repeat lg:bg-center bg-bottom bg-[#3ebfff]"
    >
      <Navbar />
      <div className="flex flex-col gap-10 justify-center items-center lg:mb-20 lg:pb-20">
        <h1 className="text-white lg:tracking-[1rem] tracking-[0.3rem] text-5xl text-center font-bold uppercase font-[Fraunces]">
          we are creatives
        </h1>
        <div className="lg:mt-20 pb-32">
          <img
            src="/images/icon-arrow-down.svg"
            alt="arrow-down"
            className="lg:h-20 block"
          />
        </div>
      </div>
    </div>
  );
}

export default Header;
