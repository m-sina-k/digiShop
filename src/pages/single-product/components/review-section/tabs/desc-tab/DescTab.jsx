import React, { useState } from "react";
import { IoIosArrowDown,IoIosArrowUp } from "react-icons/io";
import "./DesctTab.scss";

const DescTab = ({ description }) => {
  const [showMore, setShowMore] = useState(false);
  return (
    <div className="desc-tab">
      <h5 className="desc-tab__heading heading-after">معرفی کالا</h5>

      <p className="product__description">
        {showMore ? description : description.slice(0, description.length / 2) + " ... "}
        <button
          className="read-more-button"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "نمایش کمتر" : "نمایش بیشتر"}
          {showMore ? <IoIosArrowUp/> : <IoIosArrowDown/>}
        </button>
      </p>
    </div>
  );
};

export default DescTab;
