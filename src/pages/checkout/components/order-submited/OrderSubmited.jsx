import React,{useEffect} from "react";
import { useDispatch } from "react-redux";
import { resetState } from "../../../../features/slices/submitOrderSlice";
import { updateCart } from "../../../../features/slices/cartSlice";
import { Link } from "react-router-dom";

import successImage from "../../../../assets/images/utilities/success-icon.png";
import "./OrderSubmited.scss";

const OrderSubmited = () => {
const dispatch = useDispatch()

useEffect(()=>{
return ()=> {
    dispatch(updateCart())
    dispatch(resetState())
}
},[])

  return (
    <div className="order-submited">
      <figure className="image-container">
        <img src={successImage} alt="سفارش ثبت گردید." className="image" />
      </figure>
      <p className="text">
        سفارش شما ثبت گردید و طی روز های آتی پردازش و ارسال خواهد شد.میتوانید
        وضعیت سفارش خود را در صفحه پیگیری سفارش مشاهده کنید.
      </p>
      <section className="link-container">
          <Link to='/' className="ref-link">صفحه اصلی</Link>
          <Link to='/order-tracking' className="ref-link">پیگیری سفارش</Link>
      </section>
    </div>
  );
};

export default OrderSubmited;
