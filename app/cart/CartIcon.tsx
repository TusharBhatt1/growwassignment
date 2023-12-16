"use client"
import useOrderDetails from '../hooks/useOrderDetails';
import React from 'react'
import { CiShoppingCart } from "react-icons/ci";
export default function CartIcon() {

    const cartlength= useOrderDetails().addedItems?.length+useOrderDetails().existingCart?.length
    console.log(cartlength)
    
  return (
    <div
    className="flex">
    <CiShoppingCart
  size={30}
    />
     <span
     className="
     h-5 w-4 text-center 
     rounded-full text-sm 
     bg-red-100">
    {cartlength}
    </span>
    </div>
  )
}
