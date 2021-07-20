import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import {
  GetActiveRecipe,
  RemoveActiveRecipe,
  GetRecipes,
} from "../../Store/Actions";

import { makeStyles } from "@material-ui/core/styles";
import { Paper, CardMedia } from "@material-ui/core";
import AddRecipe from "../AddRecipe";
import RecipeDetail from "./RecipeDetail/RecipeDetail";
import { Redirect, Route, Switch } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    width: "80%",
    minHeight: "500px",
    margin: "0 0 2rem 8.5rem",
  },
  details: {
    display: "flex",
    flexDirection: "column",
    width: "50%",
  },
  cover: {
    width: "50%",
  },
  buttons: {
    marginTop: "2rem",
    textAlign: "right",
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

function RecipeInfo(props) {
  const classes = useStyles();

  const [state, setstate] = useState({
    dish: "",
    image: "",
  });
  useEffect(() => {
    // props.GetActiveRecipe(props.match.params.id)
    if (props.activerecipe === null) {
      setTimeout(() => {
        props.GetActiveRecipe(props.match.params.id);
      }, 1500);
    } else {
      setstate(props.activerecipe);
    }
    return () => {
      if (props.activerecipe) {
        props.RemoveActiveRecipe();
      }
    };
  }, [props]);
  // console.log(props)
  return (
    <Paper elevation={3} className={classes.root}>
      <CardMedia
        className={classes.cover}
        image={state.image && state.image}
        title={state.dish}
      />
      <div className={classes.details}>
        <Switch>
          <Route
            exact
            path={`${props.match.url}`}
            component={RecipeDetail}
          ></Route>
          <Route path={`${props.match.url}/edit`} component={AddRecipe}></Route>
          <Redirect from={props.match.url} to={`${props.match.url}/info`} />
        </Switch>
      </div>
    </Paper>
  );
}

const mapStateToProps = (state) => {
  // console.log(state)
  return {
    activerecipe: state.RecipeReducer.activerecipe,
  };
};
const mapDispatchToProps = {
  GetActiveRecipe,
  RemoveActiveRecipe,
  GetRecipes,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeInfo);
