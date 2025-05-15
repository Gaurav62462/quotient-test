import { FunctionComponent, InputHTMLAttributes } from 'react';


type Props = {
  label?: string;
  className?: string;
  type?: string;
  value?:string
  onChange?:(e:HTMLInputElement) => void
} & InputHTMLAttributes<HTMLInputElement>;

const Input: FunctionComponent<Props> = ({
  label = '',
  className = '',
  type = 'text',
  onChange,
  value,
  ...props
}: Props) => {
  return (
    <div className="w-full">
      <label
        className={
          `block text-[#969495] text-[13px] leading-5 ${label && 'pb-2'}`}
      >
        {label}
      </label>
      <input
        type={type ?  type : 'text'}
        value={value}
        onChange={(e)=>onChange && onChange(e)}
        className={
          `${className && className} rounded-[16px] border-[1px] border-[#0E253C4D] pl-7 pr-12 outline-none font-normal text-[17px] text-gray_850 h-[38px] w-full`
        }
        { ...props}
      />
    </div>
  );
};

export default Input;
