import React, { useState } from "react";
import { useQuery, useMutation } from "@apollo/client";

import { GET_AUTHORS, ADD_BOOK_MUTATION, GET_BOOKS } from "../queries/queries";

const AddBook = props => {
  const { loading, error, data } = useQuery(GET_AUTHORS);

  const [addTodo, { dataMutation }] = useMutation(ADD_BOOK_MUTATION);

  const [bookState, setBookState] = useState({
    name: "",
    genere: "",
    authorId: "",
  });

  const submitFormHandler = e => {
    e.preventDefault();
    addTodo({
      variables: {
        name: bookState.name,
        genere: bookState.genere,
        authorId: bookState.authorId,
      },
      refetchQueries: [{ query: GET_BOOKS }],
    });
  };

  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;

  return (
    <form
      id='add-book'
      onSubmit={e => {
        submitFormHandler(e);
      }}
    >
      <div className='field'>
        <label>Book name:</label>
        <input
          type='text'
          onChange={e => setBookState({ ...bookState, name: e.target.value })}
        />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input
          type='text'
          onChange={e => setBookState({ ...bookState, genere: e.target.value })}
        />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select
          onChange={e =>
            setBookState({ ...bookState, authorId: e.target.value })
          }
        >
          <option>Select Author</option>
          {data.authors.map(author => (
            <option value={author.id} key={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button type='submit'>+</button>
    </form>
  );
};

export default AddBook;
