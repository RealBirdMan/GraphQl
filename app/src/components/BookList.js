import React, { useState } from "react";
import { useQuery } from "@apollo/client";

import BookDetails from "./bookDetails";
import { GET_BOOKS } from "../queries/queries";

const BookList = props => {
  const [selectedBook, setSelectedBook] = useState(null);

  const { loading, error, data } = useQuery(GET_BOOKS);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <div>
      <ul id='book-list'>
        {data.books.map(book => (
          <li key={book.id} onClick={e => setSelectedBook(book.id)}>
            {book.name}
          </li>
        ))}
      </ul>
      <BookDetails book={selectedBook} />
    </div>
  );
};

export default BookList;
