import { Link } from "react-router-dom";
import routes from "../../routes";
import { HeaderStyles } from "./HeaderStyles";

const Header = () => {
  const classes = HeaderStyles();
  return (
    <nav className={classes.headerBar}>
      <Link to={routes.HOME}>HOME</Link> |{" "}
      <Link to={routes.ABOUT_ME}>ABOUT ME</Link>|{" "}
      <Link to={routes.CONTACT}>CONTACT</Link>|{" "}
      <Link to={routes.MY_LIKES}>MY LIKES</Link>|{" "}
      <Link to={routes.PORTFOLIO}>PORTFOLIO</Link>|{" "}
      <Link to={routes.WHAT_I_DO}>WHAT I DO</Link>
    </nav>
  );
};
export default Header;
