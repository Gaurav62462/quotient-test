import { useState } from "react"
import CustomButton from "../CustomButton"
import Input from "../CustomInput"
import { FormType } from "../constant/types"

const options = [
    { label: 'Suchithkumar@Onechanneladmin.Com', value: 'Suchithkumar' },
    { label: 'Gaurav@Onechanneladmin.Com', value: 'Gaurav' }
]

const numberOption = [
    { label: 'US', value: 'us' },
    { label: 'IN', value: 'in' }
]
const AddPhoneNumber = () => {
    const [newNumber, setNewNumber] = useState<FormType[]>([{ country: '', number: '', id: Date.now() }])


    const handleClick = () => {
        setNewNumber([...newNumber, { country: '', number: '', id: Date.now() }])
    }

    const handleOnchange = (e: any, index: number) => {
        const { name, value } = e.target
        let newitems = [...newNumber]
        newitems[index] = {
            ...newitems[index],
            [name]: value
        }
        setNewNumber(newitems)
    }

    const handleRemove = (id: number) => {
        const newVal = newNumber.filter((item) => item.id !== id)
        setNewNumber(newVal)
    }

    return (
        <div>
            <div className="flex mb-2 justify-between">
                <p className="text-black_200 flex text-[12px] font-medium dark:text-white">
                    Phone Number
                </p>
                <div onClick={() => handleClick()} >
                    <img src={`images/add-btn.svg`} className="cursor-pointer" alt='add' />
                </div>
            </div>
            {
                newNumber.map((_item, index) => {
                    return (
                        <div key={index} className="flex items-center mb-2 gap-2">
                            <select className="dark:bg-dark_bg border-[#0E253C4D] dark:text-white dark:border-[#FFFFFF21]  border-[1px] rounded-[12px] h-[38px] px-4" onChange={(e) => handleOnchange(e, index)} name="country" value={_item.country}>

                                {
                                    numberOption.map((option, index) => {
                                        return (
                                            <option key={index} value={option.value}>{option.label}</option> //<img src={`images/us-flag.svg`} alt='disk' />
                                        )
                                    })
                                }
                            </select>
                            <Input name="number" className={'dark:bg-dark_bg border-[#0E253C4D] dark:text-white dark:border-[#FFFFFF21] '} onChange={(e) => handleOnchange(e, index)} value={_item.number} />
                            <CustomButton onClick={() => handleRemove(_item?.id)} className="text-[12px] font-medium bg-transparent text-[#DC3545] border-[#DC3545]">Remove</CustomButton>
                        </div>)
                })
            }
            <div className="border-b-[1px] border-[#0E253C1A] my-3" />
            <div className="flex flex-col">
                <label className="text-[12px] font-medium mb-2 dark:text-white">
                    Contact Owner
                </label>
                <select className="dark:bg-dark_bg border-[#0E253C4D] dark:text-white dark:border-[#FFFFFF21]  border-[#0E253C4D] border-[1px] rounded-[12px] h-[38px] px-4 dark:bg-dark_bg">
                    {
                        options.map((option, index) => {
                            return (
                                <option value={option.value} className="dark:bg-dark_bg" key={index}>{option.label}</option>
                            )
                        })
                    }
                </select>
            </div>
        </div>
    )
}

export default AddPhoneNumber