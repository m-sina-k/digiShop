import React from "react";
import PersonalInfo from "./personal-info/PersonalInfo";
import RecentVisits from "./recent-visits/RecentVisits";
import OrdersHistory from "./orders-history/OrdersHistory";
import "./Dashboard.scss";

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="container">
        <div className="dashboard__row row">
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 personal-info__col my-2">
        <PersonalInfo />
        </div>
        <div className="col-12 col-sm-12 col-md-12 col-lg-6 col-xl-6 col-xxl-6 recent-visits__col my-2">
        <RecentVisits />
        </div>
        <div className="col-12 orders-history__col my-2">
        <OrdersHistory />
        </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
