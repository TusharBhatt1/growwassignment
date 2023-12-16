"use client"
import useCategories from "@/Hooks/useCategories"
import Button from "../Button"
import { useEffect, useState } from "react"


export default  function Categories() {

  useEffect(()=>{
  const categoriesApi="https://fakestoreapi.com/products/categories"
  fetch(categoriesApi)
  .then((res)=>res.json())
  .then((data)=>setAllCategories(data))
  },[])

const[allCategories,setAllCategories]= useState([])

const categoryStore= useCategories()


  return (
    <div
    className="
    flex justify-center gap-4">
      <Button
      label="All"
      onClick={()=>categoryStore.setCategory("")}
      />
        {allCategories?.map((category, index)=>(
            <Button 
            key={index}
            label={category}
            onClick={()=>categoryStore.setCategory(category)}
            />

        ))}
    </div>
  )
}
