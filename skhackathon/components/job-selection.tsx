import { useState } from 'react';

const JobSelection = () => {
  const [selectedJob, setSelectedJob] = useState('');
  const jobCardStyling =
    'absolute opacity-80 left-[50%] z-[5] transform translate-x-[-50%] grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-200 cursor-pointer';
  const selectedCardStyling = 'z-20 grayscale-0 opacity-100 ';
  const jobs = ['business', 'tech', 'data', 'design'];
  return (
    <section className="relative text-white h-[1200px]">
      <div className="flex flex-col text-center items-center justify-center h-[180px]">
        <h1 className="typo-h1 z-10">
          บนโลกมนุษย์ <br />
          คุณทำงานในสาย
        </h1>
        <p className="typo-p z-10 mt-3">
          (เลือกไพ่ที่ใกล้เคียงกับสายงานคุณที่สุด)
        </p>
        <img className="absolute top-0" src="images/world.png" alt="world" />
      </div>
      <div className="relative">
        {jobs.map((job, index) => (
          <img
            key={index + '-' + job}
            onClick={() => setSelectedJob(job)}
            className={`top-[${index * 112}px] hover:top-[${
              index * 112 - 16
            }px] ${jobCardStyling} ${
              selectedJob === job ? selectedCardStyling + 'top-[-16px]' : ''
            }`}
            src={`/images/job-cards/${job}.svg`}
            alt={job}
          />
        ))}
        {/* <img
          onClick={() => setSelectedJob('data')}
          className={`top-0 hover:top-[-16px] ${jobCardStyling} ${
            selectedJob === 'data' ? selectedCardStyling + 'top-[-16px]' : ''
          }`}
          src="/images/card.png"
          alt="card-data"
        />
        <img
          onClick={() => setSelectedJob('design')}
          className={`top-[112px] hover:top-[96px] ${jobCardStyling} ${
            selectedJob === 'design' ? selectedCardStyling + 'top-[96px]' : ''
          }`}
          src="/images/card.png"
          alt="card-design"
        />
        <img
          onClick={() => setSelectedJob('business')}
          className={`top-[224px] hover:top-[208px] ${jobCardStyling} ${
            selectedJob === 'business'
              ? selectedCardStyling + 'top-[208px]'
              : ''
          }`}
          src="/images/card.png"
          alt="card-business"
        />
        <img
          onClick={() => setSelectedJob('tech')}
          className={`top-[336px] hover:top-[320px ${jobCardStyling} ${
            selectedJob === 'tech' ? selectedCardStyling + 'top-[320px]' : ''
          }`}
          src="/images/card.png"
          alt="card-tech"
        /> */}
      </div>
    </section>
  );
};

export default JobSelection;
