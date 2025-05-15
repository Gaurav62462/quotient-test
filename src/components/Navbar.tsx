import React, { useState } from "react";
import DarkModeToggle from "./DarkModeToggle";

interface NavBarProps {
  isDarkMode:boolean
  setIsDarkMode:(val:boolean)=>void
}
const NavBar = ({isDarkMode,setIsDarkMode}:NavBarProps) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="">
    <nav className="py-3 dark:bg-dark_bg dark:!text-white px-4 bg-[#FFFFFF] border-b-[1px]  dark:border-[#FFFFFF21] flex-wrap ">
      <div className="flex items-center justify-between">
      <button
          className="md:hidden text-black text-2xl"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? "✖" : "☰"}
        </button>
        <div className={`flex items-center gap-2`}>
          <img src={`images/company-logo.svg`} className="dark:hidden" alt='logo' />
          <img src={`images/dark-logo.svg`} className="dark:block hidden"  alt='logo' />
          
          
          <img src={`images/round-side.svg`} className="dark:hidden"  alt='logo' />
          <img src={`images/dark-round.svg`} className="dark:block hidden" alt='logo' />
        </div>
        <input className="border-[1px] dark:border-[#FFFFFF21] dark:bg-field_dark_bg pl-7 pr-12 rounded-[12px] outline-none h-[38px] w-full max-w-[50%]" type="text" placeholder="Search" />
        
        <div className={`
     absolute md:static top-[60px] left-0 w-full md:w-auto bg-white md:bg-transparent p-4 md:p-0 shadow-md md:shadow-none flex flex-row  md:flex-row md:items-center gap-2 transition-all duration-300 ${isOpen ? "block" : "hidden md:flex"
          }`}>
          <img src={`images/bell.svg`} className="cursor-pointer dark:hidden" alt='bell' />
          <img src={`images/dark-bell.svg`} className="dark:block hidden" alt='' />
          <select className="w-full border-0 rounded-md p-2 dark:border-[1px]  dark:!border-[#FFFFFF21]  dark:bg-field_dark_bg">
            <option>
              Select Client
            </option>
          </select>
        </div>
      </div>
      
    </nav>
    <div className="py-5 flex bg-white justify-between px-4 dark:bg-dark_bg ">
        <span className="flex text-[16px] font-[500] text-[#0E253CD9] dark:!text-white">CRM / Account / <p className="text-[16px] font-[600] text-black_200 dark:!text-white">Account Deatils</p> </span>
        <DarkModeToggle isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode}  />
      </div>
    </div>
  )
}

export default React.memo(NavBar)