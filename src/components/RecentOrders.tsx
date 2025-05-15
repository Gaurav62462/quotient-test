import { tableHead, tableRow } from "../constant/constent"

const RecentOrders = () => {
    return (
        <div className="overflow-x-auto bg-[#F6F8F9] dark:bg-field_dark_bg rounded-[16px]">
            <div className='flex p-3 items-center justify-between border-b-[1px] border-[#0E253C1A] dark:border-[#FFFFFF21]'>
                <p className='text-black_200 font-semibold text-[18px] dark:text-white'>Recent Orders</p>
            </div>
            <table className="min-w-[800px] w-full ">
                <thead className="dark:bg-dark_bg bg-white dark:border-[#FFFFFF21] text-[#0E253CD9] py-4 text-[12px] font-medium border-b-[1px] border-[#0E253C1A]">
                    <tr>
                        {
                            tableHead.map((head ,index) => {
                                return (
                                    <th key={index}><p className="dark:text-white p-2 text-[12px] font-medium">{head}</p></th>
                                )
                            })
                        }
                    </tr>
                </thead>
                <tbody>
                    {
                        tableRow.map((row, index) => {
                            return (
                                <tr key={index} className="last:border-b-0 !p-4 border-b-[1px] border-[#0E253C1A] dark:border-[#FFFFFF21]">
                                    <td className="text-center">
                                        <p className="text-[14px] font-normal dark:text-white">{row.id}</p>
                                    </td>
                                    <td className="text-center">
                                        <div className="flex items-center justify-start">
                                            <p className="dark:text-white">x{index + 1} </p> <img src={`images/${row.pImg}`} alt='disk' />
                                            <p title={row.product} className="dark:text-white text-[14px] font-normal truncate w-[150px]">{row.product}</p>
                                        </div>
                                    </td>
                                    <td className="text-center"><img className="dark:border-[1px] dark:border-[#FFFFFF1A]  dark:bg-[#FFFFFF0D] dark:rounded-[8px]" src={`images/${row.customer}`} alt='disk' /></td>
                                    <td className="text-center">
                                        <div className="flex items-center justify-start gap-2">
                                            <img src={`images/${row.cImg}`} className="w-6 h-6" alt='channel' />
                                            <p className="text-[14px] font-normal dark:text-white">{row.channel}</p>
                                        </div>
                                    </td>
                                    <td className="text-center"><p className="text-[14px] font-normal dark:text-white">{row.total}</p></td>
                                    <td className="text-center"><p className="text-[14px] font-normal dark:text-white">{row.date}</p></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default RecentOrders