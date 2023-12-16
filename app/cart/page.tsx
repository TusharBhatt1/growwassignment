import Heading from '../components/Heading'
import { getOrderDetails } from '../fetch/fetchOrderDetails'
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

 export default async function Cart() {
 
     const orderDetails:OrderDetailsProps = await getOrderDetails()
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
