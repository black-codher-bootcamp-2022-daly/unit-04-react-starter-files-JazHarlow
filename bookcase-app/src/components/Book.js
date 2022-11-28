import React from 'react';

// function Book(props) {

// //   // console.log(props);
// //   return <div> 
// //     <h2>{props.book.volumeInfo.title}</h2>
// //     <p>Author: {props.book.volumeInfo.authors}</p>
// //     </div>
// // }

function Book({book}) {
  const { title, authors } = book.volumeInfo;
  const { retailPrice } = book.saleInfo;
  console.log(book)
  return (
    <div style={{
      backgroundColor: 'pink'
    }}>
      <h3>Title: {title}</h3>
      <p>Author: {authors}</p>
      <p>{retailPrice && retailPrice.amount}</p>
    </div>
  );
}

export default Book;
