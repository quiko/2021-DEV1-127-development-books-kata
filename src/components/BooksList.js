import { useState } from "react";
import Books from "../catalogue";

export default function BooksList() {
  const [cart, setCart] = useState([]);

  const addToCart = (book) => {
    let newCart = [...cart];
    newCart.push(book);
    setCart(newCart);
  };
  return (
    <div data-testid="item-list-wrap">
      {Books.map((book, index) => (
        <div>
          <div key={index} className="card" data-testid="single-item">
            <img
              src={book.image}
              className="card-img-top"
              alt="book cover"
            ></img>
            <div className="card-body">{book.name}</div>
          </div>
          <button data-testid="button" onClick={() => addToCart(book)}>Add to cart</button>
        </div>
      ))}
      <button >Checkout</button>
    </div>
  );
}
