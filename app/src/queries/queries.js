import { gql } from "@apollo/client";

export const GET_AUTHORS = gql`
  {
    authors {
      name
      id
    }
  }
`;

export const GET_BOOKS = gql`
  {
    books {
      name
      id
    }
  }
`;

export const GET_BOOK = gql`
  query getBook($id: ID) {
    book(id: $id) {
      name
      genere
      author {
        name
        age
        books {
          name
          id
        }
      }
    }
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation addBook($name: String!, $genere: String!, $authorId: ID!) {
    addBook(name: $name, genere: $genere, authorId: $authorId) {
      name
      id
    }
  }
`;
