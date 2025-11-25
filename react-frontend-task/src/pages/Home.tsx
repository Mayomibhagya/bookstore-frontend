import React from 'react';
import Button from '../components/Button';
import './Home.css';

interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  image: string;
}

const featuredBooks: Book[] = [
  {
    id: 1,
    title: 'The Great Gatsby',
    author: 'F. Scott Fitzgerald',
    price: 12.99,
    image: 'https://via.placeholder.com/200x300?text=The+Great+Gatsby',
  },
  {
    id: 2,
    title: 'To Kill a Mockingbird',
    author: 'Harper Lee',
    price: 11.99,
    image: 'https://via.placeholder.com/200x300?text=To+Kill+a+Mockingbird',
  },
  {
    id: 3,
    title: '1984',
    author: 'George Orwell',
    price: 13.99,
    image: 'https://via.placeholder.com/200x300?text=1984',
  },
  {
    id: 4,
    title: 'Pride and Prejudice',
    author: 'Jane Austen',
    price: 10.99,
    image: 'https://via.placeholder.com/200x300?text=Pride+and+Prejudice',
  },
];

const Home: React.FC = () => {
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
            <Button variant="primary" onClick={() => console.log('Browse clicked')}>
              Browse Collection
            </Button>
            <Button variant="secondary" onClick={() => console.log('View All clicked')}>
              View All Books
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
                    src={book.image}
                    alt={book.title}
                    className="book-image"
                  />
                </div>
                <div className="book-info">
                  <h3 className="book-title">{book.title}</h3>
                  <p className="book-author">{book.author}</p>
                  <p className="book-price">${book.price.toFixed(2)}</p>
                  <Button
                    variant="primary"
                    onClick={() => console.log(`Add to cart: ${book.title}`)}
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

