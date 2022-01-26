import React from "react";
import { MdClose } from "react-icons/md";
import { BiSearch } from "react-icons/bi";
import "./MobileSearchbar.scss";

const MobileSearchbar = ({ showMobileSearchbar, setShowMobileSearchbar }) => {
  /* ----------------- close mobile searchbar on large screens ---------------- */
  window.addEventListener("resize", () => {
    if (window.innerWidth > 992) {
      setShowMobileSearchbar(false);
    }
  });

  return (
    <div
      className={`mobile-searchbar  ${
        showMobileSearchbar ? "mobile-searchbar--active" : ""
      }`}
    >
      <section className="mobile-searchbar__heading">
        <h4 className="title">جستجو</h4>
        <span
          className="close-button"
          onClick={() => setShowMobileSearchbar(false)}
        >
          <MdClose className="close-icon" />
        </span>
      </section>


      <form action="#" method="get" className="mobile-searchbar__form">
        <input
          type="search"
          name="mobile-search"
          id="mobile-search"
          placeholder="جستجو کنید..."
        />
        <button type="submit" className="searchbar-button">
          <BiSearch className="search-icon" />
        </button>
      </form>
    </div>
  );
};

export default MobileSearchbar;
