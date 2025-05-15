import { ActivityItem, ButtonGroup } from "../constant/CommonFunction";
import { recentActivitie } from "../constant/constent";

const RecentActivities = () => {

    const btns = [
        {label:'Message',value:'message'},
        {label:'Email',value:'email'},
    ]

    return (
        <div className=''>
            <div className='dark:border-[#FFFFFF21] flex p-3 items-center justify-between border-b-[1px] border-[#0E253C1A]'>
                <p className='text-black_200 font-semibold text-[18px] dark:text-white'>Recent Activities</p>
                <div className=" border-[1px] border-[#0E253C1A] rounded-[12px] h-[38px]">
                      <ButtonGroup btns={btns} />
                </div>
            </div>

            <div className="p-3 pt-2 max-h-[330px] overflow-scroll">
                {Object.entries(recentActivitie).map(([month, txs]: any) => {
                    return (
                        <div key={month} >
                            <h3 className="text-xs text-gray-500 uppercase mt-3">{month}</h3>
                            <div>
                                {txs.map((tx: any, index: number) => (
                                    <div key={index}>
                                        <ActivityItem key={index} {...tx} />
                                    </div>
                                ))}
                            </div>
                        </div>
                    )
                }
                )}
            </div>
        </div>
    );
}

export default RecentActivities