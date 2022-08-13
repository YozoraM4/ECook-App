import { RECIPE, UPDATE, SEARCH } from "../type";

const initialState = {
    Recipes: [],
};

export default (state = initialState, action) => {

    switch(action.type) {
        case RECIPE:
            return{
                ...state,
                Recipes: action.addRecipe
            };

        case UPDATE:
            let recipeIndex = state.Recipes.findIndex(
                item => item.id === action.updateRecipe.id
            )
            const updateLike = [...state.Recipes]
            updateLike[recipeIndex] = action.updateRecipe
            return{
                ...state,
                Recipes: updateLike,
            };

        case SEARCH: 
            return{
                Recipes: state.Recipes.filter((item)=> item.name.toLowerCase().includes(action.searchRecipe))
            }
        default:
            return{Recipes: state.Recipes};
    }
}
