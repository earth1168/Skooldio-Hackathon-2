/* eslint-disable @next/next/no-img-element */
import { useState } from 'react';
import TinderCard from 'react-tinder-card';
import QuestionCard from './question-card';

const questions = [
  { id: 0, question: 'คุณสนใจด้านการเขียนโค้ดไหม?' },
  { id: 2, question: 'คุณสนใจด้านการเขียนไหม?' },
  { id: 3, question: 'คุณสนใจไหม?' },
  { id: 4, question: 'อ้ากกกกกก?' },
];

const TinderCards = () => {
  const onSwipe = (direction: string, name: string) => {
    console.log('You swiped: ' + direction + name);
  };

  const onOutOfFrame = (id: number) => {
    console.log(id + ' left the screen');
  };

  return (
    <section className="text-white h-[930px] relative overflow-hidden">
      <div className="flex flex-col text-center items-center justify-center p-4">
        <h1 className="typo-h1 z-10">
          ก่อนจะไปถึงบทสรุป
          <br />
          ไพคัดสรรอยากมองคุณ
          <br />
          ให้ลึกขึ้น (rewrite)
        </h1>
        <p className="typo-p z-10 mt-3">
          ตอบคำถามตามความเป็นจริงเพื่อการจัดสรรคอร์สที่เหมาะกับคุณนะ
        </p>
        <img className="absolute top-0" src="images/stars.svg" alt="stars" />
      </div>
      <div className="relative">
        {[...questions].reverse().map(({ id, question }) => (
          // @ts-ignore
          <TinderCard
            className="absolute"
            key={id}
            onSwipe={(dir) => onSwipe(dir, question)}
            onCardLeftScreen={() => onOutOfFrame(id)}
          >
            <div className="relative">
              <QuestionCard question={question} />
            </div>
          </TinderCard>
        ))}
      </div>
    </section>
  );
};

export default TinderCards;
