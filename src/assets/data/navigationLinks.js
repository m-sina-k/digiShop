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
          category: "گوشی موبایل",
          url: "/shop/phone",
          content: [
            {
              title: "برند ها ",
              links: [
                {
                  id: autoID(),
                  text: "apple",
                  url: "/shop/phone/apple",
                },
                {
                  id: autoID(),
                  text: "samsung",
                  url: "/shop/phone/samsung",
                },
                {
                  id: autoID(),
                  text: "xiaomi",
                  url: "/shop/phone/xiaomi",
                },
                {
                  id: autoID(),
                  text: "sony",
                  url: "/shop/phone/sony",
                },
                {
                  id: autoID(),
                  text: "huawei",
                  url: "/shop/phone/huawei",
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
          category: "لپتاپ",
          url: "/shop/laptop",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "asus",
                  url: "/shop/laptop/asus",
                },
                {
                  id: autoID(),
                  text: "microsoft",
                  url: "/shop/laptop/microsoft",
                },
                {
                  id: autoID(),
                  text: "apple",
                  url: "/shop/laptop/apple",
                },
                {
                  id: autoID(),
                  text: "huawei",
                  url: "/shop/laptop/huawei",
                },
                {
                  id: autoID(),
                  text: "lenovo",
                  url: "/shop/laptop/lenovo",
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
            }
          ],
        },
        {
          id: autoID(),
          category: "تبلت",
          url: "/shop/tablet",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "samsung",
                  url: "/shop/tablet/samsung",
                },
                {
                  id: autoID(),
                  text: "lenovo",
                  url: "/shop/tablet/lenovo",
                },
                {
                  id: autoID(),
                  text: "apple",
                  url: "/shop/tablet/apple",
                },
                {
                  id: autoID(),
                  text: "asus",
                  url: "/shop/tablet/asus",
                },
              ],
            }
          ],
        },
        {
          id: autoID(),
          category: "هدست و هدفون",
          url: "/shop/headset",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "beats",
                  url: "/shop/headset/beats",
                },
                {
                  id: autoID(),
                  text: "sony",
                  url: "/shop/headset/sony",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "مانیتور",
          url: "/shop/monitor",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "G plus",
                  url: "/shop/monitor/G-plus",
                },
                {
                  id: autoID(),
                  text: "huawei",
                  url: "/shop/monitor/huawei",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "ساعت هوشمند",
          url: "/shop/smart-watch",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "apple",
                  url: "/shop/smart-watch/apple",
                },
                {
                  id: autoID(),
                  text: "samsung",
                  url: "/shop/smart-watch/samsung",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "محصولات گیمینگ",
          url: "/shop/gaming",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "sony",
                  url: "/shop/gaming/sony",
                },
                {
                  id: autoID(),
                  text: "microsoft",
                  url: "/shop/gaming/microsoft",
                },
              ],
            },
          ],
        },
        {
          id: autoID(),
          category: "دوربین عکاسی",
          url: "/shop/camera",
          content: [
            {
              title: "برند ها",
              links: [
                {
                  id: autoID(),
                  text: "nikon",
                  url: "/shop/camera/nikon",
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
    text: "فروشگاه",
    url: "/shop",
    dropdown: null,
    megaDropdown: null,
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
    url: "/faq",
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
