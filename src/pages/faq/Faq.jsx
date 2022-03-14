import React, { useState, useEffect } from "react";
import { RiQuestionnaireFill } from "react-icons/ri";
import { faq, categories } from "../../assets/data/faq";
import "./Faq.scss";
import QuestionBox from "./QuestionBox";

const Faq = () => {
  document.title = "دیجی شاپ | ‌سوالات متداول";

  const initialCategory = categories[0].category;
  const [faqCategory, setFaqCategory] = useState(initialCategory);
  const [questionsList, setQuestionsList] = useState([faq]);
  const [activeQuestion, setActiveQuestion] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [queryMatchedQuestion, setQueryMatchedQuestions] = useState([]);

  useEffect(() => {
    setQuestionsList(faq.filter((item) => item.category === faqCategory));
  }, [faqCategory]);

  useEffect(() => {
    if (searchQuery.length >= 3) {
      setQueryMatchedQuestions(
        faq.filter(
          (item) =>
            item.question.match(searchQuery) || item.answer.match(searchQuery)
        )
      );
    } else {
      setQueryMatchedQuestions([]);
    }
  }, [searchQuery]);

  return (
    <div className="faq">
      {/* faq heading hero start */}
      <div className="container-fluid">
        <div className="row">
          <div className="faq__filters-section">
            <section className="faq__filters-section__heading">
              <span className="heading__icon">
                <RiQuestionnaireFill />
              </span>

              <section className="heading__text">
                <h5 className="heading__text__title">سوالات متداول</h5>
                <p className="heading__text__desc">
                  سوال خود را جستجو کنید یا از دسته بندی های زیر بیابید.
                </p>
              </section>
            </section>

            <section className="faq__filters-section__filters-conteiner">
              <input
                type="text"
                placeholder="لطفا حداقل 3 کاراکتر وارد کنید..."
                className="faq__search-input"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <section className="faq__filters__buttons-container">
                {categories.map((item) => (
                  <button
                    key={item.id}
                    data-category={item.category}
                    className={`faq__filter-button ${
                      faqCategory === item.category
                        ? "faq__filter-button--active"
                        : ""
                    }`}
                    onClick={(e) => setFaqCategory(e.target.dataset.category)}
                  >
                    {item.text}
                  </button>
                ))}
              </section>
            </section>
          </div>
        </div>
      </div>
      {/* faq heading hero end */}

      {/* faq questions start */}
      <div className="container">
        <div className="row">
          {queryMatchedQuestion.length ? (
            <div className="faq__search-results mb-3 py-2">
              <h3 className="heading-after faq__search-results__heading">
                نتایج جستجو
              </h3>
              {queryMatchedQuestion.map((item, index) => (
                <QuestionBox
                  key={index}
                  item={item}
                  activeQuestion={activeQuestion}
                  setActiveQuestion={setActiveQuestion}
                />
              ))}
            </div>
          ) : null}

          <div className="faq__container">
            {questionsList.map((item, index) => (
              <QuestionBox
                key={index}
                item={item}
                activeQuestion={activeQuestion}
                setActiveQuestion={setActiveQuestion}
              />
            ))}
          </div>
        </div>
      </div>
      {/* faq questions end */}
    </div>
  );
};

export default Faq;
