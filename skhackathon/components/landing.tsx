import { useState } from 'react';

const Landing = () => {
  const [isClicked, setIsClicked] = useState(false);
  return (
    <section
      className="w-screen h-screen pt-[70px] overflow-hidden"
      onClick={() => setIsClicked(true)}
    >
      <div className="flex">
        <div>
          <img
            className={`transform transition-all duration-[1.5s] ${
              isClicked ? 'translate-x-[-200px]' : 'translate-x-[-5px]'
            }`}
            src="images/landing/left-curtain.png"
            alt="left-curtain"
          />
        </div>
        <div>
          <img
            className={`transform transition-all duration-[1.5s] ${
              isClicked ? 'translate-x-[200px]' : 'translate-x-[5px]'
            }`}
            src="images/landing/right-curtain.png"
            alt="right-curtain"
          />
        </div>
      </div>
      <img
        className={`absolute top-20 transition-all duration-[1s] ${
          isClicked ? 'opacity-0' : 'opacity-100'
        }`}
        src="images/landing/bar.png"
        alt="bar"
      />
      <h1
        className={`absolute left-[50%]  top-[50%] transform translate-x-[-50%] translate-y-[-50%] typo-h1 text-white text-center w-[350px] transition-all duration-[2s] ${
          isClicked ? 'opacity-0' : 'opacity-100'
        }`}
      >
        ยินดีต้อนรับสู่ <br />
        สำนัก SKOOLDIO
        <br />
        สำนักแห่งการคัดสรรคอร์ส
        <br />
        ให้เหมาะกับ เหล่าผู้วิเศษณ์
      </h1>
      <img
        className={`absolute top-[20%] left-[55%] animate-float transition-all duration-[5s] ${
          isClicked ? 'top-[-20%]' : 'top-[20%]'
        }`}
        src="images/landing/moon.png"
        alt="moon"
      />
      <img
        className={`absolute top-[30%] left-[15%] animate-float-1 transition-all duration-[5s] ${
          isClicked ? 'top-[-10%]' : 'top-[30%]'
        }`}
        src="images/landing/star.png"
        alt="star"
      />
      <img
        className={`absolute top-[65%] left-[25%] animate-float-2 transition-all duration-[5s] ${
          isClicked ? 'top-[15%] opacity-0' : 'top-[65%] opacity-100'
        }`}
        src="images/landing/star.png"
        alt="star"
      />
      <img
        className={`absolute top-[65%] left-[60%] animate-float-3 transition-all duration-[5s] ${
          isClicked ? 'top-[15%] opacity-0' : 'top-[65%] opacity-100'
        }`}
        src="images/landing/star.png"
        alt="star"
      />
      <img
        className={`absolute transition-all duration-[5s] ${
          isClicked ? 'opacity-100 top-0' : 'opacity-0 top-[90%]'
        }`}
        src="images/doorway.png"
        alt="doorway"
      />
    </section>
  );
};

export default Landing;
