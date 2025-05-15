import React, { useState } from 'react';
import CustomButton from '../CustomButton';
import { TabsType } from '../constant/types';

interface TabsProps {
    tabs: { label: string, value: string }[],
    tabsClick:(val: TabsType) => void
    initialActive?:string
    className?:string
}

export const Tabs: React.FC<TabsProps> = ({
    tabs,
    tabsClick,
    initialActive,
    className
}) => {
    const [active, setActive] = useState(initialActive || tabs[0].value);
    const handleClick = (tab: TabsType) => {
        tabsClick(tab)
        setActive(tab.value);
    };

    return (
        <div className="flex w-full gap-1 overflow-auto">
                {
                    (tabs || []).map((tab, index) => {
                        return (
                            <CustomButton
                                key={index}
                                className={`${className && className} dark:bg-dark_bg dark:text-white dark:border-[#FFFFFF21] text-[14px] h-[40px] text-velvel_curtain w-[112px] transition-all duration-200  border-2 border-[0E253C1A] !rounded-bl-[0px] !rounded-br-[0px]  ${active === tab.value ? ' bg-white rounded-[12px] border-b-0 !text-[#513CCE] text-[14px] !font-medium' : 'bg-[#F6F8F9] !font-normal'}`}
                                id={tab.value}
                                onClick={() => handleClick(tab)}
                            >
                                {tab.label}
                            </CustomButton>
                        )
                    })
                }
        </div>
    );
}