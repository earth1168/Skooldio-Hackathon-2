import { MutableRefObject, useEffect, useRef, useState } from 'react';
import scrollama from 'scrollama';
import Button from './button';
import ExternalLink from './external-link';

const SuggestedCourses = () => {
  const sectionsContainer = useRef() as MutableRefObject<HTMLDivElement>;
  const [activeStep, setActiveStep] = useState(-1);
  useEffect(() => {
    scrollama()
      .setup({
        step: Array.from(sectionsContainer.current.children) as HTMLElement[],
        // debug: true,
        offset: 0.8,
        // once: true,
      })
      .onStepEnter(({ index }) => {
        setActiveStep(index);
      });
    // console.log(activeStep);
  }, [activeStep]);

  const [isSaved, setIsSaved] = useState(false);

  return (
    <section>
      <div className="relative my-24">
        <h1 className="typo-h1 text-white text-center">
          ตามนิมิต เราได้ทำการคัดสรรคอร์สที่จะอัพสกิลให้คุณ
        </h1>
        <img
          className="absolute top-0 left-2"
          src="images/stars.svg"
          alt="stars"
        />
      </div>
      <div className="relative" ref={sectionsContainer}>
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 0
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-1.png"
          alt="course-1"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 1
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-2.png"
          alt="course-2"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 2
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-3.png"
          alt="course-3"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 3
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-4.png"
          alt="course-4"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 4
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-5.png"
          alt="course-5"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 5
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-6.png"
          alt="course-6"
        />
        <img
          className={`transform transition-all duration-500 ${
            activeStep >= 6
              ? 'opacity-100 translate-y-0 scale-100'
              : 'opacity-0 translate-y-40 scale-50'
          }`}
          src="images/suggested-courses/course-7.png"
          alt="course-7"
        />
        <img className="relative m-auto" src="images/flag.png" alt="flag" />
      </div>
      <div className="bg-gradient-to-b from-transparent to-[#7B42A8]">
        <h1 className="typo-h1 text-white text-center px-4 pt-16 pb-4">
          ลงทะเบียนกับ SKOOLDIO เพื่อติดตามหนทางที่จะ ทำให้คุณกลายเป็น Expert
          ด้วย Learning path
        </h1>
        <ExternalLink href="https://www.skooldio.com/register">
          <Button
            variant="orange"
            className="flex w-fit px-8 items-center m-auto"
          >
            ลงทะเบียน
          </Button>
        </ExternalLink>
        <div className="flex flex-col items-center pb-12">
          <h1 className="typo-h1 text-white text-center px-4 pt-16 pb-4">
            หรือบันทึก Learning Path <br /> ของคุณฟรี!
          </h1>
          <input
            className="border-2 m-auto border-gray-200 rounded w-[300px] h-[58px] py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 text-[20px] text-center"
            id="username"
            type="text"
            placeholder="อีเมล: user@skooldio.com"
          />
          <button onClick={() => setIsSaved(true)}>
            <Button
              variant="blue"
              className="flex w-[300px] px-8 items-center justify-center m-auto"
            >
              {isSaved ? 'บันทึกสำเร็จ ✅' : 'บันทึก'}
            </Button>
            <p className="typo-p text-white px-8 mt-4">
              {isSaved
                ? 'เราได้ส่ง learning path นี้ไปให้ในอีเมลคุณเรียบร้อย อย่าลืมเช็คช่องแสปมด้วยนะ!'
                : null}
            </p>
          </button>
        </div>
      </div>
    </section>
  );
};

export default SuggestedCourses;
