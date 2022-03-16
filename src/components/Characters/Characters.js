import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardHeader,
  CardMedia,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CharacterStyles } from "../Character/CharacterStyles";
import {gql, useLazyQuery, useQuery} from "@apollo/client";
import { AppPagination } from "../Pagination/AppPagination";
import {CharactersStyles} from "./CharactersStyles";

const CHARACTERS_BY_PAGE = gql`
  query Character($page: Int, $nameFilter: String) {
    characters(page: $page, filter: { name: $nameFilter }) {
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
const FILTER_CHARACTERS = gql`
query FilterCharacter($page: Int, $name: String){
  characters(page: $page, filter: {name: $name}){
    results{
    id
      name
      image
      status
    }
    info {
      pages
    }
  }
}
`; // deberia pasarle page y name
export const Characters = () => {
  //searchbar

  const [page, setPage] = useState(1);
  const [searchValue, setSearchValue] = useState("");
  const [getCharacters, {data, error, loading}] = useLazyQuery(CHARACTERS_BY_PAGE); //sacar
  const [queryFilter, {data: dataQuery, error: errorQuery, loading: loadingQuery }] = useLazyQuery(FILTER_CHARACTERS); //agregar page

  const classes = CharactersStyles();
  console.log({dataQuery});
  useEffect(()=>{
      queryFilter({variables:{ page }});
  },[page])
  const navigate = useNavigate();

  if (error) return <p> error...</p>;

  const getCharacterInfo = (id) => {
    navigate(`characters/${id}`);
  };
  const handleFilter = e => {
    setSearchValue(e.target.value);
  };
  const handleButton = () => {
  queryFilter({variables: {name: searchValue}})
  }
  return (
<Fragment>
  <input type={"text"} placeholder={"Buscar personaje"} onChange={handleFilter}></input>
  <Button onClick={()=>{handleButton()}}> Buscar</Button>
    <div>
      {loadingQuery ? (
        <p>CARGANDO....</p>
      ) : (
        <Fragment>
          {dataQuery?.characters.results.map((character) => {
            return (
                <div className={classes.card}>
              <Card
                key={character.id}
                onClick={() => {
                  getCharacterInfo(character.id);
                }}
              >
                <CardHeader title={character.name} />
                <CardMedia
                  component="img"
                  image={character.image}
                />
              </Card>
                </div>
            );
          })}
          <AppPagination page={dataQuery?.characters.info.pages} setPage={setPage} />
        </Fragment>
      )}
    </div>
</Fragment>
    // <AppPagination count={data.characters.info.pages} />
  );
};
export default Characters;
