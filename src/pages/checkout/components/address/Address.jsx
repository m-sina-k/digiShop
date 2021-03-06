import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  setShowBackdrop,
  lockBodyScroll,
} from "../../../../features/slices/uiSlice";
import AddressPopup from "./address-popup/AddressPopup";
import AddressOption from "./address-popup/AddressOption";

import { GrAddCircle } from "react-icons/gr";
import { BiCurrentLocation } from "react-icons/bi";
import "./Address.scss";

const Address = ({currentAddress,addressList,setAddressList,setCurrentAddress}) => {
  const dispatch = useDispatch();

  
  const [showAddressPopup, setShowAddressPopup] = useState(false);

  // state for rendering popup content : add-address | edit-address | change-address
  const [popupType, setPopupType] = useState("");

  // hide/show address popup
  const toggleAddressPopup = (status, type) => {
    dispatch(setShowBackdrop(status));
    dispatch(lockBodyScroll(status));
    setShowAddressPopup(status);
    if (type) {
      setPopupType(type);
    }
  };


  return (
    <div className="address-section">
      {showAddressPopup && (
        <AddressPopup
          type={popupType}
          toggleAddressPopup={toggleAddressPopup}
          currentAddress={currentAddress}
          addressList={addressList}
          setAddressList={setAddressList}
          setCurrentAddress={setCurrentAddress}
        />
      )}
      <div className="address-section__heading">
        <span className="icon-container">
          <BiCurrentLocation />
        </span>
        <h6 className="title">آدرس تحویل سفارش</h6>
      </div>
     

      {currentAddress ? (
        <div className="address-container">
          <AddressOption address={currentAddress} />
          <button
            className="change-address"
            onClick={() => toggleAddressPopup(true, "change-address")}
          >
            تغییر آدرس
          </button>
        </div>
      ) : (
        <section
          className="add-new-address-button"
          onClick={() => toggleAddressPopup(true, "add-address")}
        >
          <span className="icon-container">
            <GrAddCircle />
          </span>
          <span className="text-container">افزودن آدرس جدید</span>
        </section>
      )}
    </div>
  );
};

export default Address;
