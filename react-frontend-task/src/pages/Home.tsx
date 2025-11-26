import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../components/Button';
import { useBooks } from '../hooks/useBooks';
import { useCart } from '../context/CartContext';
import './Home.css';

const Home: React.FC = () => {
  const { featuredBooks } = useBooks();
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="home">
      <section className="welcome-section">
        <div className="welcome-content">
          <h1 className="welcome-title">Welcome to Bookstore</h1>
          <p className="welcome-description">
            Discover your next favorite book from our curated collection of
            timeless classics and modern bestsellers. Immerse yourself in
            stories that inspire, entertain, and transform.
          </p>
          <div className="welcome-buttons">
            <Button variant="primary" onClick={() => navigate('/catalog')}>
              Browse Collection
            </Button>
            <Button variant="secondary" onClick={() => navigate('/cart')}>
              View Cart
            </Button>
          </div>
        </div>
      </section>

      <section className="featured-section">
        <div className="featured-container">
          <h2 className="featured-title">Featured Books</h2>
          <p className="featured-subtitle">
            Explore our handpicked selection of must-read books
          </p>
          <div className="books-grid">
            {featuredBooks.map((book) => (
              <div key={book.id} className="book-card">
                <div className="book-image-container">
                  <img
                    src={book.coverImage}
                    alt={book.title}
                    className="book-image"
                  />
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-price">Rs {book.price.toFixed(2)}</p>
                  <Button
                    variant="primary"
                    onClick={() => addToCart(book)}
                    className="book-button"
                  >
                    Add to Cart
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;

