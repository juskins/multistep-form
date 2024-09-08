import arcade from "../assets/images/icon-arcade.svg";
import advanced from "../assets/images/icon-advanced.svg";
import pro from "../assets/images/icon-pro.svg";

export const navLinks = [
  {
    id: 1,
    step: "STEP 1",
    detail: "YOUR INFO",
    url: "/",
  },
  {
    id: 2,
    step: "STEP 2",
    detail: "SELECT PLAN",
    url: "/selectPlan",
  },
  {
    id: 3,
    step: "STEP 3",
    detail: "ADD-ONS",
    url: "/pickAddons",
  },
  {
    id: 4,
    step: "STEP 4",
    detail: "SUMMARY",
    url: "/summary",
  },
];

export const plans = [
  {
    id: 1,
    img: arcade,
    type: "Arcade",
    monthPricing: "9",
    yearPricing: "90",
  },
  {
    id: 2,
    img: advanced,
    type: "Advanced",
    monthPricing: "12",
    yearPricing: "120",
  },
  {
    id: 3,
    img: pro,
    type: "Pro",
    monthPricing: "15",
    yearPricing: "150",
  },
];
