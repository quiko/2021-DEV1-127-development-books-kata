import Books from "../catalogue";
export default function BooksList() {
  return (
    <div>
      <ul data-testid="item-list-wrap">
        {Books.map((book, index) => (
          <li key={index} className="list-item" data-testid="single-item">
            {book.name}
          </li>
        ))}
      </ul>
    </div>
  );
}
