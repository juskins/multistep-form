import React, { useContext, useState } from 'react'
import HeaderText from '../components/HeaderText';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';
import switchOff from "../assets/images/switch-off.png";
import switchOn from "../assets/images/switch-on.png";
import { plans } from '../utils/data';

const SelectPlan = () => {
  const navigate = useNavigate()
  const { selectedPlan, setSelectedPlan, isToggled, setIsToggled } =
    useOutletContext();
  return (
    <div>
      <div className="flex flex-col justify-between gap-2 py-[2rem]  h-full">
        <div className="flex flex-col gap-6">
          <HeaderText
            header={"Select your plan"}
            para={"You have the option of monthly or yearly billing."}
          />

          <div className="flex flex-col md:flex-row gap-5 w-full ">
            {plans.map((plan) => (
              <div
                onClick={() => setSelectedPlan(plan)}
                key={plan.id}
                className={`flex md:flex-col flex-row  ${
                  selectedPlan.type === plan.type
                    ? "bg-magnolia border-marineBlue"
                    : "bg-white"
                } p-4 rounded-md md:justify-between gap-4 justify-start md:size-[170px] w-full border hover:border-marineBlue`}
              >
                <div>
                  <img src={plan.img} alt="arcade icon" />
                </div>
                <div>
                  <p className="font-semibold text-marineBlue">{plan.type}</p>
                  {!isToggled ? (
                    <p className="text-coolGray">${plan.monthPricing}/mo</p>
                  ) : (
                    <p className="text-coolGray">${plan.yearPricing}/yr</p>
                  )}

                  <p
                    className={`text-marineBlue text-sm ${
                      !isToggled && "hidden"
                    }`}
                  >
                    2 months free
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="p-1 bg-magnolia flex justify-center items-center gap-4">
            <p
              className={`${
                isToggled ? "text-coolGray" : "text-marineBlue"
              } font-semibold`}
            >
              Monthly
            </p>

            <button
              onClick={() => setIsToggled(!isToggled)}
              className="relative w-10 h-10 flex border-none items-center justify-center"
            >
              {/* Off Icon */}
              <span
                className={`absolute transition-opacity duration-300 ${
                  isToggled ? "opacity-0" : "opacity-100"
                }`}
              >
                <img src={switchOff} alt="" />
              </span>

              {/* On Icon */}
              <span
                className={`absolute transition-opacity duration-300 ${
                  isToggled ? "opacity-100" : "opacity-0"
                }`}
              >
                <img src={switchOn} alt="" />
              </span>
            </button>

            <p
              className={`${
                isToggled ? "text-marineBlue" : "text-coolGray"
              } font-semibold`}
            >
              Yearly
            </p>
          </div>
        </div>

        <div className="flex mt-8 md:mt-8 justify-between items-center">
          <Link className="text-coolGray font-semibold" to="/">
            Go back
          </Link>
          <button
            onClick={() => navigate("/pickAddons")}
            className="bg-marineBlue  text-mywhite hover:bg-purplishBlue p-3 py-2 self-end rounded-md"
          >
            Next Step
          </button>
        </div>
      </div>
    </div>
  );
}

export default SelectPlan