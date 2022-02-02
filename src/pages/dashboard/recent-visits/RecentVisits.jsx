import React from "react";
import emptyList from "../../../assets/images/utilities/emptyList.svg";
import "./RecentVisits.scss";

const RecentVisits = () => {
  return (
    <div className="dashboard__block recent-visits">
        <h4 className="dashboard__block__heading">بازدید های اخیر</h4>
      <section className="recent-visits--empty">
        <figure className="image-container">
          <img src={emptyList} alt="empty-list" className="empty-list-image" />
          <figcaption className="empty-list-text">
            شما اخیرا از محصولی بازدید نکرده اید.
          </figcaption>
        </figure>
      </section>
    </div>
  );
};

export default RecentVisits;
