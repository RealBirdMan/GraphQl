import React from "react";
import { gql, useQuery } from "@apollo/client";

const GET_Authors = gql`
  {
    authors {
      name
      id
    }
  }
`;

const AddBook = props => {
  const { loading, error, data } = useQuery(GET_Authors);
  if (loading) return "Loading...";
  if (error) return `Error! ${error.message}`;
  console.log(data);

  return (
    <form id='add-book'>
      <div className='field'>
        <label>Book name:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Genre:</label>
        <input type='text' />
      </div>

      <div className='field'>
        <label>Author:</label>
        <select>
          <option>Select Author</option>
          {data.authors.map(author => (
            <option value={author.id} key={author.id}>
              {author.name}
            </option>
          ))}
        </select>
      </div>

      <button>+</button>
    </form>
  );
};

export default AddBook;
