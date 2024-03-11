function Navbar() {
  return (
    <nav className="px-10 pt-5 pb-16 flex items-center justify-between">
      <h1 className="text-white font-bold text-3xl cursor-pointer font-[Barlow]">
        sunnyside
      </h1>
      <div className="flex gap-5 font-[Barlow]">
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
    </nav>
  );
}

export default Navbar;
