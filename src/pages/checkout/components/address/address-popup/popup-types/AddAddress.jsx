import React, { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const AddAddress = ({
  setCurrentAddress,
  toggleAddressPopup,
  addressList,
  setAddressList,
  editingAddress,
  setEditingAddress
}) => {
  const [addressError, setAddressError] = useState({
    errorMessage: "",
    tips: [],
  });
  const [buttonDisabled, setButtonDisabled] = useState(true);

  const initialAddress = {
    name: "",
    phone: "",
    state: "",
    city: "",
    address: "",
    no: "",
    zipCode: "",
  };

  // state for creating new address or editing exsiting one
  const [newAddress, setNewAddress] = useState(
    editingAddress ? editingAddress : initialAddress
  );

  // active submit if all fields are filled
  const checkForNullField = () => {
    let disabled = !Object.values(newAddress).every((item) => item);
    setButtonDisabled(disabled);
  };
  useEffect(() => {
    checkForNullField();
  }, [newAddress]);

  const validateFields = () => {
    if (
      isNaN(Number(newAddress.phone)) ||
      newAddress.phone.trim().length !== 11 ||
      newAddress.phone.substring(0, 2) !== "09"
    ) {
      setAddressError({
        errorMessage: "شماره تماس وارد شده معتبر نمی باشد.",
        tips: [
          "شماره تلفن باید با 09 شروع شود(09xx-xxxx-xxx)",
          "شماره تلفن باید فقط حاوی اعداد باشد",
          "شماره تلفن باید 11 رقم باشد",
        ],
      });
      return false;
    }
    if (
      isNaN(Number(newAddress.zipCode)) ||
      newAddress.zipCode.trim().length !== 10
    ) {
      setAddressError({
        errorMessage: "کد پستی وارد شده معتبر نمی باشد.",
        tips: ["کد پستی فقط باید حاوی اعداد باشد", "کد پستی باید 10 رقم باشد"],
      });
      return false;
    }
    return true;
  };

  const saveAddress = () => {
    let updatedAddressList;
    // create unique id for each address
    const id = uuidv4();

    toggleAddressPopup(false);

    if (editingAddress) {
      updatedAddressList = addressList.map(
        (address) => address.id === editingAddress.id ? newAddress : address
      );
    } else {
      updatedAddressList = [...addressList, { ...newAddress, id }];
    }
    
    setAddressList(updatedAddressList);
    setNewAddress(initialAddress);
    setCurrentAddress(newAddress);
    localStorage.setItem("addressList", JSON.stringify(updatedAddressList));
    setEditingAddress(null)
  };

  const submitNewAddress = (e) => {
    e.preventDefault();
    setAddressError("");
    if (validateFields()) {
      saveAddress();
    }
  };

  return (
    <form
      action="#"
      method="post"
      className="address-popup__form form"
      onSubmit={(e) => submitNewAddress(e)}
    >
      <div className="form__grid">
        <section className="form-group">
          <label htmlFor="name-input">* نام کامل گیرنده : </label>
          <input
            type="text"
            name="name-input"
            className="form-input"
            value={newAddress.name}
            onChange={(e) =>
              setNewAddress({ ...newAddress, name: e.target.value })
            }
          />
          <small className="error-container"></small>
        </section>

        <section className="form-group">
          <label htmlFor="phone-input">* تلفن همراه : </label>
          <input
            type="text"
            name="phone-input"
            className="form-input"
            placeholder="09xx-xxxx-xxx"
            value={newAddress.phone}
            onChange={(e) =>
              setNewAddress({ ...newAddress, phone: e.target.value })
            }
          />
        </section>
      </div>

      <div className="form__grid">
        <section className="form-group">
          <label htmlFor="state-input">* استان : </label>
          <input
            type="text"
            name="state-input"
            className="form-input"
            value={newAddress.state}
            onChange={(e) =>
              setNewAddress({ ...newAddress, state: e.target.value })
            }
          />
          <small className="error-container"></small>
        </section>

        <section className="form-group">
          <label htmlFor="city-input">* شهر: </label>
          <input
            type="text"
            name="city-input"
            className="form-input"
            value={newAddress.city}
            onChange={(e) =>
              setNewAddress({ ...newAddress, city: e.target.value })
            }
          />
          <small className="error-container"></small>
        </section>
      </div>

      <section className="form-group">
        <label htmlFor="address-input">* نشانی پستی : </label>
        <input
          type="text"
          name="address-input"
          className="form-input"
          id="address-input"
          value={newAddress.address}
          onChange={(e) =>
            setNewAddress({ ...newAddress, address: e.target.value })
          }
        />
        <small className="error-container"></small>
      </section>

      <div className="form__grid">
        <section className="form-group">
          <label htmlFor="no-input">* پلاک : </label>
          <input
            type="text"
            name="no-input"
            className="form-input"
            value={newAddress.no}
            onChange={(e) =>
              setNewAddress({ ...newAddress, no: e.target.value })
            }
          />
          <small className="error-container"></small>
        </section>

        <section className="form-group">
          <label htmlFor="zipcode-input">* کد پستی: </label>
          <input
            type="text"
            name="zipcode-input"
            className="form-input"
            value={newAddress.zipCode}
            onChange={(e) =>
              setNewAddress({ ...newAddress, zipCode: e.target.value })
            }
          />
          <small className="error-container"></small>
        </section>
      </div>

      {addressError && (
        <section className="error-container">
          <p className="error-message">{addressError.errorMessage}</p>
          <ul className="error-tips__container">
            {addressError.tips.map((tip, index) => (
              <li className="error-tip" key={index}>
                {tip}
              </li>
            ))}
          </ul>
        </section>
      )}
      <button type="submit" className="form-submit" disabled={buttonDisabled}>
        ثبت آدرس
      </button>
    </form>
  );
};

export default AddAddress;
