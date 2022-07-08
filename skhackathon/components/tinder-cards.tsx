import { FunctionComponent, useEffect, useState } from 'react';
import TinderCard from 'react-tinder-card';
import EyeLoading from './eye-loading';
import QuestionCard from './question-card';
import ResultCard from './result-card';

import { gql, useQuery } from '@apollo/client';
import { Question } from '@prisma/client';

const getAllQuestion = gql`
  query getAllQuestion {
    questions {
      id
      question
    }
  }
`;

// const questions = [
//   { id: 0, question: 'คุณสนใจด้านการเขียนโค้ดไหม?' },
//   { id: 2, question: 'คุณสนใจด้านการเขียนไหม?' },
//   { id: 3, question: 'คุณสนใจไหม?' },
//   { id: 4, question: 'อ้ากกกกกก?' },
// ];
type TinderCardsProps = {
  name: string;
};

const TinderCards: FunctionComponent<TinderCardsProps> = ({ name }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [isDone, setIsDone] = useState(false);

  useEffect(() => {
    if (isLoading) {
      setInterval(() => {
        setIsDone(true);
      }, 3000);
    }
  }, [isLoading]);

  const { loading, error, data } = useQuery(getAllQuestion);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  const questions = data.questions;
  // console.log(questions);

  const onSwipe = (direction: string, name: string) => {
    // console.log('You swiped: ' + direction + name);
    if (name === questions[questions.length - 1].question) {
      setInterval(() => {
        setIsLoading(true);
      }, 1000);
    }
  };

  const onOutOfFrame = (id: number) => {
    // console.log(id + ' left the screen');
  };

  return (
    <section
      className={`text-white ${
        isDone ? 'h-full' : 'h-[930px]'
      }  relative overflow-hidden`}
    >
      {isDone && <ResultCard />}
      {isLoading && !isDone && <EyeLoading />}
      {!isLoading && (
        <>
          <div className="flex flex-col text-center items-center justify-center p-4">
            <h1 className="typo-h1 z-10">
              เพื่อความแม่นยำ
              <br />
              ทางสำนักขอรู้จักกับ
              <br />
              คุณ{name}อีกนิดนะ
            </h1>
            <p className="typo-p z-10 mt-3">
              ปัดไพ่ไปทางวาถ้าคุณเห็นด้วย
              <br />
              หรือปัดซ้ายถ้าคุณไม่เห็นด้วย
            </p>
            <img
              className="absolute top-0"
              src="images/stars.svg"
              alt="stars"
            />
          </div>
          <div className="relative">
            {[...questions].reverse().map(({ id, question }: Question) => (
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
        </>
      )}
    </section>
  );
};

export default TinderCards;
