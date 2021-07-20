import React from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    padding: "10px 1.5rem",
  },
  imageSpace: {
    marginRight: "1rem",
  },
}));
function SingleList(props) {
  const classes = useStyles();
  const { image, description, dish, id } = props.recipe;
  const changeRoute = () => {
    props.history.push(`/recipeinfo/${id}`);
  };
  return (
    <div style={{ marginLeft: "2rem" }}>
      <Button
        variant="contained"
        color="secondary"
        className={classes.button}
        title={description}
        onClick={changeRoute}
      >
        <img
          className={classes.imageSpace}
          height={50}
          src={image}
          alt={dish}
        />
        {dish}
      </Button>
    </div>
  );
}

export default withRouter(SingleList);
