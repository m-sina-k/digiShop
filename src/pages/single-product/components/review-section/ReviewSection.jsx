import React, { useState } from "react";
import { MdOutlineDescription, MdOutlineModeComment } from "react-icons/md";
import { BsGear } from "react-icons/bs";
import "./ReviewSection.scss";
import DescTab from "./tabs/desc-tab/DescTab";
import DetailsTab from "./tabs/details-tab/DetailsTab";
import CommentsTab from "./tabs/comments-tab/CommentsTab";

const ReviewSection = ({ product }) => {
  const tab_buttons = [
    {
      id: 1,
      text: "معرفی",
      icon: <MdOutlineDescription className="tab-button__icon" />,
      tabId: "desc",
    },
    {
      id: 2,
      text: "مشخصات",
      icon: <BsGear className="tab-button__icon" />,
      tabId: "details",
    },
    {
      id: 3,
      text: "دیدگاه کاربران",
      icon: <MdOutlineModeComment className="tab-button__icon" />,
      tabId: "comments",
    },
  ];

  const [activeTab, setActiveTab] = useState(tab_buttons[0].tabId);

  const changeActiveTab = (e) => {
    const tabId = e.currentTarget.dataset.tabid;
    if (activeTab !== tabId) setActiveTab(tabId);
  };

  const renderTabs = () => {
    switch (activeTab) {
      case "desc":
        return <DescTab description={product.description} />;
      case "details":
        return (
          <DetailsTab
            productName={
              product.officialName ? product.officialName : product.localName
            }
            information={product.information.infoList}
          />
        );
      case "comments":
        return (
          <CommentsTab
            productName={
              product.officialName ? product.officialName : product.localName
            }
          />
        );
      default:
        return <DescTab description={product.description} />;
    }
  };

  return (
    <div className="review-section">
      <nav className="review-section__header">
        {tab_buttons.map((item) => (
          <span
            className={`review-section__tab-button ${
              item.tabId === activeTab
                ? "review-section__tab-button--active"
                : ""
            }`}
            key={item.id}
            data-tabid={item.tabId}
            onClick={(e) => changeActiveTab(e)}
          >
            {item.icon}
            {item.text}
          </span>
        ))}
      </nav>

      <div className="active-tab__container">{renderTabs()}</div>
    </div>
  );
};

export default ReviewSection;
