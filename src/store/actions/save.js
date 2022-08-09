import {ADD_RECIPE, REMOVE_RECIPE} from '../type';

export const add = data => {
    return {
        type: ADD_RECIPE,
        addRecipe: data,
    };
};

export const remove = data => {
    return {
        type: REMOVE_RECIPE,
        removeRecipe: data,
    }
}