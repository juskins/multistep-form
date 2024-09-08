import { createContext, useState } from "react";
import Sidedbar from "./components/Sidedbar";
import Main from "./components/Main";
import { plans } from "./utils/data";

export const stateContext = createContext();

function App() {
  const [selectedPlan, setSelectedPlan] = useState(plans[0]);
  const [isToggled, setIsToggled] = useState(false);

  return (
    <stateContext.Provider
      value={{ selectedPlan, setSelectedPlan, isToggled, setIsToggled }}
    >
      <div className="w-screen h-screen rounded-md bg-lightGray flex flex-col items-center justify-center">
        <div className="md:flex hidden h-[500px] min-w-[60%] max-w-[90%] p-4 rounded-md bg-white m-auto items-center justify-center">
          <div className="w-[30%] hidden md:block h-full">
            <Sidedbar />
          </div>
          <div className="w-[70%] h-full px-12">
            <Main />
          </div>
        </div>

        {/* Mobile */}
        <div className="flex flex-col md:hidden w-full h-full rounded-md bg-lightGray">
          <div className="w-full">
            <Sidedbar />
          </div>
          <div className="w-[90%] m-auto bg-white px-8 -my-5 rounded-lg">
            <Main />
          </div>
        </div>
      </div>
    </stateContext.Provider>
  );
}

export default App;
