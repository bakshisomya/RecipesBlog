import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import SingleList from "./SingleList/SingleList";

function ListRecipe(props) {
  const [state, setstate] = useState(null);
  useEffect(() => {
    setstate({ recipies: props.recipies });
  }, [props.recipies]);
  let recipielist;
  if (state)
    recipielist = state.recipies.map((r) => {
      return <SingleList key={r.id} recipe={r} />;
    });
  return <>{recipielist}</>;
}
const mapStateToProps = (state) => {
  return {
    recipies: [...state.RecipeReducer.recipies],
  };
};

export default connect(mapStateToProps)(ListRecipe);
