function Footer() {
  return (
    <div className="bg-[#7ee3cd] flex flex-col gap-7 justify-center items-center py-10">
      <h1 className="font-[Barlow] font-extrabold tracking-wide text-3xl text-teal-900">
        sunnyside
      </h1>
      <ul className="font-[Barlow] flex gap-10 mb-8">
        <li className="font-medium text-teal-700 cursor-pointer hover:text-white">
          About
        </li>
        <li className="font-medium text-teal-700 cursor-pointer hover:text-white">
          Services
        </li>
        <li className="font-medium text-teal-700 cursor-pointer hover:text-white">
          Projects
        </li>
      </ul>
      <div className="flex gap-8">
        <img
          className="cursor-pointer"
          src="/images/icon-facebook.svg"
          alt=""
        />
        <img
          className="cursor-pointer"
          src="/images/icon-instagram.svg"
          alt=""
        />
        <img className="cursor-pointer" src="/images/icon-twitter.svg" alt="" />
        <img
          className="cursor-pointer hover:fill-white"
          src="/images/icon-pinterest.svg"
          alt=""
        />
      </div>
    </div>
  );
}

export default Footer;
