import Heading from "@/Components/Heading"
import ProductsList from "@/app/product/ProductsList"
import fetchData from "../Fetch/fetchData"


export default async function Home() {

const productsApi ='https://fakestoreapi.com/products'
const allProducts=await fetchData(productsApi)

  return (
    <div
    className="
    mt-4
    p-4">
   <Heading
   title="Our Products"
   subtitle="Get Best Buy For You"
   />
   <ProductsList
   data={allProducts}
   />
   </div>

  )
}
