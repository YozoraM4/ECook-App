import {RECIPE, UPDATE, SEARCH} from '../type';

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

export const search = data => {
    return {
        type: SEARCH,
        searchRecipe: data,
    };
};