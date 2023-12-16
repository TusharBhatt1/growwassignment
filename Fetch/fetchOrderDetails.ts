export async function getOrderDetails() {
    const res= await fetch("https://groww-intern-assignment.vercel.app/v1/api/order-details",{next:{revalidate:2}})
    if(!res.ok) throw new Error("Failed to Fetch Cart Details")
    const data = await res.json()
    return data
 }