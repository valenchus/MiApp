import { Box, Paper, Typography } from "@mui/material";
import { HeaderStyles } from "../../components/Header/HeaderStyles";
import { HomeStyles } from "./HomeStyles";
import InformationBox from "../../components/InformationBox/InformationBox";

const Home = () => {
  const classes = HomeStyles();
  return (
    <div className={classes.majorDiv}>
      <ul>
        <li>
          <p className={classes.title}> Centered box</p>
        </li>
        <li>
          <div variant="outlined" className={classes.square} />
        </li>
        <li>
          <div variant="outlined" className={classes.square} />
        </li>
      </ul>
      <InformationBox />
    </div>
  );
};
export default Home;
