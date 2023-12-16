"use client"

import { useRouter } from "next/navigation"

export default function Error({error}:{error:Error}) {
  const router=useRouter()
  return (
    <>
    <div>Unexpected Error Encountered</div>
    <button onClick={()=>router.refresh()}>Reset</button>
    </>
  )
}
