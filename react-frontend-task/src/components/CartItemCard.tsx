import React from "react";
import Button from "./Button";
import type { CartItem } from "../types/cart";
import "./CartItemCard.css";

interface CartItemCardProps {
  item: CartItem;
  onRemove: (bookId: string) => void;
  onUpdateQuantity: (bookId: string, quantity: number) => void;
}

const CartItemCard: React.FC<CartItemCardProps> = ({
  item,
  onRemove,
  onUpdateQuantity,
}) => {
  const { book, quantity } = item;

  const handleQuantityChange = (newQuantity: number) => {
    onUpdateQuantity(book.id, newQuantity);
  };

  return (
    <div className="cart-item-card">
      <div className="cart-item-info">
        <img src={book.coverImage} alt={book.title} className="cart-item-image" />
        <div>
          <h3 className="cart-item-title">{book.title}</h3>
          <p className="cart-item-author">by {book.author}</p>
          <p className="cart-item-price">Rs {book.price.toFixed(2)}</p>
        </div>
      </div>
      <div className="cart-item-actions">
        <div className="quantity-controls">
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(quantity - 1)}
          >
            -
          </button>
          <span className="quantity-value">{quantity}</span>
          <button
            className="quantity-btn"
            onClick={() => handleQuantityChange(quantity + 1)}
          >
            +
          </button>
        </div>
        <Button variant="secondary" onClick={() => onRemove(book.id)}>
          Remove
        </Button>
      </div>
    </div>
  );
};

export default CartItemCard;
