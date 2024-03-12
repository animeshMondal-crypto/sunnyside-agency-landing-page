import { useState } from "react";

function Navbar() {
  const [menu, setMenu] = useState(false);

  return (
    <nav className="relative lg:px-10 px-8 pt-5 lg:pb-20 pb-32 flex items-center justify-between">
      <h1 className="text-white font-bold text-3xl cursor-pointer font-[Barlow]">
        sunnyside
      </h1>
      <div className="lg:flex gap-5 font-[Barlow] hidden">
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
          className={`cursor-pointer ${menu ? "opacity-50 " : ""}`}
          src="/images/icon-hamburger.svg"
          alt="humburger"
          onClick={() => setMenu(!menu)}
        />
      </div>
      {menu && (
        <div className="bg-white pt-10 pb-20 px-16 lg:hidden flex flex-col gap-5 justify-center items-center absolute -bottom-52 right-10">
          <ul className="flex flex-col justify-center items-center gap-5 font-[Barlow]">
            <li className="font-semibold text-slate-600">About</li>
            <li className="font-semibold text-slate-600">Services</li>
            <li className="font-semibold text-slate-600">Projects</li>
          </ul>
          <button className="py-5 px-12 rounded-full bg-yellow-400 font-[Fraunces] font-bold uppercase">
            Contact
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
