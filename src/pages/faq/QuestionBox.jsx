import React from "react";
import { IoIosArrowDown } from "react-icons/io";

const QuestionBox = ({ item, activeQuestion, setActiveQuestion }) => {
  const questionClick = (id) => {
    if (activeQuestion === id) {
      setActiveQuestion(null);
    } else {
      setActiveQuestion(id);
    }
  };

  return (
    <article className="question-box" key={item.id}>
      <section
        className="question-box__question-container"
        onClick={() => questionClick(item.id)}
      >
        <p className="question">{item.question}</p>
        <span
          className={`icon-container ${
            activeQuestion === item.id ? "icon-container--rotated" : ""
          }`}
        >
          <IoIosArrowDown />
        </span>
      </section>
      <section
        className={`question-box__answer-container ${
          activeQuestion === item.id
            ? "question-box__answer-container--active"
            : ""
        }`}
      >
        <p className="answer">
        {item.answer}
        {item.ref ? item.ref : null}
        </p>
      </section>
    </article>
  );
};

export default QuestionBox;
