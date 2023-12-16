import { create } from "zustand"

interface CategoriesProps{
    category:string,
    setCategory:(value:string)=>void
}

const useCategories=create<CategoriesProps>((set)=>({
    category:"",
    setCategory:(value)=>set({category:value})
}))
export default useCategories