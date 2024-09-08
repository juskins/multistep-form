import React, { useState } from "react";
import {
  Link,
  Navigate,
  useNavigate,
  useOutletContext,
} from "react-router-dom";
import HeaderText from "../components/HeaderText";

const PersonalInfo = () => {
  const navigate = useNavigate();
  const [personalInfo, setPersonInfo] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    nameError: "",
    emailError: "",
    phoneError: "",
  });

  const validateName = () => {
    if (personalInfo.name.trim() === "") {
      setErrors({ ...errors, nameError: "Name is required" });
    } else {
      setErrors({ ...errors, nameError: "" });
    }
  };

  const validateEmail = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (personalInfo.email.trim() === "") {
      setErrors({ ...errors, emailError: "Email is required" });
    } else if (!emailRegex.test(personalInfo.email)) {
      setErrors({ ...errors, emailError: "Invalid Email format" });
    } else {
      setErrors({ ...errors, emailError: "" });
    }
  };

  const validatePhone = () => {
    const phoneRegex = /^\+?[0-9]{10,14}$/;
    if (personalInfo.phone.trim() === "") {
      setErrors({ ...errors, phoneError: "Phone number is required" });
    } else if (!phoneRegex.test(personalInfo.phone)) {
      setErrors({ ...errors, emailError: "Invalid Phone number" });
    } else {
      setErrors({ ...errors, phoneError: "" });
    }
  };

  return (
    <div className="flex flex-col gap-2 py-[2rem]">
      <HeaderText
        header={"Personal info"}
        para={"Please provide your name, email address, and phone number"}
      />
      <form className="mt-4">
        <label htmlFor="">
          <div className="flex justify-between items-center">
            <p>Name</p>
            {errors.nameError && (
              <small className="text-strawberryRed font-semibold">
                {errors.nameError}
              </small>
            )}
          </div>
          <input
            onFocus={validateName}
            onBlur={validateName}
            onChange={(e) =>
              setPersonInfo({ ...personalInfo, name: e.target.value })
            }
            value={personalInfo.name}
            type="text"
            className="focus:border-marineBlue p-1 px-3"
          />
        </label>
        <label htmlFor="" className="my-4 block">
          <div className="flex justify-between items-center">
            <p>Email Address</p>
            {errors.emailError && (
              <small className="text-strawberryRed font-semibold">
                {errors.emailError}
              </small>
            )}
          </div>
          <input
            onFocus={validateEmail}
            onBlur={validateEmail}
            onChange={(e) => {
              setPersonInfo({ ...personalInfo, email: e.target.value });
              validateEmail();
            }}
            value={personalInfo.email}
            type="email"
            className="focus:border-marineBlue p-1 px-3"
          />
        </label>
        <label htmlFor="">
          <div className="flex justify-between items-center">
            <p>Phone Number</p>
            {errors.phoneError && (
              <small className="text-strawberryRed font-semibold">
                {errors.phoneError}
              </small>
            )}
          </div>
          <input
            onFocus={validatePhone}
            onBlur={validatePhone}
            onChange={(e) =>
              setPersonInfo({ ...personalInfo, phone: e.target.value })
            }
            value={personalInfo.phone}
            type="tel"
            className="focus:border-marineBlue p-1 px-3 "
          />
        </label>
      </form>
      <button
        onClick={() => navigate("/selectPlan")}
        className="bg-marineBlue w-auto text-mywhite hover:bg-purplishBlue self-end p-3 py-2 rounded-md mt-[2rem]"
      >
        Next Step
      </button>
    </div>
  );
};

export default PersonalInfo;
