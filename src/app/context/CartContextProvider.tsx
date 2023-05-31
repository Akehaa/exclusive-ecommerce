'use client';

import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

interface CartProviderProps {
  children: ReactNode
}

export interface CartItem {
  id: string,
  name: string,
  imageURL: string,
  price: number,
  quantity: number,
}

interface CartItemContext {
  cartItems: CartItem[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  cartQuantity: number,
  handleAddItemOnCart: (id: string, name: string, imageURL: string, price: number, quantity: number) => void,
  increaseItemQuantity: (id: string) => void
  decreaseItemQuantity: (id: string) => void
  getItemQuantity: (id: string) => number,
  removeFromCart: (name: string) => void,
}

export const CartContext = createContext({} as CartItemContext);

export function CartProvider({ children }: CartProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])

  const cartQuantity = cartItems.reduce(
    (quantity, item) => item.quantity! + quantity, 0
  )

  function handleAddItemOnCart(id: string, name: string, imageURL: string, price: number, quantity: number) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.name === name) == null) {
        return [...currentItem, { id, name, imageURL, price, quantity }]
      } else {
        return currentItem.map(item => {
          if (item.name === name) {
            return { ...item, quantity: item.quantity! + quantity }
          } else {
            return item
          }
        })
      }
    })
  }

  function increaseItemQuantity(id: string) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.id === id) == null) {
        return [...currentItem, { id, quantity: 1 }]
      } else {
        return currentItem.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity + 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function decreaseItemQuantity(id: string) {
    setCartItems(currentItem => {
      if (currentItem.find(item => item.id === id)?.quantity == 1) {
        return currentItem.filter(item => item.id !== id)
      } else {
        return currentItem.map(item => {
          if (item.id === id) {
            return { ...item, quantity: item.quantity - 1 }
          } else {
            return item
          }
        })
      }
    })
  }

  function getItemQuantity(id: string) {
    return cartItems.find(item => item.id === id)?.quantity || 0
  }

  function removeFromCart(id: string) {
    setCartItems(currentItem => {
      return currentItem.filter(item => item.id !== id)
    })
  }

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartQuantity,
        handleAddItemOnCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}