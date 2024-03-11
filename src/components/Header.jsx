import Navbar from "./Navbar";

function Header() {
  return (
    <div className="flex flex-col bg-[url('/images/desktop/image-header.jpg')] w-full h-screen bg-contain bg-no-repeat bg-center bg-[#3ebfff]">
      <Navbar />
      <div className="flex flex-col gap-32 justify-center items-center md:mb-20 md:pb-20">
        <h1 className="text-white tracking-[1rem] text-5xl font-bold uppercase font-[Fraunces]">
          we are creatives
        </h1>
        <img
          src="/images/icon-arrow-down.svg"
          alt="arrow-down"
          className="h-20"
        />
      </div>
    </div>
  );
}

export default Header;
