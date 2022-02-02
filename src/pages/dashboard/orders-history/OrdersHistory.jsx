import React from "react";
import "./OrdersHistory.scss";

const OrdersHistory = () => {
  return (
    <div className="orders-history">
      <table className="orders-table">
        <thead>
        <tr className="orders-table__heading">
          <td className="orders-table__heading__item">#</td>
          <td className="orders-table__heading__item">شماره سفارش</td>
          <td className="orders-table__heading__item"> تاریخ ثبت سفارش</td>
          <td className="orders-table__heading__item">مبلغ سفارش</td>
          <td className="orders-table__heading__item">وضعیت سفارش</td>
        </tr>
        </thead>
        <tbody>
        <tr className="orders-table__list">
          <td className="orders-table__list__item">1</td>
          <td className="orders-table__list__item">Fekx85qfopth</td>
          <td className="orders-table__list__item">1400/05/23</td>
          <td className="orders-table__list__item">197,000 هزار تومان</td>
          <td className="orders-table__list__item">تحویل داده شده</td>
        </tr>
        </tbody>
      </table>
    </div>
  );
};

export default OrdersHistory;
