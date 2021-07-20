import React, { useEffect, useState } from "react";
import SingleRecipe from "./SingleRecipe/SingleRecipe";
import { connect } from "react-redux";

function CardRecipe(props) {
  const [state, setstate] = useState(null);
  useEffect(() => {
    setstate({ recipies: props.recipies });
  }, [props.recipies]);

  let recipelist = <h1>Loading...</h1>;
  if (state) {
    // console.log(state);
    recipelist = state.recipies.map((r) => (
      <SingleRecipe key={r.id} recipe={r} />
    ));
  }
  return recipelist;
}
const mapStateToProps = (state) => {
  return {
    recipies: [...state.RecipeReducer.recipies],
  };
};

export default connect(mapStateToProps)(CardRecipe);
