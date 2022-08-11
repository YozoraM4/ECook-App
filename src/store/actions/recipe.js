import {RECIPE, UPDATE} from '../type';

export const recipe = data => {
    return {
        type: RECIPE,
        addRecipe: data,
    };
};

export const update = data => {
    return {
        type: UPDATE,
        updateRecipe: data,
    };
};
