import React from "react";
import { Card, CardHeader, CardMedia, Typography } from "@mui/material";

export const Character = ({ character }) => {
  console.log(character);
  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardHeader title={character.name} />
      <CardMedia component="img" height="194" image={character.image} alt="" />
      <Typography paragraph>
        {character.status} {character.species} {character.type}{" "}
      </Typography>
    </Card>
  );
};
