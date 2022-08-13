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
            const updateData = {
                id: action.updateRecipe.id,
                name: action.updateRecipe.name,
                image: action.updateRecipe.image,
                duration: action.updateRecipe.duration,
                style: action.updateRecipe.style,
                serve: action.updateRecipe.serve,
                like: action.updateRecipe.like + 1,
                ingredients: action.updateRecipe.ingredients,
                instructions: action.updateRecipe.instructions,
            }
            return{
                Recipes: updateData
            };

        case SEARCH: 
            return{
                Recipes: state.Recipes.filter((item)=> item.name.toLowerCase().includes(action.searchRecipe))
            }
        default:
            return{Recipes: state.Recipes};
    }
}
