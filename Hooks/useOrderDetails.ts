import { create } from "zustand";
import { ProductType } from "../app/cart/page";

interface OrderDetails {
  existingCart: ProductType[];
  setExistingCart: (value: ProductType[]) => void;
  addedItems:ProductType[],
  addItem:(value:ProductType)=>void,
  finalCart:ProductType[]
  setFinalCart: () => void;
  
 

  // quantities: { [key: number]: number };
  // IncreaseQuantity: (id: number) => void;
  // DecreaseQuantity: (id: number) => void;
}

const useOrderDetails = create<OrderDetails>((set) => ({
  existingCart: [],
  addedItems:[],
  setExistingCart: (value: ProductType[]) => set({ existingCart: value }),
  addItem:(value:ProductType)=>set((state)=>({addedItems:[...state.addedItems,value]})),
  finalCart:[],
  setFinalCart:()=>set((state)=>({finalCart:[...state.addedItems,...state.existingCart]})),
}))
 

export default useOrderDetails;
 // quantities: {},
  // IncreaseQuantity: (id: number) => set((state) => ({
  //   quantities: { ...state.quantities, [id]: (state.quantities[id] || 0) + 1 },
  // })),
  // DecreaseQuantity: (id: number) => set((state) => ({
  //   quantities: { ...state.quantities, [id]: (state.quantities[id] || 0) - 1 },
  // })),