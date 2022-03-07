import { makeStyles } from "@mui/styles";

export const HomeStyles = makeStyles({
  majorDiv: {
    background: "black",
    display: "flex",
    alignItems: "center",
    flexDirection: "column",
    "& li": {
      listStyleType: "none",
    },
  },
  title: {
    fontSize: "2rem",
    color: "white",
    display: "flex",
    justifyContent: "center",
  },
  informationBox: {
    background: "red",
  },
  square: {
    backgroundColor: "green",
    height: "20vh",
    width: "20vw",
    margin: "0 0 1vh 0",
  },
  li: {
    listStyleType: "none",
  },
});
