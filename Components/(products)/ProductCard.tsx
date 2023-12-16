"use client"
import Image from 'next/image'
import Link from 'next/link'
import Button from '../Button'
import { ProductType } from '@/app/cart/page'
import useOrderDetails from '@/Hooks/useOrderDetails'

export default function ProductCard({product,isCart}:{product:ProductType,isCart:boolean}) {

    const{id , title , image, price}= product

    const {addItem}= useOrderDetails()

  return (
    <div
    className='
    flex flex-col justify-between items-center
    gap-7
    p-4
    shadow-md
    text-center'
    >
    <Link
    href={`/product/${id}`}
    className={`

    fadeInAnimation
    w-full h-full
    gap-2 
    ${isCart ? "text-sm grid grid-cols-3 justify-center items-center "
    :
    "flex flex-col justify-center items-center "
    }
    cursor-pointer 
    rounded-lg
    `}>
    <p className='font-bold'>{title}</p>
    <div
    className='flex justify-center items-center'>
    <Image
    src={image}
    alt={title}
    width={50}
    height={50}
    />
    </div>
    <p>Rs {price}</p>
    </Link>
    
{!isCart && (<Button
label='Add To Cart'
onClick={()=>addItem(product)}
/>
)}
    
</div>
  )
}
