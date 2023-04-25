import React from "react";

function BookList(props) {
  const bookItem = props.bookData.map((items) => {
    if (items.isSold) {
      return (
        <li
          style={{
            color: "red",
          }}
        >
          {items.name}  is already sold
        </li>
      );
    }
    return <li >{items.name}</li>;
  });

  return <ul>{bookItem}</ul>;
}

export default BookList;
