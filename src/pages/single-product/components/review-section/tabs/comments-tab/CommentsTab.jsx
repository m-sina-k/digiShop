import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { setShowBackdrop } from "../../../../../../features/slices/uiSlice";
import AddComment from "./AddComment";
import "./CommentsTab.scss";

const CommentsTab = ({ productName }) => {
  const dispatch = useDispatch();
  const { userToken } = useSelector((state) => state.authState);
  const [showAddCommentPopup, setShowAddCommentPopup] = useState(false);
  
  const openAddComment = ()=>{
    setShowAddCommentPopup(true)
    dispatch(setShowBackdrop(true));
  }

  const closeAddComment = ()=>{
    setShowAddCommentPopup(false)
    dispatch(setShowBackdrop(false));
  }
  return (
    <div className="comments-tab">
      {showAddCommentPopup && <AddComment close={closeAddComment} productName={productName} />}

      {/* current user comment cta */}
      <div className="comment-tab__cta-container">
        <h5 className="heading-after">دیدگاه شما</h5>
        {userToken ? (
          <div>
            <p className="comment-tab__cta-text">
              با ثبت نظر خود درباره این کالا به بهبود ارائه خدمات ما کمک نمایید.
            </p>
            <button
              className="comments-tab__cta-button"
              id="add-comment-button"
              onClick={openAddComment}
            >
              ثبت دیدگاه
            </button>
          </div>
        ) : (
          <div>
            <p className="comment-tab__cta-text">
              برای ثبت دیدگاه ابتدا وارد حساب کاربری خود شوید.
            </p>
            <Link to="/login" className="comments-tab__cta-button">
              ورود به حساب
            </Link>
          </div>
        )}
      </div>

      {/* other users comments section */}
      <div className="comments-section">
        <h5 className="comments-section__heading heading-after">
          دیدگاه کاربران
        </h5>

        <article className="user-comment">
          <section className="user-comment__heading">
            <span className="comment__rate comment__rate--green">4.0</span>
            <span className="comment__date">20 اسفند 1400</span>
            <span className="comment__user-name">مجید طاهریان</span>
          </section>
          <section className="user-comment__body">
            <p className="comment__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای
            </p>
          </section>
        </article>

        <article className="user-comment">
          <section className="user-comment__heading">
            <span className="comment__rate comment__rate--yellow">3.5</span>
            <span className="comment__date">28 بهمن 1400</span>
            <span className="comment__user-name">علی هاشمی</span>
          </section>
          <section className="user-comment__body">
            <p className="comment__text">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ، و با
              استفاده از طراحان گرافیک است، چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است، و برای شرایط فعلی تکنولوژی مورد
              نیاز، و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد،
              کتابهای زیادی در شصت و سه درصد گذشته حال و آینده، شناخت فراوان
              جامعه و متخصصان را می طلبد، تا با نرم افزارها شناخت بیشتری را
            </p>
          </section>
        </article>
      </div>
    </div>
  );
};

export default CommentsTab;
