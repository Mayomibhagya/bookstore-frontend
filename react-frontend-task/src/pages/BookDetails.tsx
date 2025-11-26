import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";
import { useBooks } from "../hooks/useBooks";
import "./BookDetails.css";

const BookDetails: React.FC = () => {
  const { bookId } = useParams<{ bookId: string }>();
  const { getBookById } = useBooks();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const book = bookId ? getBookById(bookId) : undefined;

  if (!book) {
    return (
      <section className="book-details">
        <div className="book-details-container">
          <p>Book not found.</p>
          <Button variant="primary" onClick={() => navigate("/catalog")}>
            Back to Catalog
          </Button>
        </div>
      </section>
    );
  }

  return (
    <section className="book-details">
      <div className="book-details-container">
        <div className="book-details-image">
          <img src={book.coverImage} alt={book.title} />
        </div>
        <div className="book-details-content">
          <p className="eyebrow">{book.genre}</p>
          <h1>{book.title}</h1>
          <p className="book-details-author">by {book.author}</p>
          <p className="book-details-description">{book.description}</p>
          <ul className="book-meta">
            <li>
              <span>Pages</span>
              <strong>{book.pages}</strong>
            </li>
            <li>
              <span>Rating</span>
              <strong>{book.rating.toFixed(1)}</strong>
            </li>
          </ul>
          <div className="book-details-actions">
            <span className="book-details-price">Rs {book.price.toFixed(2)}</span>
            <Button variant="primary" onClick={() => addToCart(book)}>
              Add to Cart
            </Button>
            <Button variant="secondary" onClick={() => navigate("/catalog")}>
              Continue Browsing
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookDetails;
