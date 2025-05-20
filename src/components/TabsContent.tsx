import { TabsType } from '../constant/types';
import { orderData, orderSatatus, tabs } from '../constant/constent';
import CountValues from '../components/CountValues';
import { WhiteBgBox } from '../constant/CommonFunction';
import { Tabs } from '../CustomTabs';
import RecentActivities from './RecentActivities.';
import RecentOrders from './RecentOrders';
import Revenue from './Revenue';
import PieChart from './PieChart';
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

import { Navigation, Pagination } from 'swiper/modules'


export default function TabsContent() {

    const options = [
        { value: 'allCategory', label: 'All Category' },
        { value: 'category', label: 'Category 1' }
    ]
    const handleClick = (tab: TabsType) => {

    };

    return (
        <div className="">
            <Tabs tabs={tabs} tabsClick={(val: TabsType) => handleClick(val)} />
            <div className="dark:bg-dark_bg bg-white border-[1px] mt-[-1px] border-[0E253C1A] p-4 dark:!border-[#FFFFFF21]">
                <div className="flex gap-4">
                    <div className="relative">
                        <div className="absolute top-1/2 left-0 z-10 -translate-y-1/2">
                            <button className="swiper-button-prev custom-swiper-button">
                                <img src="/images/left-move.svg" className='w-[60px]' alt="Prev" />
                            </button>
                        </div>
                        <div className="absolute top-1/2 right-0 z-10 -translate-y-1/2">
                            <button className="swiper-button-next custom-swiper-button">
                                <img src="/images/right-move.svg"  className='!w-[70px]'  alt="Next" />
                            </button>
                        </div>

                        <Swiper
                            modules={[Navigation, Pagination]}
                            spaceBetween={16}
                            slidesPerView="auto"
                            // navigation
                            pagination={false}
                            navigation={{
                                nextEl: '.swiper-button-next',
                                prevEl: '.swiper-button-prev',
                            }}
                            className="!pb-10 md:max-w-[950px] max-w-[700px]"
                        >

                            {orderData.map((items, index) => (
                                <SwiperSlide key={index} className="!w-auto">
                                    <CountValues key={index} orderData={items} />
                                </SwiperSlide>
                            ))}
                        </Swiper>
                    </div>
                </div>

                <div className="flex flex-col gap-4 md:flex-row justify-between">
                    <WhiteBgBox className="!bg-[#F7F8F9] dark:border-[#FFFFFF21] dark:!bg-field_dark_bg mt-4 rounded-4 flex-col p-0 ">
                        <div className="flex flex-col gap-2 md:flex-row md:items-center justify-between p-3 border-b-[1px] dark:border-[#FFFFFF21] border-[#0E253C1A]">
                            <p className="text-black_200 font-semibold text-[18px] dark:text-white">Order Status</p>
                            <div className="flex flex-col gap-2 md:flex-row">
                                <select className="bg-white dark:!bg-field_dark_bg border-[1px] dark:border-[#FFFFFF21] dark:text-white border-[#0E253C1A] h-[38px] rounded-[12px] px-6">
                                    {options.map((option, index) => (
                                        <option key={index} value={option.value}>{option.label}</option>
                                    ))}
                                </select>
                                <input
                                    type="date"
                                    className="dark:!bg-field_dark_bg border-[1px] dark:text-white dark:border-[#FFFFFF21] border-[#0E253C1A] h-[38px] rounded-[12px] md:ml-4"
                                />
                            </div>
                        </div>

                        <div className="flex  justify-between">
                            <div className="grid grid-cols-2 w-full">
                                {orderSatatus.map((items, index) => (
                                    <div
                                        key={index}
                                        className={`flex dark:border-[#FFFFFF21] border-[#0E253C1A] items-start md:pt-8 pt-4 pr-4 ${index % 2 === 0 ? 'border-b-[1px] border-r-[1px] last:border-b-0' : 'border-b-[1px] last:border-b-0'
                                            }`}
                                    >
                                        <img className="pl-3" src={`images/${items.icon}`} alt="disk" />
                                        <div className="md:pb-8 pb-4 pl-2">
                                            <p className="text-[#0E253CD9] font-medium text-[12px] dark:text-white">{items.label}</p>
                                            <p className="text-black_200 font-semibold text-[22px] dark:text-white">{items.value}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                            <div className="w-[40%]">
                                <PieChart />
                            </div>
                        </div>
                    </WhiteBgBox>

                    <WhiteBgBox className="mt-4 dark:!bg-field_dark_bg dark:border-[#FFFFFF21] !bg-[#F7F8F9] rounded-4 flex-col p-0 w-full md:w-1/2">
                        <RecentActivities />
                    </WhiteBgBox>
                </div>

                <WhiteBgBox className="mt-4 bg-[#F7F8F9] dark:border-[#FFFFFF21] dark:!bg-field_dark_bg rounded-4 flex-col p-0">
                    <RecentOrders />
                </WhiteBgBox>

                <WhiteBgBox className="mt-4 dark:!bg-field_dark_bg !bg-[#F7F8F9] dark:border-[#FFFFFF21] rounded-4 flex-col p-0">
                    <Revenue />
                </WhiteBgBox>
            </div>
        </div>

    );
}