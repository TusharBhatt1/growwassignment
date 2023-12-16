import React from 'react'

interface InputProps{
    label?:string,
    placeholder:string,
    onChange:(e:React.ChangeEvent<HTMLInputElement>)=>void
    required?:boolean
    type:"text"| "number" | "tel" ,
    name:string
}
export default function Input({
    label,
    name,
    type,
    placeholder,
    onChange,
    required
}:InputProps) {
  return (
    <div
    className='flex  justify-between mb-4 items-center gap-2'>
    <label
    className='text-left'>{label}</label>
    <input
    className='border-2 border-slate-500 p-1 rounded-xl'
    name={name}
    onChange={onChange}
    type={type}
    required
    placeholder={placeholder}
    />
    </div>
    

  )
}
