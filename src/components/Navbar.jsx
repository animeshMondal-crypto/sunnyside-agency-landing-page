function Navbar() {
  return (
    <nav className="lg:px-10 px-8 pt-5 lg:pb-16 pb-52 flex items-center justify-between">
      <h1 className="text-white font-bold text-3xl cursor-pointer font-[Barlow]">
        sunnyside
      </h1>
      <div className="lg:flex justify-end gap-5 font-[Barlow] hidden">
        <a
          className="px-5 py-3 font-semibold rounded-md text-white hover:bg-white/20"
          href="#"
        >
          About
        </a>
        <a
          className="px-5 py-3 font-semibold rounded-md text-white hover:bg-white/20"
          href="#"
        >
          Services
        </a>
        <a
          className="px-5 py-3 font-semibold rounded-md text-white hover:bg-white/20"
          href="#"
        >
          Projects
        </a>
        <button className="px-6 py-2 bg-white rounded-full text-black font-bold uppercase hover:bg-white/40 hover:text-white font-[Fraunces]">
          contact
        </button>
      </div>
      <div className="lg:hidden">
        <img
          className="cursor-pointer"
          src="/images/icon-hamburger.svg"
          alt="humburger"
        />
      </div>
    </nav>
  );
}

export default Navbar;
