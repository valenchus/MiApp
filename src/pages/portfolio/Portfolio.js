import { gql, useLazyQuery, useQuery } from "@apollo/client";
import React, { Fragment } from "react";
import {Box, Button, Grid, Paper} from "@mui/material";
import {styled} from "@mui/styles";

const Portfolio = () => {

  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  }));

  return (
      <Grid sx={{background: "black", height: "800px"}} container spacing={2}>
        <Grid item xs={8}>
          <Box sx={{background: "red"}}>xs=8</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{background: "blue"}}>xs=4</Box>
        </Grid>
        <Grid item xs={4}>
          <Box sx={{background: "yellow"}}>xs=4</Box>
        </Grid>
        <Grid item xs={8}>
          <Box sx={{background: "lightblue"}}>xs=8</Box>
        </Grid>
      </Grid>
  );
};
export default Portfolio;
