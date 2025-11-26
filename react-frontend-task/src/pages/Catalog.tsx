import React from "react";
import BookCard from "../components/BookCard";
import { useBooks } from "../hooks/useBooks";
import { useCart } from "../context/CartContext";
import "./Catalog.css";

const Catalog: React.FC = () => {
  const { books } = useBooks();
  const { addToCart } = useCart();

  return (
    <section className="catalog-page">
      <div className="catalog-header">
        <div>
          <p className="eyebrow">Discover</p>
          <h1>Catalog</h1>
          <p className="catalog-subtitle">
            Browse our curated collection of fiction, non-fiction, and everything in between.
          </p>
        </div>
      </div>
      <div className="catalog-grid">
        {books.map((book) => (
          <BookCard key={book.id} book={book} onAddToCart={addToCart} />
        ))}
      </div>
    </section>
  );
};

export default Catalog;
