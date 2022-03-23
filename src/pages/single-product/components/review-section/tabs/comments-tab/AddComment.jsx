import React, { useState, useEffect } from "react";
import ReactStars from "react-rating-stars-component";
import { useDetectClickOutside } from "react-detect-click-outside";
import { toast } from "react-toastify";

import { MdClose } from "react-icons/md";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const AddComment = ({ productName, close }) => {
  const [disableSubmit, setDisableSubmit] = useState(true);
  const [rate, setRate] = useState(null);
  const [commentTitle, setCommentTitle] = useState("");
  const [commentText, setCommentText] = useState("");
  const ref = useDetectClickOutside({ onTriggered: close });

  //   validating the  fields
  const validateComment = () => {
    if (commentTitle.trim() !== "" && commentText.trim() !== "" && rate) {
      setDisableSubmit(false);
    } else {
      setDisableSubmit(true);
    }
  };
  useEffect(() => {
    validateComment();
  }, [rate, commentTitle, commentText]);

  const RATING_CONFIG = {
    count: 5,
    size: 24,
    activeColor: "#ffd700",
    value: rate,
    isHalf: true,
    emptyIcon: <FaRegStar />,
    filledIcon: <FaStar />,
    halfIcon: <FaStarHalfAlt />,
    onChange: (val) => setRate(val),
  };

  const postComment = (e) => {
    e.preventDefault();
    close();
    toast.success("دیدگاه شما ثبت گردید و پس از بازبینی منتشر خواهد شد.");
  };

  return (
    <div className="add-comment" ref={ref}>
      <section className="add-comment__heading">
        <section>
          <h5 className="add-comment__heading__title">دیدگاه شما</h5>
          <small className="product__name">{productName}</small>
        </section>
        <MdClose className="close-icon" onClick={close} />
      </section>

      <form
        action="#"
        method="post"
        className="comment-form"
        onSubmit={(e) => postComment(e)}
      >
          {/* rating section */}
        <section className="form__gropu" id="rate-container">
          <label className="comment-form__label">*امتیاز شما : {rate}</label>
          <ReactStars {...RATING_CONFIG} />
        </section>


        <section className="form__group">
          <label htmlFor="comment-title" className="comment-form__label">
            *عنوان دیدگاه
          </label>
          <input
            type="text"
            name="comment-title"
            className="comment-form__input"
            value={commentTitle}
            onChange={(e) => setCommentTitle(e.target.value)}
          />
        </section>

        <section className="form__group">
          <label htmlFor="comment-text" className="comment-form__label">
            *متن دیدگاه
          </label>
          <textarea
            type="text"
            name="comment-text"
            className="comment-form__input"
            cols={10}
            id="comment-text"
            value={commentText}
            onChange={(e) => setCommentText(e.target.value)}
          />
        </section>
        
        <button
          type="submit"
          disabled={disableSubmit}
          className="comment-form__submit comments-tab__cta-button"
        >
          ثبت دیدگاه
        </button>
      </form>
    </div>
  );
};

export default AddComment;
