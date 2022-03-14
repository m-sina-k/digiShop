import { autoID } from "./../../helpers/autoID";

export const sort = [
  {
    
      id: autoID(),
      label: "جدید ترین",
      value: 'sys.createdAt',
  },
  {
    
      id: autoID(),
      label: "قدیمی ترین",
      value: '-sys.createdAt',
  },
  {
    
      id: autoID(),
      label: "ارزان ترین",
      value: 'fields.price',
  },
  {
    
      id: autoID(),
      label: "گران ترین",
      value: '-fields.price',
  },
]

export const rates = [
  {
    id: autoID(),
    label: "همه",
    value: null,
    name:'all'
  },
  {
    id: autoID(),
    label: "1 ستاره",
    value: 2,
    name:'lt 2'
  },
  {
    id: autoID(),
    label: "2 ستاره",
    value: 3,
    name:'lt 3'
  },
  {
    id: autoID(),
    label: "3 ستاره",
    value: 4,
    name:'lt 4'
  },
  {
    id: autoID(),
    label: "4 ستاره",
    value: 5,
    name:'lt 5'
  },
  {
    id: autoID(),
    label: "5 ستاره",
    value: 6,
    name:'lt 6'
  },
  
];

export const phoneCompanies = [
  {
    id: autoID(),
    label: "همه",
    value: null,
    
  },
  {
    id: autoID(),
    label: "شیائومی | xiaomi",
    value: 'xiaomi',
    
  },
  {
    id: autoID(),
    label: "سامسونگ | smasung",
    value: 'smasung',
    
  },
  {
    id: autoID(),
    label: "اپل | apple",
    value: 'apple',
    
  },
  {
    id: autoID(),
    label: "نوکیا | nokia",
    value: 'nokia',
    
  },
  {
    id: autoID(),
    label: "هوآوی | huawei",
    value: 'huawei',
    
  },
  {
    id: autoID(),
    label: "آنر | honor",
    value: 'honor',
    
  },
  {
    id: autoID(),
    label: "سونی | sony",
    value: 'sony',
    
  },
]

export const laptopCompanies = [
  {
    id: autoID(),
    label: "همه",
    value: null,
    
  },
  {
    id: autoID(),
    label: "ایسوس | asus",
    value: 'asus',
    
  },
  {
    id: autoID(),
    label: "اپل | apple",
    value: 'apple',
    
  },
  {
    id: autoID(),
    label: "اچ پی |‌HP",
    value: 'hp',
    
  },
  {
    id: autoID(),
    label: "ایسر | acer",
    value: 'acer',
    
  },
  {
    id: autoID(),
    label: "هوآوی | huawei",
    value: 'huawei',
    
  },
  {
    id: autoID(),
    label: "لنوو | lenovo",
    value: 'lenovo',
    
  },
  {
    id: autoID(),
    label: "سونی | sony",
    value: 'sony',
    
  },
  {
    id: autoID(),
    label: "دل | Dell",
    value: 'Dell',
    
  },
  {
    id: autoID(),
    label: "مایکروسافت | microsoft",
    value: 'microsoft',
    
  },
]

export const tabletCompanies = [
  {
    id: autoID(),
    label: "همه",
    value: null,
    
  },
  {
    id: autoID(),
    label: "ایسوس | asus",
    value: 'asus',
    
  },
  {
    id: autoID(),
    label: "اپل | apple",
    value: 'apple',
    
  },
  {
    id: autoID(),
    label: "هوآوی | huawei",
    value: 'huawei',
    
  },
  {
    id: autoID(),
    label: "لنوو | lenovo",
    value: 'lenovo',
    
  },
  {
    id: autoID(),
    label: "مایکروسافت | microsoft",
    value: 'microsoft',
    
  },
]

