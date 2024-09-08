import React from 'react'
import thankyou from "../assets/images/icon-thank-you.svg";

const Thankyou = () => {
  return (
     <div className='text-center h-full md:p-0 p-8'>
        <div className="flex flex-col gap-3 h-full items-center justify-center">
           <img src={thankyou} alt="" />
           <p className='text-marineBlue font-semibold text-2xl'>Thank you!</p>
           <p className='text-coolGray'>Thanks for confirming your subscription!We hope you have fun using our platform. If you ever need
              support, please feel free to email us at support@loremgaming.com
           </p>
        </div>
    </div>
  )
}

export default Thankyou