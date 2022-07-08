import { gql, useQuery } from '@apollo/client';
import { Keyword } from '@prisma/client';

//เลือกเอาว่าใช้ query ไหน ก้อปไปได้เลย
const getAllKeyword = gql`
  query getKeyword {
    keywords {
      id
      word
    }
  }
`;

const getAllQuestion = gql`
  query getAllQuestion {
    question {
      id
      question
    }
  }
`;

const KeywordSelection = () => {
  const { loading, error, data } = useQuery(getAllKeyword);

  if (loading) return 'Loading...';
  if (error) return `Error! ${error.message}`;
  console.log('data', data);

  return (
    <div>
      {data.keywords.map((word: Keyword) => (
        <div> {word.word}</div>
      ))}
    </div>
  );
};

export default KeywordSelection;
