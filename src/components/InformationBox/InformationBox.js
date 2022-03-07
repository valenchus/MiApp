import { Button, CardActions, CardContent, Typography } from "@mui/material";
import * as React from "react";
import { HomeStyles } from "../../pages/home/HomeStyles";

const InformationBox = () => {
  const classes = HomeStyles();
  const greet = (msg) => {
    console.log("hello, ", msg);
  };
  return (
    <React.Fragment>
      <CardContent className={classes.informationBox}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          Word of the Day
        </Typography>
        <Typography variant="h5" component="div">
          hola hola
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          adjective
        </Typography>
        <Typography variant="body2">
          well meaning and kindly.
          <br />
          {'"a benevolent smile"'}
        </Typography>
      </CardContent>
      <div>
        <button onClick={greet("david puto")}>click me</button>
        <button onClick={greet("fabra 2")}>click me</button>
      </div>
    </React.Fragment>
  );
};
export default InformationBox;
