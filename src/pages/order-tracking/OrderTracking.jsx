import React, { useState } from "react";

import emptyList from "../../assets/images/utilities/emptyList.svg";
import "./OrderTracking.scss";

const OrderTracking = () => {
  const [activeTab, setActiveTab] = useState("proccessing");

  const changeActiveTab = (e) => {
    setActiveTab(e.target.dataset.tab);
  };
  return (
    <div className="order-tracking">
      <div className="container">
        <div className="row">
          <h5 className="order-tracking__heading heading-after">
            پیگیری سفارشات
          </h5>

          <nav className="orders-category">
            <span
              className={`orders-category__item ${
                activeTab === "proccessing" && "orders-category__item--active"
              }`}
              data-tab="proccessing"
              onClick={(e) => changeActiveTab(e)}
            >
              در حال پردازش
            </span>
            <span
              className={`orders-category__item ${
                activeTab === "delivered" && "orders-category__item--active"
              }`}
              onClick={(e) => changeActiveTab(e)}
              data-tab="delivered"
            >
              تحویل داده شده
            </span>
            <span
              className={`orders-category__item ${
                activeTab === "cancled" && "orders-category__item--active"
              }`}
              onClick={(e) => changeActiveTab(e)}
              data-tab="cancled"
            >
              لغو شده
            </span>
          </nav>

          <div className="tab">
            {activeTab === "proccessing" ? (
              <ProccessingOrders />
            ) : (
              <EmptyList />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const ProccessingOrders = () => {
  const submitedOrders = JSON.parse(localStorage.getItem("orderHistory"));
  return (
    <div className="proccessing-orders">
      {submitedOrders ? (
        submitedOrders.map((orderList) => {
          const { name, date } = orderList.deliveryInfo.deliveryDay;
          const { timeStart, timeEnd } = orderList.deliveryInfo.deliveryTime;
          return (
            <div className="proccessing-order">
              <section className="proccessing-order__heading">
                <h6 className="order-status">در حال آماده سازی...</h6>
                <span className="delivery-date">
                  زمان تحویل : {name} {date} {orderList.deliveryInfo.month} -
                  ساعت {timeStart} تا {timeEnd}
                </span>
              </section>

              <section className="proccessing-order__cart-items">
                {orderList.cartItems.map((item) => (
                  <img src={item.image} alt={item.localName} />
                ))}
              </section>
            </div>
          );
        })
      ) : (
        <EmptyList />
      )}
    </div>
  );
};

const EmptyList = () => {
  return (
    <div className="empty-list">
      <figure className="image-container">
        <img src={emptyList} alt="لیست سفارش خالی" />
      </figure>
      <p className="text">موردی یافت نشد.</p>
    </div>
  );
};

export default OrderTracking;
