import React, { useState } from "react"
import { ActivityItemProps, TabsType, TextWithIconProps, WhiteBoxProps } from "./types"
import CustomButton from "../CustomButton"

export const TextWithIcon = ({isDarkIcon,  text, icon }: TextWithIconProps) => {
    return (
        <div className="flex items-center flex-col">
            <img src={`images/${icon}`} className="dark:hidden" alt='' />
            <img src={`images/${isDarkIcon}`} className="dark:block" alt='' />
            <p className="text-[#0E253CD9] text-[12px] font-normal dark:text-white">{text}</p>
        </div>
    )
}

export const WhiteBgBox = ({ children, className }: WhiteBoxProps) => {
    return (
        <div className={`${className && className} justify-between bg-white border-[1px] border-[#0E253C1A] rounded-[16px] flex`}>
            {children}
        </div>
    )
}

export const ActivityItem: React.FC<ActivityItemProps> = ({ iconColor, user, action, target, time, isRply }) => {
    return (
        <div className={`flex items-center gap-2 text-sm py-1 ${isRply && 'ml-8'}`}>

            {isRply ? <> <img src={`images/rply.svg`} className="cursor-pointer dark:hidden block" alt='add' />
            <img src={`images/dark-rply.svg`} className="cursor-pointer dark:block hidden" alt='add' /></>
                : <div className={`w-6 h-6 mt-1 flex justify-center items-center rounded-full ${iconColor}`}>
                    <img src={`images/message-1.svg`} className="cursor-pointer" alt='add' />
                </div>}
            <p className="text-gray-700 flex gap-1">
                <span className="text-[#513CCE] text-[14px] font-medium">{user}</span> <p className="dark:text-white">{action}{' '}</p>
                <span className="text-[#513CCE] text-[14px] font-normal">{target}</span>{' '}
                <span className="text-gray-500 flex dark:text-white"><p className="text-[20px]">• </p>{time}</span>
            </p>
        </div>
    );
};

interface ButtonGroupProps {
    btns:{label:string, value:string}[]
}
export const ButtonGroup : React.FC<ButtonGroupProps> =  ({ btns }) => {
     const [active, setActive] = useState(btns[0].value);
        const handleClick = (tab: TabsType) => {
            setActive(tab.value);
        };
    return (
        <div className="border-[1px] border-[#0E253C1A] !rounded-[12px] dark:border-[#FFFFFF21]">
            {
                btns.map((btn,index) => {
                    return (
                        <CustomButton
                        key={index}
                        className={`text-[14px] h-[40px] !text-[#1D2433] w-[112px] transition-all duration-200 border-transparent   border-0  ${active === btn.value ? 'dark:bg-[#8378FF] dark:!text-white bg-white rounded-[12px] !shadow-[1px_1px_3px_0px_#0000000F] border-1 !border-[#0E253C1A] text-[#1D2433] text-[14px] !font-medium' : 'bg-[#F6F8F9] dark:bg-[#010D19] dark:!text-white !font-normal'}`}
                        onClick={() => handleClick(btn)}
                    >
                        {btn.label}
                    </CustomButton>
                    )
                })
            }
        </div>
    )
}