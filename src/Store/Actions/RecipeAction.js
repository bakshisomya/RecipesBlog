import {
  GET_RECIPE,
  ACTIVE_RECIPE,
  REMOVE_ACTIVE_RECIPE,
} from "../ActionTypes";
import axios from "../../utils/axios";

export const GetRecipes = () => (dispatch) => {
  axios
    .post("/recipe/read")
    .then((res) => {
      console.log(res);
      return dispatch({
        type: GET_RECIPE,
        payload: res.data.recipies,
      });
    })
    .catch((err) => console.log(err.response));
};

export const GetActiveRecipe = (id) => {
  return {
    type: ACTIVE_RECIPE,
    payload: id,
  };
};

export const RemoveActiveRecipe = () => {
  return {
    type: REMOVE_ACTIVE_RECIPE,
  };
};
export const CreateRecipe = (recipe) => (dispatch) => {
  axios
    .post("/recipe/create", { ...recipe })
    .then((res) => {
      console.log(res);
      return dispatch(GetRecipes());
    })
    .catch((err) => console.log(err.response));
  // return{
  //     type: CREATE_RECIPE,
  //     payload:recipe
  // }
};

export const ModifyRecipe = (id, recipe) => (dispatch) => {
  axios
    .patch(`/recipe/update/${id}`, { ...recipe })
    .then((response) => {
      console.log(response);
      return dispatch(GetRecipes());
    })
    .catch((err) => console.log(err));
  // return{
  //     type: MODIFY_RECIPE,
  //     payload:modifiedRecipe
  // }
};

export const DeleteRecipe = (id) => (dispatch) => {
  axios
    .delete(`/recipe/delete/${id}`)
    .then((response) => {
      console.log(response);
      return dispatch(GetRecipes());
    })
    .catch((err) => console.log(err));
  // return{
  //     type: REMOVE_RECIPE,
  //     payload:id
  // }
};
