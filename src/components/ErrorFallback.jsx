import React from "react";
import Alert from "./alert/Alert";

const ErrorBoundary = () => {
  return (
   <div className="px-0 container">
        <Alert
      title="خطا"
      text="در بارگذاری سایت مشکلی پیش آمد ، لطفا صفحه را رفرش کنید."
      variant="error"
      additionalClass="w-100"
      callBack={()=>window.location.reload()}
      callBackText="رفرش صفحه"
    />
   </div>
  );
};

export default ErrorBoundary;
