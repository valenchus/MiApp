import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { Character } from "../Character/Character";
import { Link, useNavigate } from "react-router-dom";
import routes from "../../routes";
import { CharacterStyles } from "../Character/CharacterStyles";

export const Characters = ({ characters }) => {
  const classes = CharacterStyles();
  const navigate = useNavigate();
  const getCharacterInfo = (id) => {
    navigate(`characters/${id}`);
    //redirecciona con un id
  };
  if (characters === null) return null;
  console.log(characters);
  return (
    <div>
      <h1> personajes: </h1>
      {characters.map((character) => (
        <div key={character.id} className={classes.cards}>
          {/*<Card>*/}
          {/*  <img src={character.image} alt="" />*/}
          {/*</Card>*/}
          <Card
            sx={{ maxWidth: 600 }}
            onClick={() => {
              getCharacterInfo(character.id);
            }}
          >
            <CardHeader title={character.name} />
            <CardMedia
              component="img"
              height="250"
              image={character.image}
              alt=""
            />
          </Card>
        </div>
      ))}
    </div>
  );
};
export default Characters;
