import React from "react";

const HeaderText = ({ header, para }) => {
  return (
    <div>
      <h1 className="font-bold text-marineBlue text-2xl">{header}</h1>
      <p className="text-coolGray">{para}</p>
    </div>
  );
};

export default HeaderText;
