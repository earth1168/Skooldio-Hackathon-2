import { FunctionComponent } from 'react';

type QuestionCardProps = {
  question: string;
};

const QuestionCard: FunctionComponent<QuestionCardProps> = ({ question }) => {
  return (
    <>
      <img
        className="m-auto"
        src="images/question-card.svg"
        alt="question-card"
      />
      <h1 className="absolute top-[40%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] typo-h1 text-black text-center w-[270px]">
        {question}
      </h1>
    </>
  );
};

export default QuestionCard;
