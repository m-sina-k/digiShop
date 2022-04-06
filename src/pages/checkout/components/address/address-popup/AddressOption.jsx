import React from "react";

import { AiOutlinePhone } from "react-icons/ai";
import { BiUser, BiEnvelope } from "react-icons/bi";
import { GoLocation } from "react-icons/go";
import { FiTrash2 } from "react-icons/fi";

const AddressOption = ({
  address,
  isActive,
  additionalClass,
  currentAddress,
  setCurrentAddress,
  toggleAddressPopup,
  addressList,
  setAddressList,
  setEditingAddress,
}) => {
  const changeCurrentAddress = () => {
    setCurrentAddress(address);
    toggleAddressPopup(false);
  };

  const editAddress = (e, address) => {
    e.stopPropagation();
    toggleAddressPopup(true, "edit-address");
    setEditingAddress(address);
  };

  const deleteAddress = (e, id) => {
    e.stopPropagation();

    // if currently selected address has been deleted , select first address
    if (currentAddress && currentAddress.id === id)
      setCurrentAddress(addressList[0]);

    const updatedAddressList = addressList.filter(
      (address) => address.id !== id
    );
    setAddressList(updatedAddressList);
    localStorage.setItem("addressList", JSON.stringify(updatedAddressList));

    // if there is no more address left , close popup
    if (addressList.length === 1) {
      toggleAddressPopup(false, "add-address");
      setCurrentAddress(null);
    }
  };

  return (
    <div
      className={`address-option ${
        isActive && "address-option--popup--active"
      } ${additionalClass && additionalClass}`}
      onClick={setCurrentAddress && changeCurrentAddress}
    >
      <div className="address-options__container">
        <section className="address-group">
          <span className="icon-container">
            <GoLocation />
          </span>
          <p className="address">{address.address}</p>
        </section>

        <section className="address-group">
          <span className="icon-container">
            <BiUser />
          </span>
          <p className="reciver">{address.name}</p>
        </section>
        <section className="address-group">
          <span className="icon-container">
            <AiOutlinePhone />
          </span>
          <p className="reciver">{address.phone}</p>
        </section>
        <section className="address-group">
          <span className="icon-container">
            <BiEnvelope />
          </span>
          <p className="reciver">{address.zipCode}</p>
        </section>
        {setCurrentAddress && (
          <div className="address-control">
            <button
              className="address-control__btn address-control__btn--edit"
              onClick={(e) => editAddress(e, address)}
            >
              ویرایش آدرس
            </button>

            <button
              className="address-control__btn address-control__btn--delete"
              onClick={(e) => deleteAddress(e, address.id)}
            >
              <FiTrash2 />
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default AddressOption;
