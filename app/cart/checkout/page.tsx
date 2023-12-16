"use client"
import useOrderDetails from '@/Hooks/useOrderDetails'
import React, { useState } from 'react'
import Button from '@/Components/Button'
import Link from 'next/link'
import UserDetails from '@/Components/UserDetails'

export default function Checkout() {
  const [userDetails, setUserDetails]=useState({
    name:"",
    address:"",
    contact:""
  })

    const {finalCart}=useOrderDetails()
    const cartLength=finalCart.length
    const totalPrice=finalCart.reduce((a,b)=>a+b.price,0)

    const handleChange=( e:React.ChangeEvent<HTMLInputElement>)=>{
     
      setUserDetails((prev)=>({...prev,[e.target.name]:e.target.value}))
      console.log(e.target.value)
    }

    const handleCheckout=(e:React.FormEvent)=>{
    e.preventDefault()
    console.log(userDetails)

    }
   
  return (
    <form onSubmit={handleCheckout}>
    <div 
    className='flex flex-col gap-4 justify-between items-center border-black border-2 '>
      <div
      className='flex flex-col gap-4'>
        <UserDetails
          handleChange={handleChange}
      />
       
      </div>
        <div
        className=' underline  flex flex-center flex-col items-center'>
          <p>Order Details ({cartLength})</p>
          <div
          className='h-20  overflow-x-auto'>
        {finalCart.map((i)=>(
          <Link
          href="/cart"
         className='text-xs text-slate-500 text-right bg-red-00'
         key={i.id}>{i.title}
         </Link>
         
         ))}
         </div>
         </div>
         <p
         className='font-bold'
         >
          Total  {totalPrice.toFixed()}
         </p>
         <Button
         label='Checkout'
         type="submit"
        />
        
    </div>
    
    </form>
  )
}
