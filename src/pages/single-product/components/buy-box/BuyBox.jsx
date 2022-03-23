import React, { useState } from "react";
import { BsBoxSeam, BsShieldCheck } from "react-icons/bs";
import './BuyBox.scss'

const BuyBox = ({ product }) => {
  const [guarantee, setGuarantee] = useState(
    product.guarantee ? product.guarantee.guranteeList[0].title : null
  );

  return (
    <div className="col-12 col-md-5 mx-auto">
      <div className="buy-box">
        {/* in stock block */}
        <div className="buy-box__block">
          <section className="buy-box__block__heading">
            <span className="icon-container">
              <BsBoxSeam className="icon" />
            </span>
            <section className="text-container">
              <h6 className="title">موجود در انبار دیجی شاپ</h6>
              <p className="description">ارسال از 2 روز کاری آینده</p>
            </section>
          </section>
        </div>

        {/* gurantee block */}
        <div className="buy-box__block">
          <section className="buy-box__block__heading">
            <span className="icon-container">
              <BsShieldCheck className="icon" />
            </span>
            <section className="text-container">
              <h6 className="title">گارانتی های موجود :</h6>
            </section>
          </section>
          <section className="option-container">
            {product.guarantee ? (
              product.guarantee.guranteeList.map((item) => (
                <span
                  className={`buy-box__block__option ${
                    guarantee === item.title
                      ? "buy-box__block__option--active"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => setGuarantee(item.title)}
                >
                  {item.title}
                  
                </span>
              ))
            ) : (
              <span className="buy-box__block__option buy-box__block__option--active">
                گارانتی سلامت فیزیکی و اصالت
              </span>
            )}
          </section>
        </div>

        {/* price block */}
        <div className="buy-box__block">
          <div className="price-container">
            {product.priceBeforeDiscount && (
              <section className="old-price__container">
                <span className="discount">{product.discount}%</span>
                <del className="old-price">
                  {product.priceBeforeDiscount.toLocaleString()}
                </del>
              </section>
            )}
            <strong className="price">
              {product.price.toLocaleString()} تومان
            </strong>
            <button className="add-to-cart-button">افزودن به سبد خرید</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
