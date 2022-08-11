import { LIKE, UNLIKE } from "../type";

const initialState = {
    likedRecipe: [],
};
export default (state = initialState, action) => {

    switch(action.type) {
        case LIKE:
            return{
                likedRecipe: [...state.likedRecipe, action.like]
            };
        
        case UNLIKE:
            return{
                likedRecipe: state.likedRecipe.filter(item=> item.id !== action.unlike)
            };
            
        default:
            return{likedRecipe: state.likedRecipe};
    }
}
