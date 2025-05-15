import { ButtonGroup } from "../constant/CommonFunction"
import ColumnChart from "./ColumnChart"

const Revenue = () => {

     const btns = [
        {label:'Revenue',value:'revenue'},
        {label:'Orders',value:'order'},
        {label:'Customers',value:'customer'}
    ]
    return(
        <div className="w-full dark:!bg-field_dark_bg">
            <div className='flex p-3 !rounded-[16px] dark:!rounded-[16px] dark:bg-field_dark_bg items-center justify-between bg-[#F6F8F9] border-b-[1px] border-[#0E253C1A]'>
                <ButtonGroup btns={btns} />
            </div>
            <ColumnChart />
        </div>
    )
}

export default Revenue