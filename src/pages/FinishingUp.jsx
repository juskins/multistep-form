import React from "react";
import { Link, useNavigate, useOutletContext } from "react-router-dom";
import HeaderText from "../components/HeaderText";

const FinishingUp = () => {
  const navigate = useNavigate();
  const { selectedPlan, isToggled, pickedAddOns, setPickedAddons } = useOutletContext();

  return (
    <div className="flex flex-col justify-between gap-2 py-4 mt-[2rem] h-[90%]">
      <div className="flex flex-col gap-6">
        <HeaderText
          header={"Finishing up"}
          para={"Double-check everything looks OK before confirming"}
        />

        <div className="flex flex-col gap-5 w-full bg-alabaster">
          <div className="flex gap-3 items-center justify-between p-2 px-6">
            <div>
              <p className="font-semibold text-marineBlue">
                {selectedPlan.type} ({isToggled ? "Yearly" : "Monthly"})
              </p>
              <Link
                to="/selectPlan"
                className="text-coolGray underline hover:text-purplishBlue"
              >
                change
              </Link>
            </div>
            <p className="text-marineBlue font-semibold">
              +$
              {isToggled ? (
                <span>{selectedPlan.yearPricing}/yr</span>
              ) : (
                <span>{selectedPlan.monthPricing}/mo</span>
              )}
            </p>
          </div>
          <hr className="w-[90%] px-6 m-auto" />

          {pickedAddOns.onlineService && (
            <div className="flex px-6 items-center rounded-md justify-between">
              <p className="text-coolGray">Online service</p>
              <p className="text-marineBlue">
                +$
                {isToggled ? <span>{10}/yr</span> : <span>{1}/mo</span>}
              </p>
            </div>
          )}

          {pickedAddOns.largerStorage && (
            <div className="flex px-6 items-center rounded-md justify-between">
              <p className="text-coolGray">Larger storage</p>
              <p className="text-marineBlue">
                +$
                {isToggled ? <span>{20}/yr</span> : <span>{2}/mo</span>}
              </p>
            </div>
          )}

          {pickedAddOns.customProfile && (
            <div className="flex px-6 items-center rounded-md justify-between">
              <p className="text-coolGray">Custom Profile</p>
              <p className="text-marineBlue">
                +$
                {isToggled ? <span>{20}/yr</span> : <span>{2}/mo</span>}
              </p>
            </div>
          )}
        </div>

        <div className="flex px-6 items-center rounded-md justify-between">
          <p className="text-coolGray">
            Total (per {isToggled ? "year" : "month"})
          </p>
          <p className="text-purplishBlue font-semibold">
            +$
            {isToggled ? (
              <span>
                {Number(selectedPlan.yearPricing) +
                  Number(`${pickedAddOns.onlineService ? 10 : 0}`) +
                  Number(`${pickedAddOns.largerStorage ? 20 : 0}`) +
                  Number(`${pickedAddOns.customProfile ? 20 : 0}`)}
                /yr
              </span>
            ) : (
              <span>
                {Number(selectedPlan.monthPricing) +
                  Number(`${pickedAddOns.onlineService ? 1 : 0}`) +
                  Number(`${pickedAddOns.largerStorage ? 2 : 0}`) +
                  Number(`${pickedAddOns.customProfile ? 2 : 0}`)}
                /mo
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="flex justify-between items-center">
        <Link
          className="text-coolGray font-semibold mt-[2.5rem]"
          to="/pickAddons"
        >
          Go back
        </Link>
        <button
          onClick={() => navigate("/thankyou")}
          className="bg-purplishBlue  text-mywhite hover:bg-marineBlue p-3 py-2 self-end rounded-md"
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default FinishingUp;
