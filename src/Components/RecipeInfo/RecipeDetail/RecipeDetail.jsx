import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { DeleteRecipe } from "../../../Store/Actions";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, CardContent, Typography, Button } from "@material-ui/core";

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
  content: {
    flex: "1 0 auto",
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
  ingredients: {
    marginTop: "1rem",
    padding: "1rem",
    backgroundColor: "rgba(245, 0, 87, .05)",
  },
  ingButtons: {
    marginTop: "1rem",
    "& > *": {
      margin: theme.spacing(1),
    }, //doubt
  },
  addrecipe: {
    padding: "1rem",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  linkstyle: {
    textDecoration: "none",
    color: "#fff",
  },
}));
function RecipeDetail(props) {
  const classes = useStyles();
  const [state, setstate] = useState({
    id: "",
    date: "",
    dish: "",
    chef: "",
    description: "",
    ingredientArray: [],
  });

  useEffect(() => {
    if (props.activerecipe) setstate({ ...props.activerecipe });
  }, [props]);

  const DeleteRecipeHandler = () => {
    props.DeleteRecipe(state.id);
    props.history.push("/");
  };
  // console.log(props)
  const random = () => Math.floor(Math.random() * 3);
  const badgeColor = ["primary", "secondary", "default"];
  const badgeVarient = ["outlined", "contained", "text"];
  const ingredientBadges = state.ingredientArray.map((i) => {
    return (
      <Button
        key={i}
        variant={badgeVarient[random()]}
        color={badgeColor[random()]}
      >
        {i}
      </Button>
    );
  });
  // console.log(props.match.url)
  return (
    <CardContent className={classes.content}>
      <Typography component="h3" variant="h3">
        {state.dish}
      </Typography>
      <Typography variant="subtitle1" color="textSecondary">
        {state.chef}
      </Typography>
      <Typography variant="subtitle2" color="textSecondary">
        {state.date}
      </Typography>
      <br />
      <Typography variant="body1" color="textSecondary">
        {state.description}
      </Typography>

      <Paper elevation={3} className={classes.ingredients}>
        <Typography component="h4" variant="h4">
          <span
            role="img"
            aria-label="ingredient"
            aria-labelledby="jsx-a11y/accessible-emoji"
          >
            🍝
          </span>
          Ingredients
          <div className={classes.ingButtons}>{ingredientBadges}</div>
        </Typography>
      </Paper>

      <div className={classes.buttons}>
        <Button
          variant="contained"
          color="primary"
          onClick={() => props.history.push(`${props.match.url}/edit`)}
        >
          Edit
        </Button>
        <Button
          onClick={DeleteRecipeHandler}
          variant="contained"
          color="secondary"
        >
          Delete
        </Button>
        <Button onClick={() => props.history.goBack()} variant="contained">
          Back
        </Button>
      </div>
    </CardContent>
  );
}
const mapStateToProps = (state) => {
  return {
    activerecipe: state.RecipeReducer.activerecipe,
  };
};

const mapDispatchToProps = {
  DeleteRecipe,
};

export default connect(mapStateToProps, mapDispatchToProps)(RecipeDetail);
