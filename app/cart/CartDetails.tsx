"use client"
import ProductCard from "@/Components/products/ProductCard"
import Link from "next/link"
import useOrderDetails from "@/Hooks/useOrderDetails"
import { OrderDetailsProps} from "@/app/cart/page"
import { useEffect, useState } from "react"
import Button from "@/Components/Button"

export default function CartDetails({ orderDetails }: { orderDetails: OrderDetailsProps }) {
  const { products } = orderDetails;
  const { setExistingCart,setFinalCart,finalCart } = useOrderDetails();
  const totalPrice=finalCart.reduce((a,item)=>a+item.price,0)

  useEffect(()=>{
   setExistingCart(products)
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[])
  useEffect(()=>{
  
   setFinalCart()
  
  // eslint-disable-next-line react-hooks/exhaustive-deps
  },[setExistingCart])

  if(finalCart.length===0){
    return(
      <>
      <p> Cart is Empty </p>
      <Link href={"/"}>Move To Home Page</Link>
      </>
    )
  }
  
  
    return(
      <>
      <div
      className="h-80 overflow-x-auto">
       {finalCart?.map((item,index)=>(
        <ProductCard
        key={index}
        isCart={true}
        product={item}/>
       ))}
       </div>
    
    <div
    className="flex justify-center items-center gap-4 mt-2">
    <p 
    className="text-center font-bold">Total = <span>{totalPrice.toFixed()}</span>
    </p>
    
    <Link
    href={"/cart/checkout"}>
    <Button
    label="Proceed"
    />
    </Link>
    </div>
    
    </>
  )
}

