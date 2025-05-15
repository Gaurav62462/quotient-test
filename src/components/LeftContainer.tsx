import React from "react"
import { TextWithIcon, WhiteBgBox } from "../constant/CommonFunction"
import { textIcon } from "../constant/constent"
import AddPhoneNumber from "./AddPhoneNumber"
import Input from "../CustomInput"

const LeftContainer = () => {
    return (
        <div className="w-full md:w-[25%]">
            <WhiteBgBox className="dark:bg-dark_bg dark:border-[#FFFFFF21] p-3">
                <div className="w-12 h-12 p-3 bg-[#513CCE] rounded-[50%] text-white text-[16px] font-semibold relative">
                    TG
                    <p className="text-[9px] dark:bg-[#010D194D] font-medium bg-[#F6F8F94D] w-10 absolute left-[3px] text-center">
                        Edit
                    </p>
                    <img src={`images/online.svg`} className="absolute right-0 top-[2px]" alt='online' />
                </div>
                <div className="flex flex-col ml-3 ">
                    <div className="flex">
                        <p className="text-black_200 dark:!text-white text-[16px] font-semibold">
                            Truck Grear
                        </p>
                        <p className="text-[#E48D21] bg-[#E48D211A] text-[10px] font-medium flex items-center rounded-[99px] px-2 ml-[6px]">
                            Business
                        </p>
                    </div>
                    <p className="text-[#0E253CD9] text-[12px] font-normal dark:text-white">
                        jillali@onechanneladmin.com
                    </p>
                </div>
                <p className="text-[#513CCE] flex text-[12px] font-normal">
                    Change status
                </p>
            </WhiteBgBox>
            <WhiteBgBox className="py-4 my-4 px-6 dark:bg-dark_bg dark:border-[#FFFFFF21]">
                {
                    textIcon.map((_item, index) => {
                        return (
                            <React.Fragment key={index}>
                                <TextWithIcon isDarkIcon={_item.isDarkIcon} text={_item.text} icon={_item.iconName} />
                                <div className="border-r-[1px] border-[#0E253C1A]" />
                            </React.Fragment>
                        )
                    })
                }
            </WhiteBgBox>
            <WhiteBgBox className="flex-col dark:bg-dark_bg dark:border-[#FFFFFF21] p-4">
                <div className="flex mb-2 justify-between">
                    <p className="text-black_200 flex text-[16px] font-semibold dark:text-white">
                        Business Details
                    </p>
                    <img src={`images/disk.svg`} alt='disk' />
                </div>
                <label className={'text-black_200 font-medium text-[12px] pb-1 dark:text-white'}>
                    Account Name
                </label>
                <Input className={'dark:bg-dark_bg dark:text-white dark:border-[#FFFFFF21] '} />

                <div className="border-b-[1px] border-[#0E253C1A] my-3" />

                <label className={'text-black_200 font-medium text-[12px] pb-1 dark:text-white'}>
                    Email
                </label>
                <Input className={'dark:bg-dark_bg dark:text-white dark:border-[#FFFFFF21] '} />
                <div className="border-b-[1px] border-[#0E253C1A] my-3" />
                <AddPhoneNumber />
            </WhiteBgBox>
        </div>
    )
}

export default LeftContainer