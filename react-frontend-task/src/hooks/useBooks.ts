import { useMemo } from "react";
import type { Book } from "../types/book";

const mockBooks: Book[] = [
  {
    id: "1",
    title: "The Great Gatsby",
    author: "F. Scott Fitzgerald",
    description:
      "A portrait of the Jazz Age in all of its decadence and excess.",
    genre: "Classic",
    price: 1200,
    coverImage: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c",
    rating: 4.8,
    pages: 208,
  },
  {
    id: "2",
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    description:
      "A gripping, heart-wrenching, and wholly remarkable tale of coming-of-age.",
    genre: "Classic",
    price: 1100,
    coverImage: "https://images.unsplash.com/photo-1529655683826-aba9b3e77383",
    rating: 4.9,
    pages: 281,
  },
  {
    id: "3",
    title: "1984",
    author: "George Orwell",
    description:
      "A dystopian social science fiction novel and cautionary tale.",
    genre: "Science Fiction",
    price: 1300,
    coverImage: "https://images.unsplash.com/photo-1526318896980-cf78c088247c",
    rating: 4.7,
    pages: 328,
  },
  {
    id: "4",
    title: "Pride and Prejudice",
    author: "Jane Austen",
    description:
      "A romantic novel that charts the emotional development of the protagonist.",
    genre: "Romance",
    price: 1050,
    coverImage: "https://images.unsplash.com/photo-1516979187457-637abb4f9353",
    rating: 4.8,
    pages: 279,
  },
  {
    id: "5",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    description:
      "A fantasy novel and children's book by English author.",
    genre: "Fantasy",
    price: 1400,
    coverImage: "https://images.unsplash.com/photo-1463320726281-696a485928c7",
    rating: 4.9,
    pages: 310,
  },
  {
    id: "6",
    title: "Becoming",
    author: "Michelle Obama",
    description:
      "An intimate, powerful, and inspiring memoir by the former First Lady.",
    genre: "Memoir",
    price: 1600,
    coverImage: "https://images.unsplash.com/photo-1481627834876-b7833e8f5570",
    rating: 4.8,
    pages: 448,
  },
  {
    id: "7",
    title: "Atomic Habits",
    author: "James Clear",
    description:
      "An Easy & Proven Way to Build Good Habits & Break Bad Ones.",
    genre: "Self-Help",
    price: 1700,
    coverImage: "https://images.unsplash.com/photo-1507842217343-583bb7270b66",
    rating: 4.9,
    pages: 320,
  },
  {
    id: "8",
    title: "Educated",
    author: "Tara Westover",
    description:
      "A memoir about a young woman who, kept out of school, leaves her survivalist family.",
    genre: "Memoir",
    price: 1500,
    coverImage: "https://images.unsplash.com/photo-1495446815901-a7297e633e8d",
    rating: 4.8,
    pages: 352,
  },
];

export const useBooks = () => {
  const books = useMemo(() => mockBooks, []);
  const featuredBooks = useMemo(() => books.slice(0, 4), [books]);

  const getBookById = (bookId: string) =>
    books.find((book) => book.id === bookId);

  return { books, featuredBooks, getBookById };
};

export default useBooks;
