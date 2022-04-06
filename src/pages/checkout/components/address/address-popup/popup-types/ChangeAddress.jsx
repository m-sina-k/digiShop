import React from "react";
import AddressOption from ".././AddressOption";

import { MdOutlineAddLocationAlt } from "react-icons/md";

const ChangeAddress = ({
  currentAddress,
  setCurrentAddress,
  toggleAddressPopup,
  addressList,
  setAddressList,
  setEditingAddress,
}) => {
  return (
    <React.Fragment>
      <section
        className="address-popup__add-address"
        onClick={() => toggleAddressPopup(true, "add-address")}
      >
        <span className="icon-container">
          <MdOutlineAddLocationAlt />
        </span>
        <span className="text-container">افزودن آدرس جدید</span>
      </section>

      <div className="address-popup__address-list">
        {addressList &&
          addressList.map((item, index) => (
            <AddressOption
              key={index}
              address={item}
              isActive={currentAddress.id === item.id}
              additionalClass="address-option--popup"
              currentAddress={currentAddress}
              setCurrentAddress={setCurrentAddress}
              toggleAddressPopup={toggleAddressPopup}
              addressList={addressList}
              setAddressList={setAddressList}
              setEditingAddress={setEditingAddress}
            />
          ))}
      </div>
    </React.Fragment>
  );
};

export default ChangeAddress;
