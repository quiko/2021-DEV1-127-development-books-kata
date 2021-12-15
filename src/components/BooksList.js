import { useState } from "react";
import Books from "../catalogue";
import checkout from "../lib/functions";

export default function BooksList() {
  const [cart, setCart] = useState([]);
  const [price, setPrice] = useState(0);

  const addToCart = (book) => {
    let newCart = [...cart];
    newCart.push(book);
    setCart(newCart);
  };
  function getPrice() {
    let newPrice = checkout(cart);
    setPrice(newPrice);
  }

  return (
    <div className="container">
      <div data-testid="item-list-wrap" >
        {Books.map((book, index) => (
          <div key={index} className="col-md-4">
            <div className="card " data-testid="single-item">
              <img
                src={book.image}
                className="card-img-top"
                alt="book cover"
              ></img>
              <div className="card-body">{book.name}</div>
            </div>

            <button
              type="button"
              className="btn btn-primary"
              data-testid="button"
              onClick={() => addToCart(book)}
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
      <button data-testid="button" onClick={getPrice}>
        Checkout
      </button>
      {price !== 0 ? <span>Total: {price}€</span> : null}
    </div>
  );
}
