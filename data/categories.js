import {
  CameraCategoryIcon,
  ComputerCategoryIcon,
  HeadPhoneCategoryIcon,
  PhoneCategoryIcon,
  SmartWatchCategoryIcon,
} from "../assets/icons";

export const mainCategories = [
  { title: "All" },
  { title: "Women Fashion" },
  { title: "Men Fashion" },
  { title: "Electronics" },
  { title: "Shoes" },
];

export const subCategories = [
  { title: "Phones", icon: <PhoneCategoryIcon /> },
  { title: "Laptops", icon: <ComputerCategoryIcon /> },
  { title: "watches", icon: <SmartWatchCategoryIcon /> },
  { title: "Cameras", icon: <CameraCategoryIcon /> },
  { title: "Headphones", icon: <HeadPhoneCategoryIcon /> },
];
