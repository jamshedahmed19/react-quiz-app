import React from "react";
import { AnswerObject } from "../App";
import { Wrapper } from "./QuestionCard.Styles";

type Props = {
  question: string;
  answers: string[];
  callback: (e: React.MouseEvent<HTMLButtonElement>) => void;
  userAnswer: AnswerObject | undefined;
  questionNum: number;
  totalQuestions: number;
};

function QuestionCard({
  question,
  answers,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}: Props) {
  return (
    <Wrapper>
      <p className="Qnumber">
        Question: {questionNum} / {totalQuestions}
      </p>
      <p dangerouslySetInnerHTML={{ __html: question }} />
      <div className="options">
        {answers.map((answer) => (
          <div key={answer}>
            <button
              className="select"
              disabled={userAnswer ? true : false}
              value={answer}
              onClick={callback}
            >
              <span dangerouslySetInnerHTML={{ __html: answer }} />
            </button>
          </div>
        ))}
      </div>
    </Wrapper>
  );
}

export default QuestionCard;
