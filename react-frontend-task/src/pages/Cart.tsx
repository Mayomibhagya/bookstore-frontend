import React from "react";
import CartItemCard from "../components/CartItemCard";
import Button from "../components/Button";
import { useCart } from "../context/CartContext";
import "./Cart.css";

const Cart: React.FC = () => {
  const { items, total, updateQuantity, removeFromCart, clearCart } = useCart();

  const hasItems = items.length > 0;

  return (
    <section className="cart-page">
      <div className="cart-header">
        <p className="eyebrow">Your Selection</p>
        <h1>Shopping Cart</h1>
        <p className="cart-subtitle">
          Review the books you plan to enjoy. Adjust quantities or continue shopping.
        </p>
      </div>

      {hasItems ? (
        <div className="cart-content">
          <div className="cart-items">
            {items.map((item) => (
              <CartItemCard
                key={item.book.id}
                item={item}
                onRemove={removeFromCart}
                onUpdateQuantity={updateQuantity}
              />
            ))}
          </div>
          <div className="cart-summary">
            <h2>Order Summary</h2>
            <div className="summary-row">
              <span>Items ({items.length})</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <div className="summary-total">
              <span>Total</span>
              <span>Rs {total.toFixed(2)}</span>
            </div>
            <Button variant="primary" onClick={() => alert("Checkout coming soon!")}>
              Proceed to Checkout
            </Button>
            <Button variant="secondary" onClick={clearCart}>
              Clear Cart
            </Button>
          </div>
        </div>
      ) : (
        <div className="cart-empty">
          <p>Your cart is empty. Discover books in the catalog.</p>
        </div>
      )}
    </section>
  );
};

export default Cart;
