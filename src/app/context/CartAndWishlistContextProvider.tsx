'use client';

import { Item } from '@radix-ui/react-navigation-menu';
import { createContext, ReactNode, useState, Dispatch, SetStateAction } from 'react'

interface CartAndWishlistProviderProps {
  children: ReactNode
}

export interface CartItem {
  id: string,
  name: string,
  imageURL: string,
  price: number,
  quantity?: number,
}

export interface WishlistItem {
  id: string,
  name: string,
  imageURL: string,
  price: number,
}

interface CartAndWishlistItemContext {
  cartItems: CartItem[],
  setCartItems: Dispatch<SetStateAction<CartItem[]>>,
  cartQuantity: number,
  wishlistItems: WishlistItem[],
  handleAddItemOnCart: (id: string, name: string, imageURL: string, price: number, quantity: number) => void,
  increaseItemQuantity: (id: string) => void
  decreaseItemQuantity: (id: string) => void
  getItemQuantity: (id: string) => number,
  removeFromCart: (id: string) => void,
  handleAddItemOnWishlist: (id: string, name: string, imageURL: string, price: number) => void,
  removeFromWishlist: (id: string) => void,
  verifyItemOnWishlist: (id: string) => boolean | undefined,
  handleMoveItemsFromWishlistToCart: () => void,
}

export const CartAndWishlistContext = createContext({} as CartAndWishlistItemContext);

export function CartAndWishlistProvider({ children }: CartAndWishlistProviderProps) {
  const [cartItems, setCartItems] = useState<CartItem[]>([])
  const [wishlistItems, setWishlistItems] = useState<WishlistItem[]>([])

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
            return { ...item, quantity: item.quantity! + 1 }
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
            return { ...item, quantity: item.quantity! - 1 }
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


  function handleAddItemOnWishlist(id: string, name: string, imageURL: string, price: number) {
    setWishlistItems(currentItem => {
      if (currentItem.find(item => item.name === name) == null) {
        return [...currentItem, { id, name, imageURL, price, quantity: 1 }]
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

  function removeFromWishlist(id: string) {
    setWishlistItems(currentItem => {
      return currentItem.filter(item => item.id !== id)
    })
  }

  function verifyItemOnWishlist(id: string) {
    if (wishlistItems.length >= 1) {
      return wishlistItems.some(currentItem => currentItem.id === id)
    }
  }

  function handleMoveItemsFromWishlistToCart() {
    if (cartItems.length == 0) {
      setCartItems(cartItems.concat(wishlistItems))
    } else {
      setCartItems(cartItems.concat(wishlistItems.filter(item => !cartItems.some(cartItem => cartItem.id == item.id))))
    }
    setWishlistItems([])
  }


  return (
    <CartAndWishlistContext.Provider
      value={{
        cartItems,
        setCartItems,
        cartQuantity,
        handleAddItemOnCart,
        increaseItemQuantity,
        decreaseItemQuantity,
        getItemQuantity,
        removeFromCart,
        handleAddItemOnWishlist,
        removeFromWishlist,
        wishlistItems,
        verifyItemOnWishlist,
        handleMoveItemsFromWishlistToCart,
      }}
    >
      {children}
    </CartAndWishlistContext.Provider>
  )
}