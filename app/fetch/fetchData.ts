const fetchData=async(api:string )=>{
    const res=await fetch(api)
    if(!res.ok) throw new Error("Failed to Fetch")
    const data= await res.json()
    return data
}
export default fetchData