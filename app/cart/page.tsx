import Heading from '@/Components/Heading'
import useOrderDetails from '@/Hooks/useOrderDetails'
import CartDetails from '@/app/cart/CartDetails'
import React from 'react'

export interface ProductType{
    id:number,
    title:string,
    price:number,
    image:string
}
export interface OrderDetailsProps{
    products:ProductType[],
    paymentMethods:string[]

}
export async function GetOrderDetails() {
    const res= await fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details",{next:{revalidate:2}})
    if(!res.ok) throw new Error("Failed to Fetch Cart Details")
    const data = await res.json()
    return data
 }
 export default async function Cart() {
 
     const orderDetails:OrderDetailsProps = await GetOrderDetails()
     console.log(orderDetails)
     
  return (
   <>
   <Heading
   title={'Your Cart'}
   />
    <CartDetails
   orderDetails={orderDetails}/>
   </>
  )
}
