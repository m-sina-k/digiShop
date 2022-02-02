import React, { useRef, useState } from "react";
import { MdClose } from "react-icons/md";
import { useDispatch } from "react-redux";
import { setShowBackdrop } from "../../../../features/slices/uiSlice";
import "./PersonalInfoPopup.scss";

const PersonalInfoPopup = ({
  inputName,
  inputTitle,
  setActivePopup,
  personalInfo,
  setPersonalInfo,
}) => {
  const dispatch = useDispatch();
  const inputRef = useRef();
  const submitButtonRef = useRef();
  const [isDisabled,setIsDisabled] = useState(true)

  const closePopup = () => {
    dispatch(setShowBackdrop(false));
    setActivePopup({ inputName: null, inputTitle: null });
  };

  const validateInput = () => {
    const status = inputRef.current.value.trim().length > 0 ? false : true;
    setIsDisabled(status); 
  };

  const changePersonalInfo = (e) => {
    e.preventDefault();
    if (inputRef.current.value.trim().length > 0) {
      setIsDisabled(false)
      setPersonalInfo({
        ...personalInfo,
        [inputRef.current.name]: inputRef.current.value,
      });
      closePopup();
    } else {
      setIsDisabled(true)
    }
  };

  return (
    <div className="personal-info__popup">
      <section className="popup__heading">
        <h5 className="popup__title">{inputTitle}</h5>
        <span className="popup__close-button" onClick={closePopup}>
          <MdClose className="close-icon" />
        </span>
      </section>
      <form
        action="#"
        method="post"
        className="popup__form"
        onSubmit={(e) => changePersonalInfo(e)}
      >
        <input
          type="text"
          className="popup__input"
          placeholder={inputTitle}
          name={inputName}
          ref={inputRef}
          onChange={validateInput}
          // value={personalInfo[]}
        />
        <button
          className="form__submit-button"
          ref={submitButtonRef}
          disabled={isDisabled}
        >
          ثبت اطلاعات
        </button>
      </form>
    </div>
  );
};

export default PersonalInfoPopup;
