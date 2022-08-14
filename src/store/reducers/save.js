import { ADD_RECIPE, REMOVE_RECIPE } from "../type";

const initialState = {
    savedRecipes: [],
};
export default (state = initialState, action) => {

    switch(action.type) {
        case ADD_RECIPE:
            let food = action.addRecipe
            let update = {
                id: food.id,
                name: food.name,
                image: food.image,
                duration: food.duration,
                style: food.style,
                serve: food.serve,
                like: food.like,
                isLike: food.isLike,
                isSave: true,
                ingredients: food.ingredients,
                instructions: food.instructions,
              }
            return{
                savedRecipes: [...state.savedRecipes, update]
            };
        
        case REMOVE_RECIPE:
            return{
                savedRecipes: state.savedRecipes.filter(item=> item.id !== action.removeRecipe)
            };
            
        default:
            return{savedRecipes: state.savedRecipes};
    }
}
