import React, { createContext, useContext, useMemo, useState } from "react";
import type { Book } from "../types/book";
import type { CartContextValue, CartItem } from "../types/cart";

const CartContext = createContext<CartContextValue | undefined>(undefined);

interface CartProviderProps {
  children: React.ReactNode;
}

export const CartProvider: React.FC<CartProviderProps> = ({ children }) => {
  const [items, setItems] = useState<CartItem[]>([]);

  const addToCart = (book: Book) => {
    setItems((prev) => {
      const existing = prev.find((item) => item.book.id === book.id);
      if (existing) {
        return prev.map((item) =>
          item.book.id === book.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      }
      return [...prev, { book, quantity: 1 }];
    });
  };

  const removeFromCart = (bookId: string) => {
    setItems((prev) => prev.filter((item) => item.book.id !== bookId));
  };

  const updateQuantity = (bookId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(bookId);
      return;
    }

    setItems((prev) =>
      prev.map((item) =>
        item.book.id === bookId ? { ...item, quantity } : item,
      ),
    );
  };

  const clearCart = () => setItems([]);

  const total = useMemo(
    () => items.reduce((sum, item) => sum + item.book.price * item.quantity, 0),
    [items],
  );

  const value: CartContextValue = {
    items,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    total,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};
