import type { Book } from "./book";

export interface CartItem {
  book: Book;
  quantity: number;
}

export interface CartContextValue {
  items: CartItem[];
  addToCart: (book: Book) => void;
  removeFromCart: (bookId: string) => void;
  updateQuantity: (bookId: string, quantity: number) => void;
  clearCart: () => void;
  total: number;
}
