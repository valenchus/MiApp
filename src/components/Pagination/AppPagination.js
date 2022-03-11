import React from "react";
import { makeStyles } from "@mui/styles";
import { Pagination } from "@mui/material";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    bottom: 0,
    zIndex: 200,
    backgroundColor: "yellow",
    padding: "10px 80px",
    color: "white",
    width: "100%",
  },
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "white",
  },
}));

export const AppPagination = ({ page, setPage }) => {
  const classes = useStyles();
  const handleChange = (page) => {
    setPage(page);
    window.scroll(0, 0);
  };
  return (
    <div className={classes.container}>
      <div className={classes.root}>
        <Pagination
          onChange={(e) => {
            handleChange(e.target.textContent); //id
          }}
          style={{ display: "flex", justifyContent: "center" }}
          variant="outlined"
          count={page}
        />
      </div>
    </div>
  );
};
