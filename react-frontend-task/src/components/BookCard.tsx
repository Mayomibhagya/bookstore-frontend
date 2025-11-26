import React from "react";
import { Link } from "react-router-dom";
import Button from "./Button";
import type { Book } from "../types/book";
import "./BookCard.css";

interface BookCardProps {
  book: Book;
  onAddToCart: (book: Book) => void;
}

const BookCard: React.FC<BookCardProps> = ({ book, onAddToCart }) => {
  return (
    <div className="book-card">
      <Link to={`/books/${book.id}`} className="book-card-image">
        <img src={book.coverImage} alt={book.title} />
      </Link>
      <div className="book-card-content">
        <p className="book-card-genre">{book.genre}</p>
        <h3 className="book-card-title">{book.title}</h3>
        <p className="book-card-author">by {book.author}</p>
        <div className="book-card-footer">
          <span className="book-card-price">Rs {book.price.toFixed(2)}</span>
          <Button variant="primary" onClick={() => onAddToCart(book)}>
            Add to Cart
          </Button>
        </div>
      </div>
    </div>
  );
};

export default BookCard;
