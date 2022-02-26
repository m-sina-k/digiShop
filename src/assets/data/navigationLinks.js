import { autoID } from "../../helpers/autoID";
export const navigationLink = [
  {
    id: autoID(),
    text: "دسته بندی ها",
    url: "#",
    dropdown: null,
    megaDropdownID: "category-megadropdown",
    megaDropdown: {
      id: "category-megadropdown",
      content: [
        {
          id: autoID(),
          category: "موبایل",
          content: [
            {
              title: "برند ها ",
              links: [
                {
                  id: autoID(),
                  text: "apple",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "samsung",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "xiaomi",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "sony",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "huawei",
                  url: "#",
                },
              ],
            },
            {
              title: "لوازم جانبی",
              links: [
                {
                  id: autoID(),
                  text: "کیف و قاب",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "شارژر و پاوربانک",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "پایه نگهدارنده",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "گلس و محافظ صفحه",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "لپتاپ و کامپیوتر",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "asus",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "microsoft",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "apple",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "hp",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "acer",
                  url: "#",
                },
              ],
            },
            {
              title: "لوازم جانبی",
              links: [
                {
                  id: autoID(),
                  text: "کیف",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "شارژر و باتری",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "فن و خنک کننده",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "موس",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "کیبورد",
                  url: "#",
                },
              ],
            },
            {
              title: "قطعات کامپیوتر",
              links: [
                {
                  id: autoID(),
                  text: "پردازنده",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "رم",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "کارت گرافیک",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "کیس",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "تبلت و کاتبخوان",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "samsung",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "lenovo",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "apple",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "asus",
                  url: "#",
                },
              ],
            },
            ,
            {
              title: "اسکنر ها",
              links: [
                {
                  id: autoID(),
                  text: "اسکنر فلت",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "اسکنر دستی",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "اسکنر لیزری",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "اسکنر بارکدخوان",
                  url: "#",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "لوازم مالتی مدیا",
          content: [
            {
              title: "هدست و هدفون",
              links: [
                {
                  id: autoID(),
                  text: "beats",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "jbl",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "sony",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "xiaomi",
                  url: "#",
                },
              ],
            },
            {
              title: "مانیتور",
              links: [
                {
                  id: autoID(),
                  text: "samsung",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "lg",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "x.vision",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "hp",
                  url: "#",
                },
              ],
            },
            {
              title: "دوربین عکاسی",
              links: [
                {
                  id: autoID(),
                  text: "canon",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "nickon",
                  url: "#",
                },
                {
                  id: autoID(),
                  text: "sony",
                  url: "#",
                },
              ],
            },
          ],
        },
      ],
    },
  },
  {
    id: autoID(),
    text: "پیگیری سفارش",
    url: "#",
    dropdown: null,
    megaDropdown: null,
  },
  {
    id: autoID(),
    text: "سوالات متداول",
    url: "#",
    dropdown: null,
    megaDropdown: null,
  },
  {
    id: autoID(),
    text: "درباره ما",
    url: "#",
    dropdown: null,
    megaDropdown: null,
  },
  {
    id: autoID(),
    text: "تماس با ما",
    url: "/contact-us",
    dropdown: null,
    megaDropdown: null,
  },
  {
    id: autoID(),
    text: "بیشتر...",
    url: "#",
    dropdownID: "more-links",
    dropdown: {
      id: "more-links",
      content: [
        {
          id: autoID(),
          text: "مشاوره خرید",
          url: "#",
        },
        {
          id: autoID(),
          text: "خرید اقساطی",
          url: "#",
        },
        {
          id: autoID(),
          text: "همکاری با ما",
          url: "#",
        },
      ],
    },
    megaDropdown: null,
  },
];
