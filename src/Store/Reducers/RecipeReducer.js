import {
  GET_RECIPE,
  ACTIVE_RECIPE,
  REMOVE_ACTIVE_RECIPE,
  MODIFY_RECIPE,
  REMOVE_RECIPE,
} from "../ActionTypes";
const initialState = {
  recipies: [
    {
      id: "",
      date: "",
      dish: "",
      chef: "",
      ingredientArray: [],
      description: "",
      image: "",
    },
  ],
  activerecipe: null,
};
const RecipeReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_RECIPE:
      const APIRecipe = action.payload.map((r) => {
        return {
          ...r,
          id: r._id,
          date: String(r.createdAt),
        };
      });
      return {
        ...state,
        recipies: APIRecipe,
      };
    case ACTIVE_RECIPE:
      return {
        ...state,
        activerecipe: state.recipies.find((r) => r.id === action.payload),
      };
    case REMOVE_ACTIVE_RECIPE:
      return {
        ...state,
        activerecipe: null,
      };
    // case CREATE_RECIPE:
    //   const createRecipeDublicate = [...state.recipies];
    //   createRecipeDublicate.push(action.payload);
    //   return {
    //     ...state,
    //     recipies: createRecipeDublicate,
    //   };
    case MODIFY_RECIPE:
      const modifyRecipeDublicate = [...state.recipies];
      const mrecipeindex = modifyRecipeDublicate.findIndex(
        (r) => r.id === action.payload.id
      );
      modifyRecipeDublicate[mrecipeindex] = action.payload;
      return {
        ...state,
        recipies: modifyRecipeDublicate,
      };
    case REMOVE_RECIPE:
      const removerecipeDublicate = [...state.recipies];
      const Filtered = removerecipeDublicate.filter(
        (r) => r.id !== action.payload
      );
      return {
        ...state,
        recipies: Filtered,
      };
    default:
      return state;
  }
};
export default RecipeReducer;
