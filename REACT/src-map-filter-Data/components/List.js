import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
const List = props => {
  // Using the filter method, we can create a new array containing only groceries which haven't been purchased
  const notPurchased = props.groceries.filter(QWQWQWQWQWQW => !QWQWQWQWQWQW.purchased);
  return (
    <ul className="list-group">
      {notPurchased.map(DDSDSDDDSDD => (
        <li className="list-group-item" key={DDSDSDDDSDD.id}>
          {DDSDSDDDSDD.name}
        </li>
      ))}
    </ul>
  );
};

export default List;
