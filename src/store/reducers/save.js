import { ADD_RECIPE, REMOVE_RECIPE } from "../type";

const initialState = {
    savedRecipes: [],
};
export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_RECIPE:
            return{
                savedRecipes: [...state.savedRecipes, action.addRecipe]
            };
        
        case REMOVE_RECIPE:
            return{
                savedRecipes: state.savedRecipes.filter(item=> item.id !== action.removeRecipe)
            };
            
        default:
            return{savedRecipes: state.savedRecipes};
    }
}
