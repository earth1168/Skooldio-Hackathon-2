import { MutableRefObject, useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Button from './button';
import ExternalLink from './external-link';

let sharedUrl: string = '';

const ResultCard = () => {
  const sectionsContainer = useRef() as MutableRefObject<HTMLDivElement>;
  const [activeStep, setActiveStep] = useState(-1);
  useEffect(() => {
    scrollama()
      .setup({
        step: Array.from(sectionsContainer.current.children) as HTMLElement[],
        // debug: true,
        offset: 0.8,
        once: true,
      })
      .onStepEnter(({ index }) => {
        setActiveStep(index);
      });
    // console.log(activeStep);
  }, [activeStep]);

  useEffect(() => {
    sharedUrl = encodeURI(
      `${window.location.protocol}//${window.location.host}${window.location.pathname}`
    );
  }, []);

  return (
    <section className="text-white text-center mt-16" ref={sectionsContainer}>
      <div className="relative overflow-hidden">
        <h1 className="typo-h1 mb-12">
          ก่อนที่เราจะคัดสรรคอร์ส
          <br />
          ที่เหมาะสมคุณ... <br />
          สำนัก SKOOLDIO <br />
          ได้วิเคราะห์ศักยภาพ <br />
          ของคุณมาให้แล้ว
        </h1>
        <img
          className="absolute top-8 left-2"
          src="images/stars.svg"
          alt="stars"
        />
      </div>
      <img
        className={`m-auto transition-all transform duration-1000 ${
          activeStep >= 1
            ? 'translate-y-0 opacity-100'
            : 'translate-y-40 opacity-0'
        }`}
        src="images/result-card/card.svg"
        alt="result-card"
      />
      <p
        className={`typo-p px-8 mb-8 transition-all duration-500 ${
          activeStep >= 2 ? 'opacity-100' : 'opacity-0'
        }`}
      >
        คุณคือจอมเวทย์ผู้สรรค์สร้างอนาคต เหมาะสำหรับคนที่ชอบเรียนภาษาโบราณ
        และศาสตร์ลึกลับ ทำหน้าที่เขียนโค้ดจาก ภาษาคอมพิวเตอร์ไหนก็ได้
        ให้ออกมาเป็นเว็บไซต์ที่ใช้งานได้
      </p>
      <ExternalLink
        href={`http://www.facebook.com/sharer/sharer.php?u=${sharedUrl}`}
      >
        <Button
          variant="orange"
          className="flex w-fit px-8 items-center m-auto"
        >
          <p>แชร์ไพ่ของคุณ </p>
          <svg
            width="17"
            height="16"
            viewBox="0 0 17 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <mask
              id="mask0_198_768"
              maskUnits="userSpaceOnUse"
              x="0"
              y="0"
              width="17"
              height="16"
            >
              <rect x="0.5" width="16" height="16" fill="#D9D9D9" />
            </mask>
            <g mask="url(#mask0_198_768)">
              <path
                d="M2.5 12.6668H3.83333V10.0002C3.83333 9.44461 4.02778 8.97239 4.41667 8.5835C4.80556 8.19461 5.27778 8.00016 5.83333 8.00016H11.9667L9.56667 10.4002L10.5 11.3335L14.5 7.3335L10.5 3.3335L9.56667 4.26683L11.9667 6.66683H5.83333C4.91111 6.66683 4.12511 6.99172 3.47533 7.6415C2.82511 8.29172 2.5 9.07794 2.5 10.0002V12.6668Z"
                fill="white"
              />
            </g>
          </svg>
        </Button>
      </ExternalLink>
    </section>
  );
};

export default ResultCard;
