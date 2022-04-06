import React, { useState } from "react";

import { MdClose } from "react-icons/md";

import "./AddressPopup.scss";
import AddAddress from "./popup-types/AddAddress";
import ChangeAddress from "./popup-types/ChangeAddress";

const AddressPopup = ({
  type,
  toggleAddressPopup,
  currentAddress,
  addressList,
  setAddressList,
  setCurrentAddress,
}) => {
  // state for editing exsiting address
  const [editingAddress, setEditingAddress] = useState(null);

  const updatePopupTitle = () => {
    let title;
    type === "change-address"
      ? (title = "انتخاب آدرس")
      : type === "edit-address"
      ? (title = "ویرایش آدرس")
      : (title = "افزودن آدرس جدید");

      return title;
  };

  const renderPopup = () => {
    switch (type) {
      case "add-address":
        return (
          <AddAddress
            setCurrentAddress={setCurrentAddress}
            toggleAddressPopup={toggleAddressPopup}
            addressList={addressList}
            setAddressList={setAddressList}
            setEditingAddress={setEditingAddress}
          />
        );
      case "change-address":
        return (
          <ChangeAddress
            currentAddress={currentAddress}
            setCurrentAddress={setCurrentAddress}
            toggleAddressPopup={toggleAddressPopup}
            addressList={addressList}
            setAddressList={setAddressList}
            setEditingAddress={setEditingAddress}
          />
        );
      case "edit-address":
        updatePopupTitle();
        return (
          <AddAddress
            setCurrentAddress={setCurrentAddress}
            toggleAddressPopup={toggleAddressPopup}
            addressList={addressList}
            setAddressList={setAddressList}
            editingAddress={editingAddress}
          />
        );
      default:
        return null;
    }
  };

  return (
    <div className="address-popup">
      <section className="address-popup__heading">
        <h5 className="title">{updatePopupTitle()}</h5>
        <span
          className="close-button"
          onClick={() => toggleAddressPopup(false)}
        >
          <MdClose />
        </span>
      </section>
      {renderPopup()}
    </div>
  );
};

export default AddressPopup;
