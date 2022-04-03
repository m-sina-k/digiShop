import React from "react";
import { Link } from "react-router-dom";
import { BsBoxSeam, BsShieldCheck } from "react-icons/bs";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../../../features/slices/cartSlice";
import "./BuyBox.scss";

const BuyBox = ({
  product,
  selectedGuarantee,
  setSelectedGuarantee,
  addItemToCart,
  removeItemFromCart,
  itemInCart,
}) => {
  const dispatch = useDispatch();

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
                    selectedGuarantee === item.title
                      ? "buy-box__block__option--active"
                      : ""
                  }`}
                  key={item.id}
                  onClick={() => setSelectedGuarantee(item.title)}
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
            {itemInCart ? (
              <section className="item-in-cart">
                <p className="item-in-cart__text">.
                  این کالا در
                  <Link to="/cart" className="ref-link">
                    سبد خرید
                  </Link>
                 شما موجود است
                </p>
                <button
                className="remove-from-cart-button"
                onClick={() => removeItemFromCart(product.id)}
              >
                حذف از سبد خرید
              </button>
              </section>
            ) : (
              <button
                className="add-to-cart-button"
                onClick={() => addItemToCart(product)}
              >
                افزودن به سبد خرید
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BuyBox;
