import React from "react";
import { Card, CardHeader, CardMedia } from "@mui/material";
import { Character } from "../Character/Character";
import { Link } from "react-router-dom";
import routes from "../../routes";

export const Characters = ({ characters }) => {
  const getCharacterInfo = () => {
    console.log("forrito de mierda");
    <Link to={routes.WHAT_I_DO}>WHAT I DO</Link>;
  };
  if (characters === null) return null;
  console.log(characters);
  return (
    <div className="row">
      <h1> personajes: </h1>
      {characters.map((character) => (
        <div className="col" key={character.id}>
          {/*<Card>*/}
          {/*  <img src={character.image} alt="" />*/}
          {/*</Card>*/}
          <Card
            sx={{ maxWidth: 345 }}
            onClick={() => {
              getCharacterInfo(characters[character.id]);
            }}
          >
            <CardHeader title={character.name} />
            <CardMedia
              component="img"
              height="194"
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
