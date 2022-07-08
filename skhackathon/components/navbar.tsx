const Navbar = () => {
  return (
    <div className="flex justify-between p-4">
      <img
        className="w-[120px] h-[48px]"
        src="/images/skooldio-nav.svg"
        alt="nav"
      />
      <div className="flex justify-center items-center bg-white w-[50px] h-[50px] rounded-full bg-opacity-10">
        <svg
          width="23"
          height="15"
          viewBox="0 0 23 15"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M2 2H21.2049"
            stroke="white"
            strokeWidth="2.70492"
            strokeLinecap="round"
          />
          <path
            d="M2 7.5H21.2049"
            stroke="white"
            strokeWidth="2.70492"
            strokeLinecap="round"
          />
          <path
            d="M2 13H21.2049"
            stroke="white"
            strokeWidth="2.70492"
            strokeLinecap="round"
          />
        </svg>
      </div>
    </div>
  );
};
export default Navbar;
