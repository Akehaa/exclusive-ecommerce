'use client';

import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

interface wishlistProviderProps {
  children: ReactNode
}

export interface wishlistItem {
  id: string,
  name: string,
  imageURL: string,
  price: number,
}

interface wishlistItemContext {
  wishlistItems: wishlistItem[],
  setWishlistItems: Dispatch<SetStateAction<wishlistItem[]>>,
  handleAddItemOnwishlist: (id: string, name: string, imageURL: string, price: number) => void,
  removeFromwishlist: (name: string) => void,
}

export const wishlistContext = createContext({} as wishlistItemContext);

export function wishlistProvider({ children }: wishlistProviderProps) {
  const [wishlistItems, setWishlistItems] = useState<wishlistItem[]>([])

  function handleAddItemOnwishlist(id: string, name: string, imageURL: string, price: number) {
    setWishlistItems(currentItem => {
      if (currentItem.find(item => item.name === name) == null) {
        return [...currentItem, { id, name, imageURL, price }]
      } else {
        return currentItem.map(item => {
          if (item.name === name) {
            return { ...item }
          } else {
            return item
          }
        })
      }
    })
  }

  function removeFromwishlist(id: string) {
    setWishlistItems(currentItem => {
      return currentItem.filter(item => item.id !== id)
    })
  }

  return (
    <wishlistContext.Provider
      value={{
        wishlistItems,
        setWishlistItems,
        handleAddItemOnwishlist,
        removeFromwishlist,
      }}
    >
      {children}
    </wishlistContext.Provider>
  )
}