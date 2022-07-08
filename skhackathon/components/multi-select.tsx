import { gql, useQuery } from '@apollo/client';
import { Keyword } from '@prisma/client';

import { FunctionComponent } from 'react';
import { useState } from 'react';
import Button from './button';

type MultiSelectProps = {
  name: string;
};

const getAllKeyword = gql`
  query getKeyword {
    keywords {
      id
      word
    }
  }
`;

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

  const { loading, error, data } = useQuery(getAllKeyword);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;

  const keywords = data.keywords;

  return (
    <section className="flex flex-col items-center">
      <div>
        <h1 className="typo-h1 text-white text-center my-7">
          คุณ{name}มีความรู้ด้าน
        </h1>
        <div className="grid grid-cols-2 gap-4 px-4 mb-20">
          {keywords.map(({ id, word }: Keyword) => (
            <button
              key={`keyword-${id}`}
              onClick={() => handleKnowledge(knowledge, word)}
            >
              <Button
                className="h-full flex justify-center items-center hover:border-[#ff6928] transition-all"
                variant={knowledge.includes(word) ? 'orange' : undefined}
              >
                {word}
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
          {keywords.map(({ id, word }: Keyword) => (
            <button
              key={`choice-${id}`}
              onClick={() => handleWishList(wishList, word)}
            >
              <Button
                className="h-full flex justify-center items-center hover:border-[#36b2ff] transition-all"
                variant={wishList.includes(word) ? 'blue' : undefined}
              >
                {word}
              </Button>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MultiSelect;
