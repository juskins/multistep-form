import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import PersonalInfo from "../pages/PersonalInfo";
import SelectPlan from "../pages/SelectPlan";
import PickAddOns from "../pages/PickAddOns";
import FinishingUp from "../pages/FinishingUp";
import Thankyou from "../pages/Thankyou";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <PersonalInfo />,
      },
      {
        path: "selectPlan",
        element: <SelectPlan />,
      },
      {
        path: "pickAddons",
        element: <PickAddOns />,
      },
      {
        path: "summary",
        element: <FinishingUp />,
      },
      {
        path: "thankyou",
        element: <Thankyou />,
      },
    ],
  },
]);