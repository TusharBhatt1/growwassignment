"use client"
import dynamic from "next/dynamic"
import { useState } from "react"
import { ProductType } from "../cart/page"
const DynamicProductCard= dynamic(()=>import("../../Components/products/ProductCard"),{
    loading:()=><p>Loading</p>
})

export default function AllProducts({data}:{data:ProductType[]}) {

const [allProducts, setAllProducts]=useState<ProductType[]>(data)




  return (
    <div
    className="
    p-10
    grid gap-5
    grid-cols-1
    sm:grid-cols-1
    md:grid-cols-2">
    {
        allProducts.map((product)=>(
           
           <DynamicProductCard
            key={product.id}
            isCart={false}
            product={product}
           />
        ))
    }
    </div>
  )
}
