import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import { Button } from "@mui/material";

const CHARACTER = gql`
  query getCharacterByID {
    character(id: "2") {
      name
      image
    }
  }
`;
const Portfolio = () => {
  // const { data, error, loading } = useQuery(CHARACTER);
  const [getCharacters, { data, error, loading }] = useLazyQuery(CHARACTER);
  const handleButton = () => {
    console.log("boton");
    getCharacters();
    console.log(data);
  };
  if (error) return <p> error...</p>;
  return (
    <div>
      {loading ? (
        <p>Cargandoo</p>
      ) : (
        <Fragment>
          <Button
            onClick={() => {
              handleButton();
            }}
          >
            Cambiar numero
          </Button>
        </Fragment>
      )}
    </div>
  );
};
export default Portfolio;
