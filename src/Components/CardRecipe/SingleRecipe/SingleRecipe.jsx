import React from "react";
import { withRouter } from "react-router";
import { makeStyles } from "@material-ui/core/styles";
import {
  Card,
  CardHeader,
  CardMedia,
  CardContent,
  CardActions,
  Avatar,
  Typography,
  Button,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";
import More from "@material-ui/icons/More";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
    margin: "0 1rem 1rem 2rem",
  },
  media: {
    height: 0,
    paddingTop: "56.25%", // 16:9
  },
  avatar: {
    backgroundColor: red[500],
  },
  button: {
    marginLeft: "auto",
  },
}));

function SingleRecipe(props) {
  // console.log(props)
  const classes = useStyles();

  const { id, chef, date, description, dish, image } = props.recipe;
  const changeRoute = () => {
    props.history.push(`/recipeinfo/${id}`);
  };
  return (
    <div style={{ display: "flex", flexWrap: "wrap" }}>
      <Card className={classes.root}>
        <CardHeader
          avatar={
            <Avatar aria-label="recipe" className={classes.avatar}>
              {chef.substr(0, 1).toUpperCase()}
            </Avatar>
          }
          title={dish}
          subheader={date}
        />
        <CardMedia
          className={classes.media}
          image={image}
          title={description}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Button
            color="secondary"
            className={classes.button}
            onClick={changeRoute}
            startIcon={<More />}
          >
            Recipe Detail
          </Button>
        </CardActions>
      </Card>
    </div>
  );
}

export default withRouter(SingleRecipe);
