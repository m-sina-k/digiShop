import React, { useState, useEffect } from "react";
import PersonalInfoPopup from "./personal-info-popup/PersonalInfoPopup";
import { FiEdit } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { setShowBackdrop } from "../../../features/slices/uiSlice";
import "./PersonalInfo.scss";

const PersonalInfo = () => {
  const localStorageData = JSON.parse(localStorage.getItem("userInfo"));

  const [personalInfo, setPersonalInfo] = useState({
    name: localStorageData?.name || "-",
    email: localStorage.getItem("userEmail") || "-",
    zipCode: localStorageData?.zipCode || "-",
    address: localStorageData?.address || "-",
    phone: localStorageData?.phone || "-",
  });

  useEffect(() => {
    localStorage.setItem("userInfo", JSON.stringify(personalInfo));
  }, [personalInfo]);

  return (
    <div className="dashboard__block personal-info">
      <h4 className="dashboard__block__heading">اطلاعات شخصی</h4>
      <div className="info-container">
        <InfoBlock
          infoTitle="نام و نام خانوادگی"
          infoValue={personalInfo.name}
          refrence="name"
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <InfoBlock
          infoTitle="تلفن همراه"
          infoValue={personalInfo.phone}
          refrence="phone"
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <InfoBlock
          infoTitle="ایمیل"
          infoValue={personalInfo.email}
          extraClass="info__block--border-top"
          refrence="email"
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <InfoBlock
          infoTitle="کد پستی"
          infoValue={personalInfo.zipCode}
          extraClass="info__block--border-top"
          refrence="zipCode"
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
        <InfoBlock
          infoTitle="نشانی"
          infoValue={personalInfo.address}
          extraClass="info__block--border-top"
          refrence="address"
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      </div>
    </div>
  );
};

const InfoBlock = ({
  infoTitle,
  infoValue,
  extraClass,
  refrence,
  personalInfo,
  setPersonalInfo,
}) => {
  const dispatch = useDispatch();

  const [activePopup, setActivePopup] = useState({
    inputTitle: null,
    inputName: null,
  });

  const openPopup = (e) => {
    const ref = e.currentTarget.dataset.ref;
    dispatch(setShowBackdrop(true));
    switch (ref) {
      case "name":
        setActivePopup({ inputTitle: "نام و نام خانوادگی", inputName: ref });
        break;
      case "phone":
        setActivePopup({ inputTitle: "تلفن همراه", inputName: ref });
        break;
      case "email":
        setActivePopup({ inputTitle: "ایمیل", inputName: ref });
        break;
      case "zipCode":
        setActivePopup({ inputTitle: "کد پستی", inputName: ref });
        break;
      case "address":
        setActivePopup({ inputTitle: "نشانی", inputName: ref });
        break;
    }
  };

  return (
    <section className={`info__block ${extraClass ? extraClass : ""}`}>
      {activePopup.inputName && activePopup.inputTitle && (
        <PersonalInfoPopup
          inputTitle={activePopup.inputTitle}
          inputName={activePopup.inputName}
          setActivePopup={setActivePopup}
          personalInfo={personalInfo}
          setPersonalInfo={setPersonalInfo}
        />
      )}
      <section className="info__text">
        <span className="info__title">{infoTitle}</span>
        <p className="info__value">{infoValue}</p>
      </section>

      <button
        className="info__edit-button"
        data-ref={refrence}
        onClick={(e) => openPopup(e)}
      >
        <FiEdit className="edit-icon" />
      </button>
    </section>
  );
};

export default PersonalInfo;
