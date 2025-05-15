import React from "react"

export interface DocumentItem {
  price: string
  date: string
  name: string
  type: string
}

export interface TabsType {
  label: string
  value: string
}

export interface TextWithIconProps {
  icon:string
  text:string
  isDarkIcon?:string
}

export interface WhiteBoxProps {
  children: React.ReactNode
  className?:string
}

export interface FormType {
  country:string
  number:string
  id:number
}

export interface OrderDataTypes {
  icon:string
  value:string
  time:string
  upDown:string
  label:string
  isLow:boolean
}


export interface ActivityItemProps {
  iconColor: string;
  user: string;
  action: string;
  target: string;
  time: string;
  isRply?: boolean
};


export interface ButtonGroupProps {
  btns:{label:string}
}