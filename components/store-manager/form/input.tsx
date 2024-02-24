import { ChangeEventHandler } from "react"

const Input = ({label, name, type, value, onChange}: {label: string, name: string, type: string, value:string|number, onChange:ChangeEventHandler}) => {
    return <div className="flex-1">
        <label className="mb-1 block text-[14px] leading-[21px] text-black xl:text-[16px] xl:leading-[21px]">
            {label}
        </label>
        <input
            name={name}
            type={type}
            value={value}
            onChange={onChange}
            className="block w-full appearance-none rounded-[8px] bg-[rgba(0,0,0,0.26)] px-[8px] py-[12px] !placeholder-current !shadow-none !ring-transparent"
        />
    </div>
}

export default Input