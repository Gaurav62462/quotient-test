import { OrderDataTypes } from "../constant/types"

interface CountValuesProps {
    orderData?:OrderDataTypes
}

const CountValues = ({orderData}:CountValuesProps) =>{

    return(
        <div className="bg-[#F6F8F9] dark:bg-dark_bg  dark:border-[#FFFFFF21] shadow-[0px 3px 6px 0px #0000000F] rounded-[16px] border-[#0E253C1A] border-[1px]">
            <div className="flex p-5 rounded-[16px] dark:bg-field_dark_bg">
             <img src={`images/${orderData?.icon}`} className="cursor-pointer" alt='add' />
             <div className="ml-4">
                <p className="text-[#0E253CD9] text-sm font-medium  dark:text-white">{orderData?.label}</p>
                <p className="text-black_200 text-[22px] font-semibold  dark:text-white">{orderData?.value}</p>
             </div>
             </div>
            <div className="flex dark:border-[#FFFFFF21]  dark:bg-dark_bg rounded-b-[16px] justify-between bg-white px-5 gap-20  border-t-[1px] border-[#0E253C1A] py-3">
            <p className={`flex gap-1 text-[12px] font-medium ${orderData?.isLow ? 'text-[#DC3545] ' : 'text-[#22C55E] '}`}>
            <img src={`images/${orderData?.isLow ? 'trending_down_fill.svg' :'trending_up_line.svg'}`} className="cursor-pointer" alt='add' />
            {orderData?.upDown}%</p>
            <p className="text-[#0E253CD9] text-[12px] font-medium  dark:text-white">From The {orderData?.time}</p>
            </div>
        </div>
    )
}

export default CountValues