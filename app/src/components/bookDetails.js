import React from "react";
import { useQuery } from "@apollo/client";

import { GET_BOOK } from "../queries/queries";

const BookDetails = ({ book }) => {
  const { loading, error, data } = useQuery(GET_BOOK, {
    variables: { id: book },
  });
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  const RenderBook = () => {
    const { book } = data;
    if (book) {
      return (
        <div>
          <h2>{book.name}</h2>
          <p>{book.genere}</p>
          <p>{book.author.name}</p>
          <h3>All books by Author</h3>
          <ul>
            {book.author.books.map(book => (
              <li key={book.id}>{book.name}</li>
            ))}
          </ul>
        </div>
      );
    }
    return <p>Output details here</p>;
  };

  return (
    <div id='book-details'>
      <RenderBook />
    </div>
  );
};

export default BookDetails;
