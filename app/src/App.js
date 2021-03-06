import React from "react";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

import BookList from "./components/BookList";
import AddBook from "./components/addBook";

const client = new ApolloClient({
  uri: "http://localhost:8080/graphql",
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <div id='main'>
        <h1>My GraphQL Tutorial</h1>
        <BookList />
        <AddBook />
      </div>
    </ApolloProvider>
  );
}

export default App;
