import React, { useContext } from 'react'
import { navLinks } from '../utils/data'
import { stateContext } from '../App'
import { useLocation } from 'react-router-dom';

const Sidedbar = () => {
   const location = useLocation();
  return (
    <div className="w-full md:bg-custom-svg md:rounded-md bg-mobile-svg bg-center bg-cover h-full">
      <div className="text-white p-7 flex items-center gap-4 justify-center md:items-start md:flex-col">
        {navLinks.map((link) => (
          <div className={`flex mb-4 gap-4 items-center`} key={link.id}>
            <div
              className={`rounded-full border size-8 flex items-center justify-center ${
                location.pathname === link.url && "bg-lightBlue"
              }`}
            >
              {link.id}
            </div>
            <div className='hidden md:block'>
              <p className="text-pastelBlue text-[14px]">{link.step}</p>
              <p className="font-bold">{link.detail}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Sidedbar