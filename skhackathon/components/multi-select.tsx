import { FunctionComponent } from 'react';
import { useState } from 'react';
import Button from './button';

type MultiSelectProps = {
  name: string;
};

const choices = ['พัฒนาเว็บไซต์', 'พัฒนาเว็บ', 'พัฒนาเว็บไซต์sdasds'];

const MultiSelect: FunctionComponent<MultiSelectProps> = ({ name }) => {
  const [knowledge, setKnowledge] = useState([] as string[]);
  const [wishList, setWishlist] = useState([] as string[]);

  const handleKnowledge = (knowledge: string[] = [], choice: string) => {
    if (!knowledge.includes(choice)) {
      setKnowledge([...knowledge, choice]);
    } else {
      setKnowledge(knowledge.filter((item) => item !== choice));
    }
  };

  const handleWishList = (wishList: string[] = [], choice: string) => {
    if (!wishList.includes(choice)) {
      setWishlist([...wishList, choice]);
    } else {
      setWishlist(wishList.filter((item) => item !== choice));
    }
  };

  return (
    <section className="flex flex-col items-center">
      <div>
        <h1 className="typo-h1 text-white text-center my-7">
          คุณ{name}มีความรู้ด้าน
        </h1>
        <div className="grid grid-cols-2 gap-4 px-4 mb-20">
          {choices.map((choice, index) => (
            <button
              key={`choice-${index}`}
              onClick={() => handleKnowledge(knowledge, choice)}
            >
              <Button
                variant={knowledge.includes(choice) ? 'orange' : undefined}
              >
                {choice}
              </Button>
            </button>
          ))}
        </div>
      </div>
      <div>
        <h1 className="typo-h1 text-white  text-center my-7">
          คุณ{name}ปรารถนา <br />
          ที่จะเรียนรู้
        </h1>
        <div className="grid grid-cols-2 gap-4 px-4 mb-20">
          {choices.map((choice, index) => (
            <button
              key={`choice-${index}`}
              onClick={() => handleWishList(wishList, choice)}
            >
              <Button variant={wishList.includes(choice) ? 'blue' : undefined}>
                {choice}
              </Button>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiSelect;
