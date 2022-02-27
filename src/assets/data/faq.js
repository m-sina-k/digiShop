import { autoID } from "./../../helpers/autoID";
import { Link } from "react-router-dom";

export const categories = [
  {
    id: autoID(),
    category: "general",
    text: "سوالات کلی",
  },
  {
    id: autoID(),
    category: "guarantee",
    text: "خدمات پس از فروش",
  },
  {
    id: autoID(),
    category: "others",
    text: "سایر سوالات",
  },
];

export const faq = [
  {
    id: autoID(),
    question: "چگونه میتوانم از وضعیت سفارشم مطلع شوم؟",
    ref: (
      <Link to="/order-tracking" className="ref-link">
        صفحه پیگیری سفارش
      </Link>
    ),
    answer:
      "با مراجعه به صفحه پیگیری سفارش میتوانید وضعیت سفارش خود را بررسی کنید.",
    category: "general",
  },
  {
    id: autoID(),
    question: "چگونه میتوانم تاریخچه سفارشاتم را مشاهده کنم؟",
    ref: (
      <Link to="/dashboard" className="ref-link">
        صفحه داشبورد
      </Link>
    ),
    answer:
      "با مراجه به صفحه داشبورد خود میتوانید سفارشاتی را که تا کنون ثبت کرده اید مشاهده کنید.",
    category: "general",
  },
  {
    id: autoID(),
    question: "به چه روش هایی میتوان هزینه سفارش را پرداخت کرد؟",
    answer:
      "هزینه سفارش را میتوان به صورت پرداخت در محل ، پرداخت از طریق درگاه بانکیو پرداخت اقساطی با چک پرداخت نمود.",
    category: "general",
  },
  {
    id: autoID(),
    question: "شرایط استفاده از گارانتی محصول چیست؟",
    answer:
      "در صورتی که محصول دارای گارانتی باشد ، مشروط بر عدم انقضا تاریخ گارانتی و سالم بودن کارت گارانتی میتوان با مرجعه به شرکت سازنده محصول از خدمات گارانتی بهره مند شد",
    category: "guarantee",
  },
  {
    id: autoID(),
    question: "ضمانت بازگشت ۷ روزه به چه صورت است ؟",
    answer:
      " در صورتی که محصول خریداری شده معیوب بوده باشد تا ۷ روز پس از خرید امکان مرجوع کردن آن امکان پذیر است.",
    category: "guarantee",
  },
  {
    id: autoID(),
    question: "آیا در صورت انصراف از خرید امکان مرجوع کردن کالا وجود دارد؟",
    answer:
      "در صورتی که بسته بندی کالا باز نشده باشد امکان مرجوع آن وجود دارد.",
    category: "guarantee",
  },
  {
    id: autoID(),
    question: "چگونه میتوانم اطلاعات فردی خود را اصلاح کنم؟",
    ref: (
      <Link to="/dashboard" className="ref-link">
        صفحه داشبورد
      </Link>
    ),
    answer: "در صفحه میتوانید اطلاعات فردی خود را اصلاح نمایید.",
    category: "others",
  },
  {
    id: autoID(),
    question: "آیا امکان ثبت سفارش به صورت حضوری یا تلفنی امکان پذیر است؟",
    answer: "خیر ،‌ثبت سفارش فقط از طریق سایت انجام میشود.",
    category: "others",
  },
];
