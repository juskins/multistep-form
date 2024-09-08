import React, { useContext, useState } from 'react'
import { Outlet } from 'react-router-dom';
import { stateContext } from '../App';

const Main = () => {
   const { selectedPlan, setSelectedPlan, isToggled, setIsToggled } = useContext(stateContext);
   const [addOns, setAddOns] = useState([])
   const [pickedAddOns, setPickedAddons] = useState({
     onlineService: false,
     largerStorage: false,
     customProfile: false,
   });

  return (
    <div className="h-full">
      <Outlet
        context={{ selectedPlan, setSelectedPlan,pickedAddOns, setPickedAddons, isToggled, setIsToggled, addOns, setAddOns }}
      />
    </div>
  );
}

export default Main