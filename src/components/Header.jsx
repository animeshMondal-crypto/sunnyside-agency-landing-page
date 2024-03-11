import Navbar from "./Navbar";

function Header() {
  return (
    <div
      className="flex flex-col lg:bg-[url('/images/desktop/image-header.jpg')] 
    bg-[url('/images/mobile/image-header.jpg')]
    lg:w-full h-screen bg-contain bg-no-repeat lg:bg-center bg-bottom bg-[#3ebfff]"
    >
      <Navbar />
      <div className="flex flex-col gap-10 justify-center items-center md:mb-20 md:pb-20">
        <h1 className="text-white lg:tracking-[1rem] tracking-[0.3rem] text-5xl text-center font-bold uppercase font-[Fraunces]">
          we are creatives
        </h1>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          className="lg:h-20 block"
        />
      </div>
    </div>
  );
}

export default Header;
