
interface ButtonProps{
    label:string,
    onClick?:()=>void,
    type?:"submit" | "button"
}
export default function Button({
label,
onClick,
type
}:ButtonProps) {
  return (
    <button
    type={type}
    className="
    border-black
    border-2
    p-1
    rounded-md
    hover:bg-red-100
    w-30"
    onClick={onClick}
    >
    {label}
    </button>
  )
}
