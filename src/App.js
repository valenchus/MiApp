import "./App.css";

import Header from "./components/Header/Header";
import { gql, useQuery } from "@apollo/client";
import Characters from "./components/Characters/Characters";
import { Fragment } from "react";
import { Pagination } from "@mui/material";

const ALL_CHARACTERS = gql`
  query GetCharacters {
    characters {
      results {
        id
        name
        image
      }
      info {
        pages
      }
    }
  }
`;

export default function App() {
  const { data, error, loading } = useQuery(ALL_CHARACTERS);
  if (error) return <p> error...</p>;
  console.log(data);
  return (
    <div>
      <h1>Bookkeeper</h1>
      {loading ? (
        <p>loading...</p>
      ) : (
        <Fragment>
          <Pagination count={data.characters.info.pages} />
          <Characters characters={data?.characters.results} />
        </Fragment>
      )}
      <Header />
    </div>
  );
}
