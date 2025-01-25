const Navbar = () => {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <div className="top-0 z-50 sticky bg-black text-gray-300">
        <div className="flex justify-between max-w-[1500px] px-[5vw] py-8 text-lg">
          <div className="flex gap-2 items-center bg-transparent text-gray-300">
            <span>FILM AURA</span>
          </div>

          <ul className="flex gap-8 ">
            {[
              "NARRATIVE",
              "COMMERCIAL",
              "MUSIC-VIDEOS",
              "BIO",
              "GEAR",
              "CONTACT",
            ].map((link, index) => (
              <li
                key={index}
                className="hover:underline"
                onClick={() => handleScroll(link.toLowerCase())}
              >
                {link}
              </li>
            ))}
          </ul>
        </div>
        <hr className="border-b-1 border-secondary-100" />
      </div>
    </>
  );
};

export default Navbar;
