import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import "./DetailsTab.scss";

const DetailsTab = ({ productName, information }) => {
  const [showMore, setShowMore] = useState(false);
  const detailsList = showMore
    ? information
    : information.slice(0, information.length / 2);
  return (
    <div className="details-tab">
      <h5 className="details-tab__heading heading-after">مشخصات فنی</h5>
      <span className="product__name">{productName}</span>

      <ul className="details__container">
        {detailsList.map((item) =>
          Object.entries(item).map(([key, value], index) => (
            <li className="detail__item" key={index}>
              <span className="detail__item--key">{key}</span>
              <span className="detail__item--value">{value}</span>
            </li>
          ))
        )}
        <button
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
          {showMore ? <IoIosArrowUp /> : <IoIosArrowDown />}
        </button>
      </ul>
    </div>
  );
};

export default DetailsTab;
