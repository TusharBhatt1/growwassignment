
import Link from "next/link"
import CartIcon from "../../app/cart/CartIcon"
import Search from "../Search"
import {AiOutlineSearch} from "react-icons/ai"

export default function Navbar() {


  return (
    <div
    className="
    flex justify-around items-center
    p-4
    fixed w-full bg-white
    shadow-md"
    >
    <Link
    href="/"
    >
    Home
    </Link>
    
    <div
    className="hidden sm:block">
        <Search/>
    </div>

    {/* mobile view */}
    <div
    className="block sm:hidden">  
        <AiOutlineSearch
        size={20}/>
    </div>
    <Link
    prefetch
    href="/cart"
    >
     
    <CartIcon/>
    </Link>
   
    </div>
  )
}
