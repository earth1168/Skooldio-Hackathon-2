import type { NextPage } from 'next';
import { useState } from 'react';
import { Link } from 'react-scroll';

import InstructorCarousel from '../components/instructor-carousel';
import JobSelection from '../components/job-selection';
import TinderCards from '../components/tinder-cards';
import Landing from '../components/landing';
import MultiSelect from '../components/multi-select';
import SuggestedCourses from '../components/suggested-courses';
import Header from '../components/header';
import Navbar from '../components/navbar';

const Home: NextPage = () => {
  const [name, setName] = useState('');
  return (
    <>
      <Header />
      <main className="gradient-bg">
        <div className="fixed w-screen z-40">
          <Navbar />
        </div>
        <Landing />
        <section
          className={`flex flex-col mt-[120px] items-center h-[70vh] transition-all duration-500`}
        >
          <h1 className="typo-h1 text-white text-center z-30">
            ก่อนพิธีจะเริ่ม... <br />
            เราขอทราบชื่อของคุณ
          </h1>
          <div className="relative">
            <input
              className="border-2 z-30 border-gray-200 rounded w-[300px] h-[58px] py-2 px-3 my-4 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 typo-h1 text-center"
              id="username"
              type="text"
              placeholder="ตัวอย่าง เอิร์ธ"
              onChange={(e) => setName(e.target.value)}
            />
            <img
              className="absolute -top-[60px] -left-[90px]"
              src="/images/witch.png"
              alt="witch"
            />
          </div>
          <Link
            activeClass="active"
            to="job-selection"
            spy={true}
            smooth={true}
            offset={-30}
            duration={500}
          >
            <div
              className={`flex cursor-pointer justify-center items-center w-[100px] h-[100px] border border-white rounded-full text-white mt-8 transition-all duration-1000 ${
                name !== ''
                  ? 'bg-yellow-600 bg-opacity-40 font-bold shadow-inner shadow-yellow-200'
                  : null
              }`}
            >
              ไปต่อ
            </div>
          </Link>
        </section>
        <div id="job-selection">
          <JobSelection />
        </div>
        <MultiSelect name={name} />
        <TinderCards name={name} />
        <InstructorCarousel />
        <SuggestedCourses />
      </main>
    </>
  );
};

export default Home;
