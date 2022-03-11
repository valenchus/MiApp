import React, { Fragment } from "react";
import {
  Card,
  CardHeader,
  CardMedia,
  Pagination,
  Typography,
} from "@mui/material";
import { useParams } from "react-router-dom";
import { gql, useLazyQuery, useQuery } from "@apollo/client";
import Characters from "../Characters/Characters";
import { CharacterStyles } from "./CharacterStyles";

const CHARACTER_BY_ID = gql`
  query getCharacterById($id: ID!) {
    character(id: $id) {
      name
      status
      species
      image
    }
  }
`;

export const Character = () => {
  const classes = CharacterStyles();
  const { id } = useParams();
  const { data, error, loading } = useQuery(CHARACTER_BY_ID, {
    variables: { id: id },
  });
  console.log({ id });
  console.log({ data });

  // const { character = {} } = data; rompe
  // const { name = "Unkwnown name", status = "nothing" } = character;
  if (error) return <p> error...</p>;
  // console.log({ data });

  return (
    <div>
      {loading ? (
        <p>loading...</p>
      ) : (
        <div className={classes.card}>
          <Card>
            <CardHeader title={data.character.name} />
            <CardMedia component="img" image={data.character.image} alt="" />
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              paragraph
            >
              Status: {data.character.status}{" "}
            </Typography>
            <Typography
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
              paragraph
            >
              Specie: {data.character.species}{" "}
            </Typography>
          </Card>
        </div>
      )}
    </div>
  );
};
