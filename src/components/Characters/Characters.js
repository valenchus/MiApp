import React, { Fragment, useEffect, useState } from "react";
import {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { CharacterStyles } from "../Character/CharacterStyles";
import { gql, useQuery } from "@apollo/client";
import { AppPagination } from "../Pagination/AppPagination";
import { Character } from "../Character/Character";

const CHARACTERS_BY_PAGE = gql`
  query Character($page: Int) {
    characters(page: $page) {
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
export const Characters = () => {
  const [page, setPage] = useState(0);
  const [chars, setChars] = useState([]);
  const [number, setNumber] = useState(0);
  useEffect(() => {});
  const { data, error, loading } = useQuery(CHARACTERS_BY_PAGE, {
    variables: { page },
  });
  const navigate = useNavigate();
  //
  if (error) return <p> error...</p>;
  const classes = CharacterStyles();
  const handleButton = () => {
    console.log("jolis");
  };
  const getCharacterInfo = (id) => {
    navigate(`characters/${id}`);
    //redirecciona con un id
  };
  return (
    <div>
      {loading ? (
        <p>CARGANDO....</p>
      ) : (
        <Fragment>
          <Button
            onClick={() => {
              handleButton();
            }}
          >
            hola
          </Button>
          {data?.characters.results.map((character) => {
            return (
              <Card
                key={character.id}
                sx={{ maxWidth: 345 }}
                onClick={() => {
                  getCharacterInfo(character.id);
                }}
              >
                <CardHeader title={character.name} />
                <CardMedia
                  component="img"
                  height="194"
                  image={character.image}
                />
              </Card>
            );
          })}
          <AppPagination page={data.characters.info.pages} setPage={setPage} />
        </Fragment>
      )}
    </div>
    // <AppPagination count={data.characters.info.pages} />
  );
};
export default Characters;
