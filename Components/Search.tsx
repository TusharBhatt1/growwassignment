"use client"
import React from 'react'

export default function Search() {
    const handleQuery=(e:React.ChangeEvent<HTMLInputElement>)=>{
     let  input = e.target.value
   
     if(input.charAt(input.length-1)!==" "){
        input=input.replace(/\s/g,"")
    
     }
     

    }
  return (
    <input
    className='border-2 border-black'
    placeholder='What Do you want'
    onChange={handleQuery}
    />
  )
}
