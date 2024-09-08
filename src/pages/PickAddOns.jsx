import React, { useState } from 'react'
import HeaderText from '../components/HeaderText';
import { Link, useNavigate, useOutletContext } from 'react-router-dom';

const PickAddOns = () => {
  const navigate = useNavigate();
  const {pickedAddOns, setPickedAddons} = useOutletContext()
  

  const handleAddons = (e) => {
    const { name, checked } = e.target;
      setPickedAddons((prevData) => ({
        ...prevData,
          [name]: checked
      }));
  }
  return (
    <div className="flex flex-col justify-between py-[2rem] gap-2 h-full">
      <div className="flex flex-col gap-6">
        <HeaderText
          header={"Pick add-ons"}
          para={"Add-ons help enhance your gaming experience."}
        />

        <div className="flex flex-col gap-5 w-full ">
          <div
            className={`flex p-2 px-6 items-center ${
              pickedAddOns.onlineService && "bg-magnolia"
            } rounded-md justify-between border border-marineBlue`}
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="onlineService"
                id=""
                checked={pickedAddOns.onlineService}
                onChange={handleAddons}
              />
              <div>
                <p className="font-semibold text-marineBlue">Online Service</p>
                <p className="text-coolGray">Access to multiplayer games</p>
              </div>
            </div>
            <p className="text-purplishBlue">+$1/mo</p>
          </div>

          <div
            className={`flex p-2 px-6 items-center ${
              pickedAddOns.largerStorage && "bg-magnolia"
            } rounded-md justify-between border border-marineBlue`}
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="largerStorage"
                id=""
                checked={pickedAddOns.largerStorage}
                onChange={handleAddons}
              />
              <div>
                <p className="font-semibold text-marineBlue">Larger storage</p>
                <p className="text-coolGray">Extra 1TB of cloud save</p>
              </div>
            </div>
            <p className="text-purplishBlue">+$2/mo</p>
          </div>

          <div
            className={`flex p-2 px-6 items-center ${
              pickedAddOns.customProfile && "bg-magnolia"
            } rounded-md justify-between border border-marineBlue`}
          >
            <div className="flex gap-3">
              <input
                type="checkbox"
                name="customProfile"
                id=""
                checked={pickedAddOns.customProfile}
                onChange={handleAddons}
              />
              <div>
                <p className="font-semibold text-marineBlue">
                  Customizable Profile
                </p>
                <p className="text-coolGray">Custome theme on your profile</p>
              </div>
            </div>
            <p className="text-purplishBlue">+$2/mo</p>
          </div>
        </div>
      </div>

      <div className="flex justify-between mt-8 md:mt-0  items-center">
        <Link className="text-coolGray font-semibold" to="/selectPlan">
          Go back
        </Link>
        <button
          onClick={() => navigate("/summary")}
          className="bg-marineBlue  text-mywhite hover:bg-purplishBlue p-3 py-2 self-end rounded-md"
        >
          Next Step
        </button>
      </div>
    </div>
  );
}

export default PickAddOns