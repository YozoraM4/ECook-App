import { RECIPE, UPDATE } from "../type";

const initialState = {
    Recipes: [],
};

export default (state = initialState, action) => {
    switch(action.type) {
        case RECIPE:
            return{
                ...state,
                Recipes: [...state.Recipes, action.addRecipe]
            };

        case UPDATE: 
            return{
                Recipes: state.Recipes.filter(item=> item.id !== action.removeItem)
            }
        default:
            return{Recipes: state.Recipes};
    }
}
