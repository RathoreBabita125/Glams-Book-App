// src/context/AddCartContext.jsx
import { createContext, useEffect, useState } from "react";

export const AddCartContext = createContext();

export function AddCartProvider({ children }) {

  const [addedItemCount, setAddedItemCount] = useState(() => {
    const storedCount = localStorage.getItem("addedItemCount");
    return storedCount ? JSON.parse(storedCount) : 0;
  });

  useEffect(()=>{
    localStorage.setItem('addedItemCount', JSON.stringify(addedItemCount))
  },[addedItemCount])

  return (
    <AddCartContext.Provider value={{ addedItemCount, setAddedItemCount }}>
      {children}
    </AddCartContext.Provider>
  );
}
