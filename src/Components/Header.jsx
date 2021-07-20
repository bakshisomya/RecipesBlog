import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  IconButton,
} from "@material-ui/core";
import GridOn from "@material-ui/icons/GridOn";
import GridOff from "@material-ui/icons/GridOff";
import { withRouter } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    marginBottom: "2rem",
  },
  menuButton: {
    marginRight: ".3rem",
  },
  title: {
    flexGrow: 1,
  },
  linkstyle: {
    textDecoration: "none",
    color: "#fff",
  },
}));

function Header(props) {
  const classes = useStyles();
  const switchGrid = () => {
    if (props.location.pathname === "/") {
      props.history.push("/listrecipe");
    } else {
      props.history.push("/");
    }
  };
  const changeRoute = () => {
    if (props.location.pathname === "/create") props.history.push("/");
    else props.history.push("/create");
  };
  return (
    <div className={classes.root}>
      <AppBar color="secondary" position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <span
              role="img"
              aria-label="spoon1"
              aria-labelledby="jsx-a11y/accessible-emoji"
            >
              🥄
            </span>
            फीयुकFood
            <span
              role="img"
              aria-label="spoon2"
              aria-labelledby="jsx-a11y/accessible-emoji"
            >
              🍴
            </span>
          </Typography>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
            onClick={switchGrid}
          >
            {props.location.pathname === "/" ? <GridOff /> : ""}
            {props.location.pathname === "/listrecipe" ? <GridOn /> : ""}
          </IconButton>
          <Button color="inherit" onClick={changeRoute}>
            {props.location.pathname === "/create" ? "Cards" : "Add Recipe"}
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default withRouter(Header);
